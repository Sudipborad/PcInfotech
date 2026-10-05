# Modern Service Center Website — Complete Development Prompt

## 1. Project Overview

Create a **modern, professional, responsive website** for an organization/service center that showcases:

- Services provided
- Organization overview
- Achievements
- Major milestones
- Growth over the years
- Statistics and impact
- Service-center locations
- Geographic reach
- Contact information
- Other important information available in the provided PDFs

The website should feel like a **real professionally designed corporate/service organization website**, not like an AI-generated website or a generic template.

The final result should be visually modern, polished, trustworthy, and easy to navigate.

---

# 2. Technology Requirements

Use the following technology stack:

- **Frontend:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components / Design Reference:** Aceternity UI
- **Animations:** Motion / Framer Motion where appropriate
- **Icons:** Lucide Icons or another suitable modern icon library
- **Maps:** Leaflet / React Leaflet, Mapbox, or Google Maps
- **Charts:** A suitable React charting library such as Recharts
- **Architecture:** Next.js App Router
- **Responsive:** Desktop, tablet, and mobile

Use reusable React/Next.js components and maintain clean, production-quality code.

---

# 3. UI / Component Reference

Use the following website as the **primary UI and component reference**:

**Aceternity UI:**

https://ui.aceternity.com/

Important:

The above website is provided **only as a UI/component reference**.

Do NOT:

- Copy the entire Aceternity website
- Make the website look like an Aceternity UI demo
- Use random Aceternity components just for visual effects
- Make every section heavily animated
- Make the final website look like an AI-generated collection of UI components

Instead:

- Select components that actually fit the website
- Customize them to match the organization's identity
- Combine components thoughtfully
- Maintain one consistent design system
- Use Aceternity components as inspiration and building blocks

Suitable components/patterns may include:

- Modern hero sections
- Spotlight effects
- Background grids
- Bento grids
- Animated statistics
- Timelines
- Cards
- Moving borders
- Hover effects
- Scroll animations
- Interactive globe/map concepts
- CTA sections
- Navigation components

The final design should look **unique and professionally designed**.

---

# 4. Source of Website Content

I will provide **PDF files containing information about the organization/service centers**.

The PDFs are the **primary source of truth for the website content**.

Before implementing the website:

1. Read and analyze all provided PDFs.
2. Extract all relevant information.
3. Identify:
   - Organization history
   - Services
   - Achievements
   - Milestones
   - Year-wise information
   - Statistics
   - Growth data
   - Locations
   - Service centers
   - Addresses
   - Contact information
   - Important dates
   - Other relevant organizational information
4. Organize the extracted information into appropriate website sections.

### Strict Content Accuracy Rule

Do NOT invent:

- Statistics
- Achievements
- Awards
- Locations
- Dates
- Services
- Customer/user numbers
- Growth percentages
- Addresses
- Coordinates
- Organization claims

If information is not available in the PDFs, do not fabricate it.

Use a neutral placeholder or omit the information.

Rewrite the PDF content into polished website copy while preserving its original factual meaning.

Do not simply copy large blocks of PDF text onto the website.

---

# 5. Overall Website Goal

The website should communicate four major things clearly:

### 1. What does the organization provide?

Visitors should immediately understand:

- What the organization does
- What services it provides
- Who the services are for
- What areas it serves

### 2. What has the organization achieved?

Show:

- Major achievements
- Milestones
- Awards/certifications if present
- Important accomplishments
- Impact statistics

### 3. How has the organization grown?

Show the organization's growth using **real graphs and data visualizations** based on the PDFs.

### 4. Where are the service centers?

Show the organization's geographic reach using an **interactive map** with service-center markers and corresponding information.

---

# 6. Website Structure

Create the website with the following sections.

---

# 7. Navbar

Create a clean, modern navigation bar.

Suggested navigation:

- Home
- About
- Services
- Achievements
- Growth
- Locations
- Contact

Requirements:

- Sticky/floating navbar
- Responsive mobile navigation
- Mobile hamburger menu
- Smooth scrolling
- Active section indication
- Subtle transitions
- CTA button where appropriate

Do not over-animate the navbar.

---

# 8. Hero Section

Create a strong first impression.

The hero should contain:

### Main Headline

Create a concise statement explaining the organization's actual purpose.

Do NOT use generic AI-generated phrases such as:

> "Transforming the future with innovation."

The headline should be based on the organization's actual services and mission found in the PDFs.

### Supporting Text

Briefly communicate:

- What the organization does
- Its reach
- Its impact
- Its key value

### CTA Buttons

Possible CTAs:

- Explore Services
- Find a Service Center
- View Our Impact
- Learn More

Only use CTAs that make sense for the actual organization.

### Hero Visual

Use a sophisticated visual inspired by Aceternity UI.

Possible effects:

- Spotlight
- Subtle gradient
- Grid background
- Animated beams
- Organization-related imagery
- Geographic visualization
- Subtle motion

Keep it professional and avoid excessive visual effects.

---

# 9. About / Organization Overview

Create an "About" section based entirely on the PDF information.

Include:

- Organization introduction
- History/background
- Mission/purpose if available
- Key areas of operation
- Important organizational facts

Use a modern layout such as:

**Text + visual + key statistics**

Avoid creating a large wall of text.

Possible layout:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  ABOUT THE ORGANIZATION                     │
│                                             │
│  [Organization information]   [Visual]      │
│                                             │
│  [Key Fact] [Key Fact] [Key Fact]           │
│                                             │
└─────────────────────────────────────────────┘
```

---

# 10. Services Section

Create a visually strong services section.

Display each service as an individual card.

Each service card should contain:

- Icon
- Service name
- Short description
- Supporting information if available
- Optional details interaction

Use subtle interactions such as:

- Card spotlight
- Border animation
- Hover elevation
- Slight scale
- Gradient highlight

Do not give every card a different animation.

All service cards should feel like part of the same design system.

---

# 11. Key Statistics / Impact

Create a dedicated statistics section.

Display important statistics from the PDFs.

Example:

```text
     25+                 12                 50K+
Service Centers       Cities Served       People Served
```

The actual values must come from the PDFs.

Use animated counters where appropriate.

Statistics should be:

- Easy to understand
- Visually prominent
- Factually accurate
- Responsive

Do not create statistics if the PDFs do not provide the required information.

---

# 12. Achievements Section

Create a dedicated achievements section.

Possible layouts:

### Achievement Cards

Each achievement can contain:

- Year
- Achievement title
- Description
- Supporting information

OR

### Timeline

Use a modern timeline to show major milestones.

Example:

```text
2019
 │
 ├── Major milestone
 │
2021
 │
 ├── Expansion
 │
2023
 │
 ├── Major achievement
 │
2025
 │
 └── Current milestone
```

Use an Aceternity-inspired timeline/scroll animation if appropriate.

Keep animations subtle.

---

# 13. Growth Over the Years — MANDATORY DATA VISUALIZATION

The website must include a dedicated **Growth Over the Years** section.

This section should use **actual graphs/charts**, not only statistic cards.

If the PDFs contain year-wise numerical information, visualize it using proper charts.

### Use:

- **Line charts** for growth trends over time
- **Bar charts** for year-to-year comparisons
- **Stacked bar charts** for category composition
- **Pie/donut charts** for meaningful percentage distributions
- **Area charts** where they communicate cumulative growth effectively

Examples of possible metrics:

- Service centers over the years
- People/customers served
- Services provided
- Operational growth
- Geographic expansion
- Number of projects
- Number of beneficiaries
- Other measurable organizational metrics

Only use metrics that actually exist in the PDFs.

---

# 14. Graph Requirements

Graphs must be:

- Interactive
- Responsive
- Professionally styled
- Easy to understand
- Consistent with the website design

Include:

- Tooltips
- Clear labels
- Proper units
- Year labels
- Legends where necessary
- Hover interactions
- Responsive resizing

Example:

```text
          OUR GROWTH OVER THE YEARS

  100K ┤                             ●
   80K ┤                       ●─────
   60K ┤                 ●─────
   40K ┤           ●─────
   20K ┤     ●─────
       └──────────────────────────────
        2020  2021  2022  2023  2024
```

The actual chart data must come from the PDFs.

### Important Data Rule

If the PDF contains:

```text
2020 → 10 centers
2022 → 18 centers
2025 → 32 centers
```

then use those actual data points.

Do NOT create:

```text
2021 → 14 centers
2023 → 22 centers
2024 → 27 centers
```

unless those values are actually provided by the source material.

Never fabricate data to make a graph look smoother.

---

# 15. Growth Metric Switching

If the PDFs contain multiple growth metrics, consider creating an interactive selector such as:

```text
[Service Centers] [People Served] [Services] [Other]
```

Changing the selected metric should update the graph.

Keep this interaction simple and intuitive.

Do not create unnecessary dashboards.

---

# 16. Locations / Service Centers — MANDATORY INTERACTIVE MAP

The website must contain a dedicated **Locations / Service Centers** section.

This section must include an **actual interactive map**.

Do NOT replace the map with only:

- Address cards
- A static image
- A screenshot of Google Maps
- A plain list of locations

The map should be an important part of the website.

---

# 17. Interactive Map Technology

Use one suitable mapping solution:

- Leaflet + React Leaflet
- Mapbox
- Google Maps

Choose the solution that provides the best combination of:

- Performance
- Reliability
- Responsiveness
- Customization
- Ease of implementation

---

# 18. Map Features

Display every verified service center as a map marker.

Each marker should contain information such as:

- Service-center name
- City/area
- Address
- Services available
- Contact information
- Opening hours if available

### Map Interactions

Implement:

- Marker hover/click
- Informative popups
- Selected-location highlighting
- Smooth map movement
- Location list ↔ map synchronization
- Search
- Filtering if there are many locations
- Responsive mobile interaction

---

# 19. Location List + Map Synchronization

Create a modern two-panel layout.

Example:

```text
┌──────────────────────────────────────────────────────┐
│                   OUR LOCATIONS                      │
│                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐ │
│  │                      │  │ Service Center 1     │ │
│  │                      │  │ Ahmedabad            │ │
│  │      INTERACTIVE     │  │ Address...           │ │
│  │         MAP          │  ├──────────────────────┤ │
│  │                      │  │ Service Center 2     │ │
│  │      ●       ●       │  │ Surat                │ │
│  │           ●          │  ├──────────────────────┤ │
│  │                      │  │ Service Center 3     │ │
│  └──────────────────────┘  └──────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

Important interaction:

**Clicking a service-center card should focus the map on that location.**

Likewise:

**Clicking a map marker should highlight the corresponding service-center card.**

This creates a connected map/list experience rather than two independent components.

---

# 20. Location Accuracy

Location information must be treated very carefully.

Use only verified information from the PDFs.

If the PDFs provide:

- Exact addresses → use those addresses.
- Latitude/longitude → use the provided coordinates.
- City/area → display the city/area.
- Opening hours → display them.
- Contact details → display them.

If exact coordinates are NOT available:

- Do not invent coordinates.
- Do not place markers approximately just to populate the map.
- Use reliable geocoding of the actual address when appropriate.
- If a location cannot be reliably identified, display its address without inventing a map position.

Location accuracy is more important than visual completeness.

---

# 21. Location Search & Filtering

If there are many service centers, add:

### Search

Allow users to search by:

- City
- Area
- Service-center name

### Filters

Where useful, allow filtering by:

- Region
- City
- Service type

The map and service-center list should update together.

---

# 22. Geographic Statistics

If the PDFs contain geographic data, show useful statistics around the map.

For example:

```text
15+
Service Centers

8
Cities

4
Regions

25+
Services
```

Only show values that are supported by the PDFs.

---

# 23. Map + Growth Visualization Storytelling

The **Growth** and **Locations** sections should work together.

The website should communicate:

### Growth

> How the organization expanded over time.

Use:

**Interactive graphs**

↓

### Current Reach

> Where the organization operates today.

Use:

**Interactive map**

This creates a clear visual story:

**Growth → Expansion → Current Geographic Reach**

---

# 24. Why Choose Us / Key Strengths

Create a section explaining the organization's key strengths based on the PDFs.

Possible examples:

- Experience
- Geographic reach
- Accessibility
- Service quality
- Reliability
- Community impact
- Technology
- Operational scale

Only include claims supported by the source material.

Use a modern Bento Grid or feature-card layout.

---

# 25. Gallery / Visual Section

If the PDFs contain suitable photographs, use them where appropriate.

Possible layout:

- Modern image grid
- Masonry gallery
- Image cards
- Parallax gallery
- Full-width visual sections

Prefer authentic organization-related imagery.

Do not use unrelated stock images simply to fill space.

If suitable images are unavailable, use clean visual elements rather than irrelevant stock photography.

---

# 26. Final CTA

Create a strong but simple closing section.

Possible CTA:

> "Find a service center near you."

or another CTA based on the organization's actual purpose.

Possible buttons:

- Find a Location
- Explore Services
- Contact Us

Avoid generic AI-generated marketing slogans.

---

# 27. Footer

Create a professional footer containing:

- Organization name
- Short description
- Navigation
- Services
- Locations
- Contact information
- Social links if available
- Copyright information

Only include information supported by the PDFs.

---

# 28. Visual Design Direction

The website should feel:

- Modern
- Premium
- Professional
- Trustworthy
- Human-designed
- Clean
- Responsive
- Visually memorable
- Slightly interactive

---

# 29. Avoid the "AI-Generated Website" Look

This is extremely important.

Do NOT:

- Overuse gradients
- Add excessive glowing effects
- Use random 3D objects
- Add unnecessary animations
- Use generic AI slogans
- Use excessive glassmorphism
- Make every section look completely different
- Put huge text everywhere
- Use too many rounded cards
- Use random stock illustrations
- Add visual effects that do not serve a purpose
- Use excessive purple/blue AI-style gradients unless they genuinely fit the organization's identity

The website should look like it was designed by an experienced professional UI/UX designer and developed by a professional frontend team.

---

# 30. Design System

Establish one consistent design system before implementing individual sections.

Define:

- Primary color
- Secondary color
- Background colors
- Text colors
- Border colors
- Typography
- Border radius
- Shadows
- Card style
- Button style
- Animation style
- Spacing system

All sections should follow the same visual language.

Aceternity components should be customized to fit this design system.

---

# 31. Animation Guidelines

Use animation purposefully.

Good examples:

- Section reveal on scroll
- Number counters
- Timeline animation
- Graph transitions
- Map interactions
- Card hover
- Image parallax
- Button hover
- Navbar transitions
- Subtle background movement

Animations should be:

- Smooth
- Short
- Subtle
- Consistent

Do not make the website difficult to use because of animations.

Respect:

```text
prefers-reduced-motion
```

for accessibility.

---

# 32. Responsive Design

The website must work properly on:

- Desktop
- Laptop
- Tablet
- Mobile

Pay special attention to:

- Navbar
- Hero
- Statistics
- Services
- Graphs
- Timeline
- Map
- Location cards
- Footer

Do not simply shrink the desktop design for mobile.

Create appropriate mobile layouts.

### Mobile Map

On mobile:

- Map should remain usable
- Location list can appear below the map
- Cards should be touch-friendly
- Popups should not overflow the viewport
- Filters/search should remain easy to use

### Mobile Graphs

Graphs must:

- Fit the screen
- Remain readable
- Support touch interactions
- Avoid overlapping labels

---

# 33. Code Architecture

Use a clean component-based architecture.

Suggested structure:

```text
app/
├── page.tsx
├── layout.tsx
├── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── Services.tsx
├── Statistics.tsx
├── Achievements.tsx
├── Growth.tsx
├── GrowthChart.tsx
├── Locations.tsx
├── LocationMap.tsx
├── LocationCard.tsx
├── LocationSearch.tsx
├── CTA.tsx
└── Footer.tsx

components/ui/
├── ...
```

Use reusable components and avoid unnecessary duplication.

---

# 34. TypeScript

Use proper TypeScript types/interfaces for:

- Services
- Achievements
- Statistics
- Growth data
- Locations
- Map markers
- Contact information

Avoid excessive use of:

```typescript
any
```

Use strongly typed data structures.

---

# 35. Data Organization

Keep content/data separate from UI components where practical.

For example:

```text
data/
├── services.ts
├── achievements.ts
├── statistics.ts
├── growth.ts
└── locations.ts
```

This makes the website easier to maintain and update.

The data files should contain information extracted from the PDFs.

---

# 36. SEO

Implement proper SEO.

Include:

- Page title
- Meta description
- Open Graph metadata
- Semantic HTML
- Proper heading hierarchy
- Descriptive image alt text
- Organization information where appropriate

Use the actual organization name and purpose from the PDFs.

---

# 37. Accessibility

Follow good accessibility practices.

Include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper ARIA labels where required
- Sufficient color contrast
- Alt text
- Reduced-motion support
- Accessible map interactions where practical

Do not rely only on color to communicate information.

---

# 38. Performance

Prioritize performance.

Use:

- Next.js Image
- Lazy loading where appropriate
- Optimized animations
- Efficient rendering
- Dynamic imports where appropriate
- Proper map loading
- Optimized chart rendering

Do not add large libraries unless they provide real value.

Do not sacrifice performance simply to add visual effects.

---

# 39. Loading States

Create professional loading states for:

- Map
- Graphs
- Images
- Dynamic sections where necessary

Avoid blank screens while content is loading.

Use subtle skeletons or loading indicators where appropriate.

---

# 40. Error Handling

Handle cases such as:

- Map failing to load
- Missing location coordinates
- Missing images
- Missing optional PDF information
- Graph data unavailable

The website should degrade gracefully.

For example, if map coordinates are unavailable, show the location information instead of creating fake coordinates.

---

# 41. Final Implementation Rules

Before coding:

1. Analyze every provided PDF.
2. Extract the factual information.
3. Categorize the information into:
   - About
   - Services
   - Achievements
   - Statistics
   - Growth
   - Locations
   - Contact
4. Identify all numerical data that can be visualized.
5. Identify all location data that can be displayed on the map.
6. Design the website structure around the actual content.
7. Then implement the Next.js website.

---

# 42. Final Quality Requirements

The final website should satisfy all of the following:

### Content

- Based on the provided PDFs
- Factually accurate
- No fabricated information
- Clear and concise
- Professional copywriting

### UI

- Modern
- Premium
- Consistent
- Responsive
- Human-designed appearance
- Inspired by Aceternity UI without copying it

### Data

- Real graphs where numerical data exists
- Interactive charts
- Accurate labels
- Tooltips
- Responsive visualization
- No fabricated data

### Locations

- Interactive map
- Accurate service-center markers
- Location cards
- Search/filter where appropriate
- Map ↔ card interaction
- Accurate location information

### Technical

- Next.js
- TypeScript
- Tailwind CSS
- Reusable components
- Clean architecture
- SEO
- Accessibility
- Performance optimization

---

# 43. Most Important Design Principle

Do not build the website by simply placing:

```text
Hero
↓
Cards
↓
Cards
↓
Cards
↓
Gradient
↓
Cards
↓
Footer
```

Instead, create a **visual narrative**:

```text
ORGANIZATION
      ↓
WHAT WE DO
      ↓
SERVICES
      ↓
IMPACT
      ↓
ACHIEVEMENTS
      ↓
GROWTH OVER TIME
      ↓
GEOGRAPHIC EXPANSION
      ↓
CURRENT SERVICE-CENTER NETWORK
      ↓
CONTACT / ACTION
```

Use **graphs to explain growth** and an **interactive map to explain geographic reach**.

The website should tell the organization's story visually rather than simply displaying information.

---

# 44. Final Expected Result

The final website should feel like:

> A professionally commissioned website for a real organization, built using modern Next.js technology and premium UI patterns.

It should **not** feel like:

> A generic AI-generated landing page or a collection of Aceternity UI demos.

Use:

**Next.js + TypeScript + Tailwind CSS + Aceternity UI-inspired components + Interactive Charts + Interactive Map**

with the **provided PDFs as the single source of truth for the organization's content and data**.

The primary focus should be:

**Services → Achievements → Growth → Data Visualization → Geographic Reach → Locations → Trust → Clear User Experience**