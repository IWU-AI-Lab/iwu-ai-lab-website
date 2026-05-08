---
name: AI Lab Website - Page Specifications
version: 1.0
date: 2026-05-08
---

# Page Specifications: Projects, People & About Us

This document provides comprehensive specifications for implementing the **Projects**, **People**, and **About Us** pages. These specifications ensure consistency with the design system (see DESIGN.md) and maintain scalability for future content additions.

---

## 🎯 CROSS-PAGE REQUIREMENTS

### Responsive Design
- **Mobile-first approach** using Tailwind CSS
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Cards/content** should gracefully adapt from 1 column (mobile) → 2-3 columns (tablet) → 3-4 columns (desktop)
- **Text sizing** should remain readable on all devices (avoid px-based sizing where possible)

### Placeholders & Defaults
- **Image Placeholder:** Use a neutral gray gradient with an icon (e.g., `FaImage` from react-icons)
- **Missing Fields:** Display "Not provided" or omit field if empty (per context)
- **Scalability:** All content should support dynamic rendering from data structures (arrays/objects)

### Icons & Spacing
- **Icon Library:** FontAwesome via `react-icons/fa6` (consistent with homepage)
- **Icon Usage:** Use icons for actions (links, social), status indicators, and visual hierarchy
- **Spacing:** Follow design system spacing (16px base unit, multiples for padding/margins)

### General Design Practices
- **Contrast:** Maintain 7:1 contrast ratio for normal text (WCAG AAA)
- **Hover States:** Smooth transitions on interactive elements (0.3s ease)
- **Accessibility:** All images have alt-text, all buttons are keyboard-accessible
- **Color Palette:** Follow DESIGN.md (IWU Red #A6192E, IWU Spirit #D11242, IWU Action #09BDCB)

---

## 📊 PROJECTS PAGE

**File:** `src/app/projects/page.tsx`

### Content Strategy
- **Scope:** Display all research projects (faculty-led)
- **Scalability:** Support unlimited projects; design assumes 5-50+ projects
- **Default Sort:** By status (Ongoing → On Hold → Completed)
- **Filtering:** Optional tag-based filtering (if tag system is implemented; otherwise hidden)

### Data Structure
Each project should include:
```typescript
{
  id: string;
  title: string;
  description: string; // 150-300 characters (short-ish)
  status: "ongoing" | "completed" | "on-hold";
  teamMembers: string[]; // Array of names
  image?: string; // Optional URL; fallback to placeholder
  links?: {
    demo?: string;
    github?: string;
    publications?: string[]; // Array of URLs
  };
  tags?: string[]; // For future filtering (optional)
}
```

### Layout & Components
1. **Hero/Header Section**
   - Large headline: "Our Research Projects"
   - Subtitle explaining the scope (e.g., "Explore cutting-edge AI research conducted by our team")

2. **Filter/Sort Controls** (Row)
   - **Sort Dropdown:** "Status (Default)", "Title (A-Z)", "Recent First"
   - **Filter Toggle** (if tags are available): "Show All" | "By Category" (conditional)
   - Right-aligned, responsive to single column on mobile

3. **Project Cards Grid**
   - **Layout:** 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
   - **Card Structure:**
     - **Image:** 300x200px, rounded corners, gray placeholder on missing
     - **Status Badge:** Top-right corner
       - Ongoing: `bg-iwu-action text-white` + `FaPlay` icon
       - Completed: `bg-iwu-red text-white` + `FaCheckCircle` icon
       - On Hold: `bg-iwu-light-grey text-iwu-dark-grey` + `FaPause` icon
     - **Title:** H3 size, bold Gotham
     - **Description:** 2-3 lines max, truncated with ellipsis
     - **Team Members:** Small text with `FaUsers` icon, comma-separated or "+2 more"
     - **Links Section:** Icon buttons for Demo, GitHub, Publications (only show if link exists)
     - **Hover Effect:** Shadow increase, slight lift (transform: translateY(-2px))

4. **Empty State**
   - If no projects: "No projects yet. Check back soon!"

### Responsive Considerations
- Cards stack to 1 column on mobile; filter controls go full-width
- Image height adjusts: 200px (desktop) → 150px (tablet) → auto (mobile)
- Links become icon-only badges on mobile to save space

---

## 👥 PEOPLE PAGE

**File:** `src/app/people/page.tsx`

### Content Strategy
- **Scope:** Display faculty and active members (CS profs, students, contributors)
- **Scalability:** Support <10 new members per semester; design for 20-50+ people total
- **Organization:** Group by role (Faculty → Graduate Students → Undergraduate Students → Contributors)
- **Search:** Full-text search (name, title, optional interests if available)

### Data Structure
Each person should include:
```typescript
{
  id: string;
  name: string;
  role: "faculty" | "graduate-student" | "undergraduate-student" | "contributor";
  title: string; // e.g., "Assistant Professor", "Club President"
  photo?: string; // Optional URL; fallback to placeholder
  email?: string; // Optional
  phone?: string; // Optional, hidden by default on mobile
  quote?: string; // Fun quote (optional, shown on card hover or expanded view)
  socialLinks?: {
    github?: string;
    linkedin?: string;
    // Extensible for future social platforms
  };
}
```

### Layout & Components
1. **Hero/Header Section**
   - Large headline: "Meet Our Team"
   - Subtitle: "Faculty, students, and contributors driving AI innovation"

2. **Search Bar** (Row)
   - Centered, full-width on mobile, max-width 500px on desktop
   - Placeholder: "Search by name or role..."
   - Left-aligned `FaMagnifyingGlass` icon
   - Debounced search (300ms)

3. **Role-Based Grouping**
   - Each role gets a **section header** with role label and count (e.g., "Faculty (2)")
   - Visual separator between roles (subtle gray line or spacing)

4. **People Cards Grid**
   - **Layout:** 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
   - **Card Structure:**
     - **Photo:** Circle (300x300px), centered at top, gray placeholder on missing
     - **Name:** H4, bold Gotham, centered
     - **Title:** Small text, centered, iwu-dark-grey
     - **Quote:** *Italic, smaller font, light grey, centered* (shown on desktop hover or in expanded view)
     - **Email/Phone:** Small text, icons, optional; shown on hover/expanded or hidden on mobile
     - **Social Links:** Icon buttons (GitHub, LinkedIn) at bottom; link icons only, no labels
     - **Contact:** `FaEnvelope` + `FaPhone` icons with text/links (optional fields)
     - **Hover Effect:** Slight scale (1.02), shadow increase, quote appears (if exists)

5. **Mobile Optimization**
   - Photo remains circular
   - Social icons visible (no hover required)
   - Email/Phone shown as expandable section or hidden by default
   - Card text remains readable

6. **Empty State**
   - If no results: "No team members found. Try a different search."

### Search Behavior
- Real-time filtering as user types
- Search across name, title, and role
- Case-insensitive, partial match acceptable

---

## ℹ️ ABOUT US PAGE

**File:** `src/app/about-us/page.tsx`

### Content Strategy
- **Focus:** AI Lab's academic and faith-based mission
- **Audience:** Prospective and current students (inviting, aspirational tone)
- **Note:** AI Club is a separate page; coordinate with professor for final content
- **Current Stage:** Lab is new; no history, partnerships, or impact metrics yet

### Page Sections (In Order)

1. **Hero Section**
   - Large headline: "About the AI Lab"
   - Tagline: "Innovation rooted in faith and academic excellence"
   - Background: Gradient or subtle pattern (matching homepage aesthetic)

2. **Mission & Vision** (Section 1)
   - **Layout:** 2-column on desktop, 1-column on mobile
   - **Column 1 - Mission:**
     - Heading: "Our Mission"
     - Body text: 2-3 paragraphs (to be provided by professor)
     - Icon: `FaBullseye` or `FaTarget`
   - **Column 2 - Vision:**
     - Heading: "Our Vision"
     - Body text: 2-3 paragraphs (to be provided by professor)
     - Icon: `FaLightbulb` or `FaEye`
   - **Style:** Text on white/light background, icons inline or as accent

3. **Faith-Based Foundation** (Section 2, if applicable)
   - Optional section emphasizing Christ-centered values
   - Heading: "Christ-Centered Excellence" or similar
   - Body: 1-2 paragraphs (to be provided by professor)
   - Icon: `FaHeart` or custom IWU icon
   - **Tone:** Inviting, not preachy; inclusive

4. **Resources** (Section 3)
   - **Status:** Placeholder; "Resources Coming Soon"
   - **Structure:** Grid of cards (when available)
     - Each card: Icon + Title + Brief description + Link
     - Placeholder cards show grayed-out state
   - **Note:** This section is "being built out"; set expectations appropriately

5. **How to Get Involved** (Section 4)
   - **Layout:** 3-column grid (desktop), 1-column (mobile)
   - **Cards:**
     - **Card 1 - For Students:**
       - Icon: `FaGraduationCap`
       - Title: "For Students"
       - Description: Brief explanation of student opportunities
       - CTA Button: "Learn More" → `/join`
     - **Card 2 - For Faculty:**
       - Icon: `FaChalkboardUser`
       - Title: "For Faculty & Researchers"
       - Description: How to collaborate/contribute
       - CTA Button: "Get Involved" → Contact link (optional)
     - **Card 3 - For Community:**
       - Icon: `FaHandshake`
       - Title: "For Community Partners"
       - Description: Partnership opportunities
       - CTA Button: "Partner With Us" → Contact link
   - **Style:** Cards with IWU Action buttons on hover

6. **Call-to-Action Footer**
   - Large section at bottom
   - Headline: "Ready to join the AI Lab?"
   - Subheading: Encouraging statement
   - Primary CTA Button: "Join Us" → `/join`
   - Secondary CTA Link: "Contact Us" → mailto or contact form (optional)

### Responsive Considerations
- Hero section scales text appropriately
- 2-column sections collapse to 1-column on mobile
- All icons remain visible and properly sized
- CTA buttons remain touch-friendly on mobile (min 44px height)

### Design System Compliance
- **Colors:**
  - Primary headings: IWU Red (#A6192E)
  - Section dividers: IWU Light Grey (#B2B4B2)
  - CTA buttons: IWU Action (#09BDCB)
- **Typography:**
  - Main headings: Tungsten (uppercase) or Gotham Bold
  - Body text: Gotham Regular
  - Accents: Surveyor Text for quotes or emphasis
- **Contrast:** All text meets 7:1 ratio (WCAG AAA)

---

## 🛠️ IMPLEMENTATION NOTES

### Recommended Structure
```
src/app/
  projects/
    page.tsx          # Projects page
    components/
      ProjectCard.tsx # Reusable card component
      ProjectGrid.tsx # Grid with sorting/filtering
  people/
    page.tsx          # People page
    components/
      PersonCard.tsx  # Reusable card component
      PeopleGrid.tsx  # Grid with search
      RoleSection.tsx # Role-based grouping
  about-us/
    page.tsx          # About Us page
```

### Data Sources
- **Projects & People Data:** Consider storing in:
  - Static JSON files (`public/data/projects.json`, `public/data/people.json`)
  - Database (future consideration)
  - CMS (future consideration)
  - Direct component props (during development)

### Testing Checklist
- [ ] Responsive on mobile, tablet, desktop
- [ ] All placeholders display correctly
- [ ] Icons render properly
- [ ] Links are functional (demo, GitHub, publications, social)
- [ ] Search/filter performance acceptable
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AAA
- [ ] Images have alt-text
- [ ] Hover/active states clear and accessible

---

## 📝 CLARIFICATIONS NEEDED (For Professor Review)

Before final implementation, confirm with professor:
1. **About Us Page:** Final mission/vision/faith-based content
2. **Resources Section:** What resources should be displayed? (Links, documentation, tools, etc.)
3. **People Data:** Complete list of current team members and their details
4. **Projects Data:** Complete list of projects with descriptions and team assignments
5. **Contact Information:** How should "Contact Us" be handled? (Email, form, link)

---

## ✅ NEXT STEPS

1. **Clarify remaining content** (mission, vision, team roster)
2. **Implement Projects Page** (uses structured data, sorting, optional filtering)
3. **Implement People Page** (uses search, role-based grouping)
4. **Implement About Us Page** (static content with CTAs)
5. **Test responsiveness** across devices
6. **Gather feedback** and iterate
