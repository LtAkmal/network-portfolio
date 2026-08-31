/* ╔════════════════════════════════════════════════════════════╗
   ║  PROFILE DATA — THE ONLY PART YOU NEED TO EDIT              ║
   ║  Replace the contents of the SITE object with your own data.║
   ║  You don't need to touch layout, style, or animation.       ║
   ╚════════════════════════════════════════════════════════════╝ */
const SITE = {

  /* ── 1. PROFILE ──────────────────────────────────────────── */
  profile: {
    fullName : "Akmal Satrio Nugraha",
    initials : "ASN",
    photo    : "assets/img/profile.jpg",
    title    : "IT Infrastructure & Network Specialist",
    typing   : ["IT Infrastructure & Network Specialist","Network Engineer","Cloud & Virtualization Specialist","Systems Administrator"],
    intro    : "Adaptable IT professional specializing in IT infrastructure, cloud computing, and server virtualization — combining a Telecommunication Engineering background with hands-on colocation data center and MikroTik network routing experience.",
    status   : "Available for Opportunities",
    location : "Karawang, West Java, Indonesia",
    focus    : ["IT Infrastructure","Network Engineering","Cloud Computing","Virtualization","Local AI"]
  },

  /* ── 2. SOCIAL & CONTACT ─────────────────────────────────── */
  social: {
    linkedin : "https://www.linkedin.com/in/akmalsatrion",
    github   : "",
    email    : "akmal.satrio.n@gmail.com",
    whatsapp : "6285174442035"     // format internasional, tanpa tanda +
  },

  /* ── 3. CV / RESUME ──────────────────────────────────────── */
  cv: {
    file    : "assets/cv/Akmal-Satrio-Nugraha-CV.pdf",   // put the PDF file in this folder
    updated : "Updated August 2026",
    online  : "#experience"
  },

  /* ── 4. ABOUT ────────────────────────────────────────────── */
  about: {
    heading: "Reliable infrastructure is built quietly, long before anyone notices it working.",
    paragraphs: [
      "I'm an IT professional and network specialist with a background in Telecommunication Engineering, focused on IT infrastructure management, cloud computing, and server virtualization. For over five years I ran my own hosting business end-to-end — architecting bare-metal servers, managing colocation data centers, and keeping systems online for a global client base.",
      "My daily work spans MikroTik routing, Proxmox virtualization, Linux administration, and Layer 4/7 Anti-DDoS mitigation. I care about infrastructure that stays boring — no surprise outages, no undocumented configs, systems that fail gracefully instead of catastrophically.",
      "Lately I've been integrating local AI models — Ollama and LM Studio — into everyday workflows, building privacy-focused assistants that don't leak data to the cloud."
    ],
    highlights: [
      "Founded and ran LtSamune Hosting for 5+ years, from bare-metal deployment to global client acquisition",
      "Implemented Layer 4 & Layer 7 Anti-DDoS mitigation to keep colocation infrastructure resilient",
      "Migrated legacy cloud infrastructure (AWS, OVH, Contabo, Alibaba Cloud) to self-hosted environments to cut costs",
      "Deployed a privacy-focused local LLM assistant with hybrid retrieval across local and internet sources"
    ],
    terminal: [
      { cmd:"whoami",   out:"IT Infrastructure & Network Specialist" },
      { cmd:"uptime",   out:"5+ years running production infrastructure" },
      { cmd:"skills",   out:"MikroTik | Proxmox VE | AWS/GCP/Azure | Anti-DDoS" },
      { cmd:"location", out:"Karawang, Indonesia — open to remote" }
    ]
  },

  /* ── 5. STATS ─────────────────────────────────────────────── */
  stats: [
    { value:"5",   suffix:"+", label:"Years Experience" },
    { value:"10",  suffix:"",  label:"Team Members Led" },
    { value:"3",   suffix:"",  label:"Certifications" },
    { value:"3",   suffix:"",  label:"Cloud Platforms" }
  ],

  /* ── 6. SKILLS — level: 1 Beginner · 2 Intermediate · 3 Advanced · 4 Expert ── */
  skills: [
    { category:"Networking & Security", icon:"network", items:[
      {name:"MikroTik (Winbox)",level:4},{name:"Anti-DDoS (L4/L7 Mitigation)",level:4},
      {name:"Network Routing",level:4},{name:"LAN Infrastructure",level:3},
      {name:"Fiber Optic Technologies",level:3},{name:"CCTV Systems",level:2}
    ]},
    { category:"Systems & Virtualization", icon:"server", items:[
      {name:"Proxmox VE",level:4},{name:"Pterodactyl Panel",level:4},{name:"Ubuntu Linux",level:4},
      {name:"Windows Server",level:3},{name:"Active Directory",level:3},{name:"Windows Hyper-V",level:3}
    ]},
    { category:"Cloud & Storage", icon:"storage", items:[
      {name:"Amazon Web Services (AWS)",level:3},{name:"Google Cloud Platform (GCP)",level:3},
      {name:"Microsoft Azure",level:3},{name:"Synology NAS (DSM)",level:3}
    ]},
    { category:"Hardware & Infrastructure", icon:"pulse", items:[
      {name:"Bare-Metal Server Assembly (X99)",level:4},{name:"Data Center Colocation",level:4},
      {name:"Desktop Troubleshooting",level:4},{name:"Hardware Maintenance",level:3}
    ]},
    { category:"AI Tools", icon:"terminal", items:[
      {name:"Ollama",level:3},{name:"LM Studio",level:3},{name:"Local LLM Deployment",level:3}
    ]}
  ],

  /* ── 7. WORK EXPERIENCE ──────────────────────────────────── */
  experience: [
    {
      role:"Engineer on Site (EOS) — Digital",
      company:"PT IAS Support Indonesia",
      location:"Soekarno-Hatta International Airport (CGK), Tangerang, Indonesia",
      start:"Jul 2026", end:"Present", current:true,
      summary:"On-site Digital Engineer supporting IT and network infrastructure at Soekarno-Hatta International Airport, serving as Person in Charge (PIC) for the Commander Center (CC) at Injourney Airport Center (IAC), 2nd floor. Internal company ID designates this role as Network Engineer, SBU ICT.",
      responsibilities:[
        "Person in Charge (PIC) for the Commander Center (CC), relocated from Building 621 to Injourney Airport Center (IAC), 2nd floor",
        "Supervise and monitor vendor work on-site, ensuring deliverables meet schedule and quality expectations",
        "Prepare daily reports on site activity and vendor progress",
        "Perform network maintenance from the server panel, including RJ45 cable crimping and termination",
        "Conduct weekly preventive maintenance on MAXHUB interactive display units — 8 total: 6 at the Commander Center and 2 in meeting rooms on the 3rd floor near the Director area"
      ],
      tech:["MAXHUB","RJ45 Crimping","Vendor Management","Daily Reporting","Network Server Panel"],
      projects:["Commander Center (CC) Relocation — Building 621 to IAC"]
    },
    {
      role:"Founder & Chief Executive Officer (CEO)",
      company:"LtSamune Hosting",
      location:"Indonesia (Remote)",
      start:"Jan 2020", end:"Jun 2025", current:false,
      summary:"Founded and led a self-hosted web hosting and colocation business, owning infrastructure, engineering, and international business development end-to-end.",
      responsibilities:[
        "Architected and deployed bare-metal physical servers on custom X99 platforms for colocation data centers",
        "Migrated legacy infrastructure from cloud providers (AWS, OVH, Contabo, Alibaba Cloud) to self-hosted environments to optimize operational costs",
        "Designed and managed web hosting panels using Pterodactyl, and administered Linux environments",
        "Automated database management (MySQL, PhpMyAdmin, SQLite) and implemented Layer 4 & Layer 7 Anti-DDoS mitigation",
        "Recruited and led a cross-functional team of 10 staff across customer service, web development, and infrastructure maintenance",
        "Spearheaded international business negotiations and expanded global client acquisition"
      ],
      achievements:[
        "Reduced operational costs by migrating from multiple cloud providers to self-hosted bare-metal infrastructure",
        "Built and led a 10-person cross-functional team supporting a global, digital-first customer community",
        "Delivered end-to-end service delivery with custom billing integration (PHP/React)"
      ],
      tech:["Proxmox VE","MikroTik","Pterodactyl","MySQL","PHP","React","Anti-DDoS L4/L7","X99 Bare-Metal"],
      projects:["Colocation Data Center Buildout","Anti-DDoS Mitigation System","Custom Billing & Client Portal"]
    },
    {
      role:"IT Infrastructure & Service Management Intern",
      company:"PT. GS BATTERY",
      location:"Karawang, Indonesia",
      start:"Sep 2022", end:"Dec 2022",
      summary:"Provided cross-departmental technical support and hands-on network maintenance across corporate offices and manufacturing plant sites.",
      responsibilities:[
        "Acted as primary point of contact for cross-departmental user issues, resolving hardware, software, printing, and connectivity faults under strict SLAs",
        "Administered user credentials, security groups, and password resets within the corporate Active Directory environment",
        "Conducted hands-on troubleshooting and termination of LAN infrastructure across offices and manufacturing plant sites",
        "Performed preventative hardware maintenance and organized physical IT assets during audits and relocations"
      ],
      achievements:[
        "Maintained SLA compliance across cross-departmental helpdesk support",
        "Supported IT asset auditing and relocation without service disruption"
      ],
      tech:["Active Directory","LAN Infrastructure","Hardware Maintenance","Helpdesk"],
      projects:["Corporate LAN Maintenance","IT Asset Audit & Relocation"]
    }
  ],

  /* ── 8. PROJECTS ─────────────────────────────────────────── */
  projects: [
    { name:"Local AI Assistant Deployment", category:"Automation",
      description:"Engineered and deployed a privacy-focused local LLM assistant using Ollama and LM Studio, with a hybrid retrieval system querying local vector databases and external internet sources.",
      role:"Engineer", status:"Completed", year:"2026",
      tech:["Ollama","LM Studio","Local LLM","Vector Database"], image:"", links:{github:"",demo:""} },

    { name:"Colocation Data Center Buildout", category:"Infrastructure",
      description:"Architected and deployed bare-metal physical servers on custom X99 platforms for colocation data centers, migrating off multiple cloud providers to a self-hosted environment.",
      role:"Founder & Lead Engineer", status:"Completed", year:"2020-2025",
      tech:["Proxmox VE","X99 Bare-Metal","Pterodactyl","Linux"], image:"", links:{github:"",demo:""} },

    { name:"Anti-DDoS Mitigation System", category:"Networking",
      description:"Implemented Layer 4 and Layer 7 Anti-DDoS mitigation strategies to keep colocation hosting infrastructure resilient against attacks.",
      role:"Network Engineer", status:"Completed", year:"2020-2025",
      tech:["Anti-DDoS","MikroTik","Layer 4/7"], image:"", links:{github:"",demo:""} },

    { name:"Custom Billing & Client Portal", category:"Automation",
      description:"Built end-to-end service delivery and custom billing integration for a global hosting client base.",
      role:"Founder & Developer", status:"Completed", year:"2020-2025",
      tech:["PHP","React","MySQL"], image:"", links:{github:"",demo:""} }
  ],

  /* ── 9. CERTIFICATIONS ───────────────────────────────────── */
  certifications: [
    { name:"CCNA v7 — Introduction to Networks, Switching Routing & Wireless Essentials, Enterprise Networking Security & Automation", issuer:"Cisco Networking Academy", date:"", credentialId:"", url:"" },
    { name:"Cybercops Associate", issuer:"Cisco Networking Academy", date:"", credentialId:"", url:"" },
    { name:"Occupational Safety and Health (OSH) Supervision Training", issuer:"Ministry of Manpower of the Republic of Indonesia", date:"", credentialId:"", url:"" }
  ],

  /* ── 10. EDUCATION ───────────────────────────────────────── */
  education: [
    { institution:"Telkom University", degree:"D3 Telecommunication Engineering",
      start:"Aug 2020", end:"Feb 2024", gpa:"3.29 / 4.00",
      coursework:[], achievement:"" }
  ],

  /* ── 11. TECHNICAL ENVIRONMENT (interactive diagram) ─────── */
  environment: {
    caption:"Colocation & hosting reference topology",
    nodes:[
      { id:"inet", label:"Internet",     kind:"WAN",       x:70,  y:150, detail:"Uplink used across colocation and hosting infrastructure, with multi-provider redundancy.", specs:[["Providers","Multi-carrier"],["Failover","Automatic"],["Public IP","203.0.113.10"]] },
      { id:"rtr",  label:"Edge Router",  kind:"ROUTER",    x:215, y:150, detail:"MikroTik router handling NAT, routing, and VPN termination — configured and managed via Winbox.", specs:[["Device","MikroTik"],["Role","NAT · Routing · VPN"],["Tool","Winbox"]] },
      { id:"fw",   label:"Firewall",     kind:"SECURITY",  x:360, y:150, detail:"Layer 4 & Layer 7 Anti-DDoS mitigation protecting colocation and hosting infrastructure.", specs:[["Mitigation","L4 & L7"],["Policy","Anti-DDoS"],["Scope","Colocation hosting"]] },
      { id:"sw",   label:"Core Switch",  kind:"L3 SWITCH", x:505, y:150, detail:"Core switching layer handling LAN segmentation across colocation racks.", specs:[["Layer","L3"],["Uplink","LACP"],["Scope","Colocation LAN"]] },
      { id:"srv",  label:"Proxmox Node", kind:"COMPUTE",   x:665, y:70,  detail:"Proxmox VE cluster running production VMs and containers for hosting clients, managed via Pterodactyl panel.", specs:[["Platform","Proxmox VE"],["Panel","Pterodactyl"],["Workload","VM + Container hosting"]] },
      { id:"stg",  label:"Storage",      kind:"NAS",       x:665, y:150, detail:"Synology NAS (DSM) storage with scheduled backups for hosted client data.", specs:[["Platform","Synology DSM"],["Backups","Scheduled"],["Role","Client data storage"]] },
      { id:"mon",  label:"Availability", kind:"OBSERVE",   x:665, y:230, detail:"Uptime and availability monitoring across colocation servers and hosting infrastructure.", specs:[["Focus","Uptime"],["Scope","Colocation fleet"],["Response","On-call"]] }
    ],
    links:[["inet","rtr"],["rtr","fw"],["fw","sw"],["sw","srv"],["sw","stg"],["sw","mon"]],
    stacks:[
      { title:"NETWORK",        items:["MikroTik (Winbox)","Anti-DDoS L4/L7","Fiber Optic","LAN Infrastructure"] },
      { title:"VIRTUALIZATION", items:["Proxmox VE","Windows Hyper-V","Pterodactyl Panel"] },
      { title:"STORAGE",        items:["Synology NAS (DSM)","Bare-Metal X99 Servers"] },
      { title:"CLOUD",          items:["AWS","GCP","Microsoft Azure"] }
    ]
  },

  /* ── 12. CAREER JOURNEY ──────────────────────────────────── */
  journey: [
    { year:"2020", title:"Founded LtSamune Hosting",          text:"Started a self-hosted web hosting and colocation business from the ground up." },
    { year:"2022", title:"IT Infrastructure Intern",          text:"Gained hands-on enterprise IT experience at PT. GS BATTERY — helpdesk, Active Directory, and LAN maintenance." },
    { year:"2024", title:"Graduated Telkom University",       text:"Completed a degree in Telecommunication Engineering." },
    { year:"2025", title:"Scaled Hosting Infrastructure",     text:"Grew LtSamune Hosting to a 10-person team serving a global client base before closing the venture." },
    { year:"2026", title:"Local AI & Infrastructure",         text:"Deployed privacy-focused local LLM assistants and explored AI-driven infrastructure automation." },
    { year:"2026", title:"Engineer on Site — PT IAS Support Indonesia", text:"Joined as Digital Engineer on Site at Soekarno-Hatta International Airport (CGK), supporting IT and network infrastructure.", now:true }
  ],

  /* ── 13. FOOTER ──────────────────────────────────────────── */
  footer: {
    motto:"Building reliable infrastructure — and exploring what local AI can do for it.",
    signature:"Designed & Built with ☕ + Code"
  },

  /* ── 14. CONTACT FORM ────────────────────────────────────── */
  // Empty → the form opens the visitor's email app with the message pre-filled.
  // Set   → the form POSTs to this endpoint (Formspree, Web3Forms, your own backend, etc).
  form: { endpoint:"http://localhost:3001/api/contact" }
};
