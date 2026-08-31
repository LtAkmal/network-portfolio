# Network Portfolio

A single-file, dark/light-mode portfolio site for IT & Network Engineers — hero, about, skills, experience timeline, projects, certifications, education, an interactive network topology diagram, and a contact form. No build step, no dependencies to install.

## Quick start

1. Open [`index.html`](index.html) in a browser to preview it as-is.
2. Edit the `SITE` object near the top of the `<body>` (search for `const SITE = {`) with your own details — profile, social links, résumé, skills, work experience, projects, certifications, education, and the environment diagram.
3. Save and refresh the browser. That's it — everything on the page reads from `SITE`, so layout, styles, and scripts don't need to be touched.

## Deploying

Since it's a static single file, you can host it anywhere that serves static content, e.g. [GitHub Pages](https://pages.github.com/): enable Pages for this repo (Settings → Pages → Deploy from branch `main`), and the site will be live at `https://<username>.github.io/network-portfolio/`.

## Optional: contact form backend

By default the contact form opens the visitor's email client. To have it submit directly to a form backend (e.g. [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/)) instead, set `form.endpoint` in the `SITE` object to your endpoint URL.
