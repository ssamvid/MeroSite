# Samvid Shrestha — Portfolio Site Spec

## 1. Overview
- **Owner:** Samvid Shrestha
- **Purpose:** Main personal portfolio (not freelance-specific) — showcase background, skills, and work to anyone who lands on it (recruiters, collaborators, clients, general visibility).
- **Format:** Single-page scroll site (one long homepage, section-based navigation via anchor links/nav bar).
- **Domain:** samvidshrestha.com.np (already owned; hosting details TBD).
- **Tech stack:** Next.js + Tailwind CSS.

## 2. Design Direction
- **Style:** Minimal & clean — generous whitespace, simple typography, restrained motion.
- **Color palette:** Warm neutrals — off-white/cream background, dark brown/charcoal text, soft warm accent color (e.g., terracotta/amber) for links, buttons, and highlights.
- **Photo/headshot:** None available yet — use a placeholder/avatar treatment (e.g., abstract shape, initials monogram, or generic silhouette) that can be swapped later.
- **Resume/CV:** Not available yet — build the "Download Resume" button but stub it out (disabled or linked to a placeholder) until a PDF is provided.

## 3. Site Structure (sections, in order)
1. **Hero**
   - Name, short tagline (e.g., "Backend Developer" or similar — TBD wording), primary CTAs: "Contact Me" and "Download Resume" (stubbed).
2. **About**
   - Short bio paragraph. Placeholder until Samvid provides more personal narrative/background.
3. **Skills**
   - Draft list (based on project context, to be edited):
     - **Backend:** REST API design & development, authentication/validation logic
     - **Databases:** Relational DB design & integration (e.g., MySQL/PostgreSQL — confirm which)
     - **Integrations:** Third-party API integration (WhatsApp OTP for password recovery)
     - **AI-assisted development:** Using AI tools to accelerate/support backend development
     - **Practices:** Input validation, secure login flows, working in a 5-person team
   - *(Placeholder — Samvid to confirm actual languages/frameworks, e.g., Node.js/Python/PHP, Express/Django/Laravel, etc.)*
4. **Work Experience**
   - **Project:** Anaya Food Delivery and Ordering System
   - **Context:** School group project, team of 5, each member owned a component
   - **Role:** Backend Developer (handled nearly all backend responsibilities)
   - **Responsibilities:**
     - Database design and integration
     - Login validation and security logic
     - WhatsApp OTP-based password recovery flow
     - Used AI tools to assist development
   - **Dates:** TBD (Samvid to confirm timeframe)
5. **Why Hire Me / Characteristics**
   - Emphasis: **Technical strengths** (problem-solving, backend architecture, reliability, ownership — since Samvid handled "almost everything" on the backend solo within a team project).
   - Bullets to be finalized with Samvid; draft angle: takes ownership of complex systems, comfortable owning a full backend stack solo, resourceful (leverages AI tools effectively), detail-oriented on security/validation.
6. **Projects**
   - Single featured project for now: **Anaya Food Delivery and Ordering System**
   - Format: brief card/section — description, tech stack, your role, and a link (GitHub repo link if public, or case-study style write-up if no live link)
   - Room left in layout to add more projects later without redesign.
7. **Contact**
   - Contact form (name, email, message) — needs a form backend/service (e.g., Formspree, Resend, or simple API route) since no backend host confirmed yet.
   - Direct links: Email, LinkedIn, GitHub
   - Resume download button (stubbed until PDF provided)

## 4. Contact & Social Info
- **Email:** samvidstha25@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/samvidshrestha
- **GitHub:** https://github.com/ssamvid

## 5. Hosting/Deployment
- Domain already owned: samvidshrestha.com.np
- Hosting provider/DNS access: not yet confirmed by Samvid
- Recommended path: deploy Next.js app to Vercel (or similar), then point the samvidshrestha.com.np domain's DNS at it. Needs registrar/DNS access details before this step.

## 6. Open Items / To Confirm Before or During Build
- [ ] Actual skills/tech stack list (languages, frameworks, DB engine used in Anaya project)
- [ ] Dates for the Anaya project (school term/year)
- [ ] Short personal bio/About text
- [ ] Tagline/title for hero section (e.g., "Backend Developer", "CS Student & Backend Developer", etc.)
- [ ] Whether Anaya project has a public GitHub repo/live demo link
- [ ] Resume PDF file
- [ ] Headshot/photo (or confirm sticking with placeholder/avatar)
- [ ] "Why hire me" bullets — confirm/edit draft angle above
- [ ] Contact form backend choice (Formspree/Resend/custom API route)
- [ ] DNS/hosting provider details for samvidshrestha.com.np
