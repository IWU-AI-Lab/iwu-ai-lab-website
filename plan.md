# Indiana Wesleyan University AI Lab & AI Club

## Core Tech Stack

- Frontend: Next.js (mainstream, resume-relevant)/React
- Styling: Tailwind CSS
- Animations: Framer Motion
- Hosting: Amazon S3 + Amazon CloudFront
- CI/CD: GitHub Actions

→ Static-first site, auto-deployed from GitHub

---

## 🏗️ Architecture Approach

- Start **static + simple**
- No backend unless clearly needed later
- Interactive projects can live separately (e.g., subdomains)
- Optimize for **long-term student maintainability**

---

## 🎨 Design Philosophy

- Follow the DESIGN.md file as closely as possible.
- Modern, clean, **not traditional university site**
- Prioritize:
    - Strong visuals
    - Good spacing & typography
- Avoid:
    - Overcomplex layouts
    - Gimmicky effects that would slow down the website significantly
- Also for the logo in the top left/left of the header, we can use the lab icon + the text "IWU AI Lab" or something like that (make it professional)

---

## ✨ Animation Strategy

- Motion should be:
    - Immediate (visible on load)
    - Subtle (not distracting)
    - Fast (no heavy assets)
- Use:
    - Fade-ins, hover effects, small interactions
- Avoid:
    - Heavy 3D (e.g., Three.js on load)
    - Long intro animations

---

## 🎯 Hero Section Direction (most important decision)

- Needs **instant motion** to retain attention
- Chosen concept:

### “Orbiting circles around a cross/logo”

- Center: cross or lab logo
- 3–5 circles orbiting slowly
- Represents:
    - AI systems / networks
    - Christian identity
- Style:
    - Minimal, clean, slightly glowing
    - Slow rotation (not distracting)
    - Ensure compatible (or also adaptive)light and dark modes
    - Ensure the site is responsive and works on different screen sizes
    - The selected color palette from DESIGN.md does not have to be used in its entirety.
    - The selected page should be indicated in the navigation bar at the top.
    - All font sizes and layout sizes should be scaled using REMs and not pixels.
    - You may add additional styles as needed.
    - The logo of the lab is stored in the public folder as `logo_lab_icon_version.png`.
    - The logo of the club is stored in the public folder as `logo_club.png`.
    - You may need to move the existing files around (into subfolders perhaps?).
    - Use the lab logo as the favicon of the website. The club logo should be reserved for use within the club website, which I'm not sure how we're going to build yet.

---

## Main layout

- Header
    - Logo + name of the club
    - Links to different pages
    - Always on top
- Footer
    - Contact information
    - Links to different pages
    - Always on bottom
- Pages include (sort them by the most logical order):
    - Projects
    - People (perhaps include links (in icons) to their github and linkedin (or let it appear on hover))
    - Activities
    - Resources
    - Join
    - Research
    - Publications
    - About Us

## Footer details
- Use placeholders: we would need at least a link to the main iwu page, lab or club instagram, linkedin perhaps, github perhaps, and the main admin email. Placeholders should be descriptive and easily replaceable by future members of the club or lab.

## Header/Navigation details
- For the logo in the top left/left of the header, we can use the lab icon + the text "IWU AI Lab" or something like that (make it professional)

---

## 🧠 Content Strategy

- Possibly add CMS later if needed
- Keep editing simple for future students

---

## ⚖️ Overall Philosophy

- 90% clean + fast
- 10% “wow” factor
- Build something:
    - Impressive at first glance
    - Easy to maintain over time

---

## One issue
- For our university, there is the AI lab, and then there is the AI club. The website is mainly for the lab, but we also need a site for the club that's accessible from the lab website. Basically the club is a subset of the lab, but with more club-specific stuff (that we're not sure about yet). The lab and club are new this year. I'm not sure how to balance the two on the website. Any ideas?