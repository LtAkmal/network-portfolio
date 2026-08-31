require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 3001;
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

if (!WEBHOOK_URL) {
  console.error("DISCORD_WEBHOOK_URL is not set. Copy server/.env.example to server/.env and fill it in.");
  process.exit(1);
}

const app = express();

// Uncomment when deployed behind a reverse proxy / hosting platform (Render, Railway, Nginx, etc.)
// so express-rate-limit reads the real client IP instead of the proxy's.
// app.set("trust proxy", 1);

app.use(express.json({ limit: "20kb" }));
app.use(cors({ origin: ALLOWED_ORIGIN }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many submissions. Please try again later." },
});

const isBlank = (v) => typeof v !== "string" || v.trim().length === 0;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

app.post("/api/contact", contactLimiter, async (req, res) => {
  const body = req.body || {};
  const { name, email, subject, message } = body;
  // Honeypot: a field real users never see or fill. Any value here means a bot.
  const honeypot = body.website;

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    // Pretend success so bots don't learn they were caught.
    return res.status(200).json({ ok: true });
  }

  const missing = ["name", "email", "subject", "message"].filter((key) => isBlank(body[key]));
  if (missing.length > 0) {
    return res.status(400).json({ ok: false, error: `Missing required field(s): ${missing.join(", ")}` });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return res.status(400).json({ ok: false, error: "Email address is not valid." });
  }

  const trimmedName = name.trim().slice(0, 200);
  const trimmedEmail = email.trim().slice(0, 200);
  const trimmedSubject = subject.trim().slice(0, 256);
  const trimmedMessage = message.trim().slice(0, 4000);

  const discordPayload = {
    embeds: [
      {
        title: trimmedSubject,
        description: trimmedMessage,
        color: 0x22d3ee,
        fields: [
          { name: "Name", value: trimmedName, inline: true },
          { name: "Email", value: trimmedEmail, inline: true },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const discordRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      console.error("Discord webhook request failed with status", discordRes.status);
      return res.status(500).json({ ok: false, error: "Failed to deliver message. Please try again later." });
    }

    return res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Error sending message to Discord:", err.message);
    return res.status(500).json({ ok: false, error: "Failed to deliver message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});
