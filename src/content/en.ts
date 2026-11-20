import type { Content } from "./types";

// English copy. Source: object L.en in the Main.dc.html mockup.
const en: Content = {
  htmlLang: "en",
  switchLabel: "EN",

  meta: {
    title: "Omuz — Management system for education centers",
    description:
      "Students, payments, timetable, attendance and SMS in one place. You teach, Omuz handles the rest.",
    ogLocale: "en_US",
  },

  a11y: {
    menu: "Menu",
    theme: "Theme",
    prev: "Previous",
    next: "Next",
    toTop: "Back to top",
    language: "Language",
  },

  nav: {
    features: "Features",
    addons: "Add-ons",
    pricing: "Pricing",
    clients: "Clients",
    contact: "Contact",
    faq: "FAQ",
  },

  hero: {
    headlines: [
      "From the first request to the first job — all in Omuz",
      "Your academy, finally under control — in one system",
      "Billing, attendance, payments and reminders — Omuz does it for you",
      "Every student, every payment, every lesson — in one place",
    ],
    sub: "Students, payments, timetable, attendance and SMS in one place. You teach, Omuz handles the rest.",
    cta: "Free demo",
  },

  facts: [
    { value: 3, label: "years in daily use" },
    { value: 15, label: "modules on one platform" },
    { value: 7, label: "access roles" },
  ],

  results: {
    title: "Omuz in practice: before and after",
    before: "Before",
    now: "Now",
    note: "Figures are approximate",
    rows: [
      { name: "Checking homework", before: "3–7 min per student", after: "1–3 min", delta: "−60%" },
      { name: "Signing a contract", before: "under 5 minutes", after: "under 1 minute", delta: "−80%" },
      { name: "Preparing reports", before: "5–10 hours", after: "under 1 minute", delta: "−95%" },
      { name: "Seeing how the center performs", before: "half a day – a day", after: "under 1 minute", delta: "−98%" },
    ],
  },

  // TODO: проверить источники статистики (McKinsey 2020, Imperial College 2019, HBR 2011)
  // и при необходимости заменить на локальные данные.
  stats: {
    title: "Automation can take over up to 20–30% of a teacher's routine",
    items: [
      {
        value: "20–30%",
        text: "of a teacher's routine can be automated with existing technology",
        source: "McKinsey, 2020 (school teachers)",
      },
      {
        value: "−38%",
        text: "fewer no-shows after SMS reminders",
        source: "Imperial College London, 2019 (medical appointments)",
      },
      {
        value: "5 min",
        text: "after this, the chance of turning a request into a student drops sharply",
        source: "Harvard Business Review, 2011 (B2B sales)",
      },
    ],
  },

  modules: {
    title: "15 modules on 1 platform",
    sub: "Everything an education center uses every day.",
    items: [
      { name: "CRM and sales", desc: "Handle requests and turn them into students" },
      { name: "Students", desc: "One database and history for every student" },
      { name: "Groups", desc: "Manage training groups" },
      { name: "Parents", desc: "A private portal to follow their child" },
      { name: "HR and teachers", desc: "Staff, salary and lessons" },
      { name: "Courses", desc: "Teaching materials and lesson plans" },
      { name: "Timetable", desc: "Scheduling without conflicts" },
      { name: "Attendance and grades", desc: "A digital journal" },
      { name: "Finance", desc: "Cash desk, payments, debts and expenses" },
      { name: "Branches", desc: "Several buildings from one screen" },
      { name: "Documents and contracts", desc: "Certificates and contracts, automatic" },
      { name: "Gamification", desc: "Coins and ratings for motivation" },
      { name: "Employment", desc: "Connect graduates with employers" },
      { name: "SMS notifications", desc: "Automatic messages to parents and students" },
      { name: "Analytics", desc: "A modern dashboard and reports" },
    ],
  },

  flow: {
    title: "From first request to a job",
    sub: "Omuz was built inside SoftClub IT Academy, where graduates are followed all the way to their employers.",
    steps: ["Request", "Student", "Group and lessons", "Payment", "Graduate", "Job"],
  },

  devices: {
    title: "On computer and on phone",
    sub: "Omuz works in the browser on a computer and on a phone: the director checks reports, the teacher marks attendance.",
    laptop: "Computer",
    phone: "Phone",
    sample: "Sample data",
    tabs: ["Dashboard", "Students", "Journal"],
    points: ["In the browser, nothing to install", "Fits the phone screen", "The same data on every device"],
  },

  video: { title: "Omuz in one video" },

  how: {
    title: "Get started in 3 steps",
    steps: [
      { title: "Request", desc: "You send a request and we show you all 15 modules in a demo." },
      { title: "Setup", desc: "We set the system up for your academy and train your staff for free." },
      { title: "Work", desc: "Students, groups and payments run in one system." },
    ],
  },

  pricing: {
    title: "Pricing",
    sub: "Every plan includes the core platform. The price depends on the number of branches and optional extras.",
    periods: ["Monthly", "6 months", "Yearly"],
    periodChips: ["", "−20%", "−30%"],
    periodTotals: ["", "{T} TJS billed for 6 months", "{T} TJS billed for a year"],
    popular: "Popular",
    cta: "Request a demo",
    soon: "In development",
    calcOpen: "Calculate your price",
    calcHide: "Hide calculator",
    plans: {
      starter: {
        pricePrefix: "",
        unit: "TJS per month",
        features: [{ text: "Up to 100 students" }, { text: "1 branch" }, { text: "All 15 platform modules" }],
      },
      pro: {
        pricePrefix: "",
        unit: "TJS per month for the first branch, +400 for each extra branch",
        features: [
          { text: "Everything in Starter" },
          { text: "Unlimited students" },
          { text: "Exams and homework", soon: true },
          { text: "AI assistant", soon: true },
        ],
      },
      biz: {
        pricePrefix: "",
        unit: "TJS per month, 3 branches included",
        features: [
          { text: "Everything in Professional" },
          { text: "Unlimited students" },
          { text: "Priority support" },
          { text: "One inbox for requests (Telegram, Instagram, WhatsApp)", soon: true },
          { text: "Branded academy app", soon: true },
        ],
      },
      ent: {
        pricePrefix: "From",
        unit: "TJS per month, +300 for each extra branch",
        features: [
          { text: "Everything in Business" },
          { text: "Several branches" },
          { text: "Custom terms" },
          { text: "Full white-label app (one-time setup fee)", soon: true },
        ],
      },
    },
  },

  compare: {
    title: "Compare plans by module",
    moduleCol: "Module",
    rows: [
      { name: "All 15 platform modules", cells: [1, 1, 1, 1] },
      { name: "Staff training (free)", cells: [1, 1, 1, 1] },
      { name: "Exams and homework", cells: [0, 1, 1, 1], soon: true },
      { name: "AI assistant", cells: [0, 1, 1, 1], soon: true },
      { name: "Single inbox for requests (Telegram, Instagram, WhatsApp)", cells: [0, 0, 1, 1], soon: true },
      { name: "Branded academy app", cells: [0, 0, 1, 1], soon: true },
      { name: "Full white-label app (+ one-time setup)", cells: [0, 0, 0, 1], soon: true },
      { name: "Priority support", cells: [0, 0, 1, 1] },
      { name: "Custom terms", cells: [0, 0, 0, 1] },
      { name: "Add-on modules (paid separately)", cells: ["yes", "yes", "yes", "yes"] },
      { name: "Students", cells: ["up to 100", "unlimited", "unlimited", "by agreement"] },
      { name: "Branches", cells: ["1", "1 (+400 per extra)", "3 included", "1 (+300 per extra)"] },
    ],
  },

  calc: {
    title: "Find the best plan for your academy",
    addonsTitle: "Add-on modules",
    sub: "Answer three questions. We calculate every plan and show the best one.",
    branchesLabel: "1. How many branches do you have?",
    studentsLabel: "2. How many students in total across all branches?",
    modulesLabel: "3. Which extra modules do you need?",
    recommended: "Best for you",
    perMonth: "TJS per month",
    currency: "TJS",
    soon: "In development",
    includedInYours: "Included in your plan",
    includedPro: "Included in Professional",
    includedBiz: "Included in Business",
    breakdown: "{B} plan + {E} modules",
    baseOnly: "{B} plan",
    allIn: "{B} plan, selected modules included",
    branchWord: "branch",
    studentsWord: "students",
    modulesWord: "modules",
    reasons: {
      starter: "1 branch only, up to 100 students",
      pro: "Unlimited students",
      biz: "Up to 3 branches",
      ent: "",
    },
    addons: {
      exams: { name: "Exams and homework", desc: "Exams on a phone, auto-grading, results by topic." },
      ai: { name: "AI assistant", desc: "Questions from your files and suggested grades." },
      inbox: { name: "One inbox for requests", desc: "Telegram, WhatsApp and Instagram in one place." },
      campaigns: {
        name: "Campaigns and QR sign-up",
        desc: "The source of every request, and leads recognized by QR at free lessons.",
      },
      jobs: { name: "Employment+", desc: "An employer directory with logos and automatic vacancy search." },
      certs: { name: "Certificates with QR", desc: "Check a certificate online with one scan." },
      reports: { name: "Parent reports", desc: "A PDF report with the mentor comment." },
      library: { name: "Digital library", desc: "Interactive materials of your academy: books, files, tasks." },
    },
  },

  clients: {
    title: "What our clients say",
    quotes: [
      {
        text: "The platform made managing our education processes much easier.",
        name: "Shahbozi Abdulloh",
        role: "Co-founder and CEO, Intelect-edu",
      },
      {
        text: "The CRM simplified our work because all the data is in one place.",
        name: "Saidumron Rahmonov",
        role: "Smart",
      },
      {
        text: "All the data is in one place — tracking students and payments has become much easier.",
        name: "Hasanjon Aliev",
        role: "ILM OMUZ",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is Omuz?",
        a: "Omuz is a management system for education centers: requests, students, groups, payments, attendance and graduate employment in one place.",
      },
      {
        q: "How much does it cost?",
        a: "Starter is 350 TJS per month. Professional from 750, Business 1,200 and Enterprise from 1,500 TJS. Try the add-on modules in the calculator above.",
      },
      { q: "Is training paid?", a: "No, staff training is free on every plan." },
      { q: "How fast can we start?", a: "A full demo is ready within one day." },
      {
        q: "How many students are included?",
        a: "Starter up to 100 students. Professional and above have no student limit (fair use: above about 1,000 students per branch we agree terms individually).",
      },
      {
        q: "What if I have several branches?",
        a: "Professional and above support extra branches: Professional +400, Enterprise +300 TJS for each extra branch. Business includes 3 branches.",
      },
      {
        q: "When will the modules marked In development be ready?",
        a: "Exams, the AI assistant, the single inbox and the branded app are in development. Ask us for exact dates.",
      },
      { q: "How do I contact you?", a: "Call +992 900 73 77 04." },
    ],
  },

  demo: {
    title: "Try the system for free",
    sub: "Within one day you get a full demo of all 15 modules.",
    name: "Full name",
    phone: "Phone number",
    academy: "Academy name",
    plan: "Plan",
    planUnsure: "Not chosen yet",
    students: "Number of students",
    branches: "Number of branches",
    now: "What do you use now?",
    optStudents: ["Up to 50", "50–100", "100–300", "300–600", "Over 600"],
    optBranches: ["1", "2", "3", "4 or more"],
    optNow: ["Excel or paper", "Another CRM", "Nothing"],
    submit: "Request a demo",
    status: {
      sending: "Sending…",
      ok: "Thank you! Your request has been received, we will contact you soon.",
      invalid: "Please enter your name and a valid phone number.",
      error: "Could not send your request. Please try again or call +992 900 73 77 04.",
    },
    call: "Call us",
    placeLabel: "Address",
    place: "Dushanbe, Tajikistan",
  },

  footer: {
    tagline: "Management system for education centers",
    product: "Product",
    contact: "Contact",
    rights: "© 2026 Omuz Company. All rights reserved.",
  },
};

export default en;
