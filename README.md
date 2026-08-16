# Madhuri Wankhede — AI & Automation Coaching Website

A modern, responsive, and conversion-focused personal coaching & training business website for **Madhuri Wankhede** (AI & Automation Coach for Professionals).

> **Core Message:** "I help professionals and organizations automate repetitive work using AI tools through practical, hands-on training."

---

## 🚀 Features

- **Personal Brand & Coaching Positioning**: Designed as an independent AI & automation coaching business.
- **Interactive Workflow Simulator**: Live clickable node pipeline demonstrating input → AI → automation → output workflows with multiple presets.
- **Before / After Workday Comparison**: Interactive toggle comparing manual friction vs. automated pipelines.
- **4-Week Signature Framework**: Transparent, practical coaching roadmap (`Discover` → `AI Foundations` → `Build` → `Automate`).
- **Coaching Services**: Tracks for AI Productivity, Workflow Automation (n8n + AI), AI for Software Testers & QA, and Team Workshops.
- **Booking & Contact Flow**: Reusable booking modal, one-click email copying, and static-ready contact inquiry system.
- **Light & Dark Mode**: Persistent theme toggle respecting user preferences.
- **SEO & Accessibility Ready**: OpenGraph, Twitter Cards, semantic HTML, robots.txt, sitemap.xml.
- **Zero Heavy Backend**: Static, fast-loading, and completely Vercel/Netlify ready.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Google Fonts**: Plus Jakarta Sans & Outfit

---

## ⚙️ Content & Configuration Customization

All personal details, booking links, services, FAQs, and integration endpoints are centralized in a single configuration file:

📁 **`src/lib/siteConfig.ts`**

### Key Configuration Options:

| Setting | Path in `siteConfig.ts` | Description |
| :--- | :--- | :--- |
| **Booking URL** | `coach.bookingUrl` | Replace `'YOUR_BOOKING_LINK'` with your Calendly / Cal.com link (e.g., `'https://calendly.com/your-name/30min'`). |
| **Email Address** | `coach.email` | Set to your preferred coaching email (`madhuriwankhede321@gmail.com`). |
| **LinkedIn URL** | `coach.linkedInUrl` | Set your LinkedIn profile URL (`'https://linkedin.com/in/...'`). |
| **Form Endpoint** | `integrations.formspreeEndpoint` or `integrations.web3formsKey` | Optional Web3Forms / Formspree key. Leave blank for default instant mailto submission. |
| **Coaching Services** | `services` | Add, remove, or modify coaching tracks and topic lists. |
| **Testimonials** | `testimonialsConfig.items` | Add real client reviews when available. |
| **FAQs** | `faqs` | Customize questions and answers. |

---

## 💻 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
The application will run at `http://localhost:3000`.

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

1. Push this project to your **GitHub** repository.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (Vercel will auto-detect).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your website will be live in seconds!

---

## 📄 License & Copyright

© 2026 Madhuri Wankhede. All rights reserved.
