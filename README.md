# FlowForge

> **Build Faster. Ship Smarter.**

FlowForge is a modern, responsive SaaS landing page concept for a fictional team productivity and workflow platform. The page presents a polished product-marketing experience with a glass-effect navigation bar, animated hero section, feature cards, product statistics, calls to action, and a compact footer.

The project is implemented with **HTML5, CSS3, Tailwind CSS, and Vanilla JavaScript**. It is a static front-end website intended to demonstrate landing-page design, responsive layouts, CSS animation, theme switching, and basic navigation interactions.

**Project scope:** The repository contains the marketing website only. It does not implement the actual project management, collaboration, workflow automation, analytics, AI, authentication, or enterprise security services described in the landing-page copy.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Page Sections](#page-sections)
- [Interactive Functionality](#interactive-functionality)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [External Dependencies](#external-dependencies)
- [Customization](#customization)
- [Deployment](#deployment)
- [Current Scope and Limitations](#current-scope-and-limitations)
- [Potential Improvements](#potential-improvements)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)

---

## Overview

FlowForge is designed as a SaaS product landing page built around the tagline **Build Faster. Ship Smarter.**

The visual concept presents a platform intended to help teams plan work, collaborate, automate processes, and monitor delivery. The website communicates that concept through a hero section, a set of feature highlights, illustrative statistics, and conversion-focused calls to action.

The implementation focuses on the front-end presentation:

- A sticky, glass-effect navigation bar.
- Desktop navigation with a Solutions dropdown.
- A collapsible mobile navigation menu.
- A light and dark theme.
- A large hero section with animated gradient orbs and gradient text.
- A four-item statistics strip.
- Six feature cards.
- A prominent closing call-to-action section.
- A responsive footer.

The site runs directly in a browser. It does not require a framework, package manager, build process, server-side application, or database.

## Features

### Visual and layout features

- Modern SaaS landing-page design.
- Responsive navigation for desktop and mobile.
- Rounded glass-style navigation container.
- Sticky header with a visual change after scrolling.
- Hero section with animated background orbs.
- Animated gradient headline.
- Fade-in entrance animations.
- Public Beta status pill with animated indicator.
- Product statistics layout.
- Six responsive feature cards with Feather icons.
- Gradient and hover effects on call-to-action buttons.
- Responsive footer.

### Interactive features

- Mobile menu open and close control.
- Solutions dropdown on desktop hover.
- Light and dark theme switching.
- Theme preference saved in LocalStorage.
- Initial theme selection based on saved preference or operating-system preference.
- Header scroll-state effect.
- Feather icon initialization.

### Lightweight implementation

- Native HTML, CSS, and JavaScript.
- Tailwind CSS loaded from its CDN.
- No React, Vue, Angular, or other front-end framework.
- No npm dependencies or build tooling.
- No backend or database.

---

## Page Sections

The complete landing page is contained in `index.html`.

### 1. Navigation Header

The header remains at the top of the viewport using sticky positioning.

It contains:

- CodeWithTaimoor wordmark.
- Features navigation link.
- Solutions dropdown.
- Pricing link.
- About Us link.
- Desktop search field.
- Light and dark theme toggle.
- Login call-to-action.
- Mobile menu button.

The navigation is wrapped in a rounded glass-effect container. Its appearance changes when the page is scrolled beyond the configured threshold.

**Important:** Most navigation destinations currently use placeholder `#` links. The search field and Login link are visual interface elements, not connected to search or authentication services.

### 2. Solutions Dropdown

The desktop navigation includes a Solutions dropdown with three example entries:

- For Startups
- For Enterprise
- By Industry

The dropdown is displayed using CSS hover behavior. These entries are illustrative navigation options and do not lead to implemented solution pages.

### 3. Mobile Navigation

At smaller screen widths, the desktop navigation links are hidden and a menu button is displayed.

The mobile menu contains:

- Search input.
- Features link.
- Solutions link.
- Pricing link.
- About Us link.
- Login link.

The menu expands and collapses through a CSS class controlled by JavaScript. The menu button switches between open and close icons.

### 4. Hero Section

The hero is the main visual focus of the page.

It includes:

- A **Now in Public Beta** status pill.
- The headline **Build Faster. Ship Smarter.**
- A short product-positioning description.
- **Get Started Free** primary call to action.
- **Watch Demo** secondary call to action.
- A row of illustrative company wordmarks.

Three blurred gradient orbs provide ambient background movement. The headline uses animated gradient text, while the hero content uses staggered fade-in animations.

The company names displayed in the trust-logo area are static illustrative content. They do not indicate partnerships, customer relationships, or endorsements.

The two hero calls to action currently use placeholder links and do not start a signup flow or play a product demo.

### 5. Statistics Bar

A four-column statistics section displays the following sample values:

| Displayed value | Label |
|---|---|
| 10K+ | Active Users |
| 99.9% | Uptime SLA |
| 50+ | Integrations |
| 4.9★ | User Rating |

These values are hard-coded in the HTML for visual presentation. They are not connected to analytics, monitoring, customer records, uptime reporting, integrations, or review data. They should be treated as illustrative design content, not verified product metrics or service commitments.

### 6. Features Section

The features section introduces six example capabilities using icon-led cards.

| Feature | Description presented on the page | Icon |
|---|---|---|
| Lightning Fast | Speed and performance positioning | Zap |
| Enterprise Security | Security and data-protection positioning | Shield |
| Version Control | Branching and rollback positioning | Git Branch |
| Team Collaboration | Shared workspaces and teamwork positioning | Users |
| Advanced Analytics | Performance and usage insights positioning | Bar Chart |
| AI-Powered | Smart suggestions and automation positioning | CPU |

The cards use a responsive grid and subtle hover effects.

These are product-concept descriptions only. The repository does not include the backend services or application functionality required to provide these capabilities. In particular, claims such as SOC 2 compliance, end-to-end encryption, real-time editing, and sub-millisecond responses are not technically established by this static landing page.

### 7. Closing Call-to-Action Section

The closing section uses a dark gradient background and includes:

- A **Ready to get started?** heading.
- Supporting promotional text.
- A **Start Building Free** link.

The link currently points to a placeholder destination. No registration or onboarding workflow is implemented.

### 8. Footer

The footer contains:

- CodeWithTaimoor wordmark.
- Privacy link.
- Terms link.
- Contact link.
- Copyright notice.

The footer links are placeholders and do not currently open dedicated policy or contact pages.

---

## Interactive Functionality

The page behavior is implemented in `script.js`.

### 1. Mobile Menu Toggle

The script selects the mobile menu button, menu container, and open and close icons.

When the button is clicked, it:

1. Toggles the `menu-open` class on the mobile menu.
2. Hides the open-menu icon.
3. Displays the close-menu icon.
4. Reverses the icon visibility when the menu is closed.

The CSS controls the menu's expanding and collapsing transition through `max-height`.

### 2. Sticky Header Scroll Effect

A scroll event listener checks the page's vertical scroll position.

- When `window.scrollY` is greater than 50 pixels, the header receives the `header-scrolled` class.
- When the page returns to the top threshold, the class is removed.

The stylesheet uses this class to change the glass navigation background, border, and blur effect.

### 3. Light and Dark Theme

The theme switcher changes the `dark` class on the root HTML element.

The theme application function:

1. Receives either `light` or `dark`.
2. Adds or removes the `dark` class on `document.documentElement`.
3. Updates the visibility of the theme icons.
4. Saves the selected preference in LocalStorage under the key `theme`.

On initial page load, the script checks the saved theme. If no preference is saved, it checks the operating system preference using `prefers-color-scheme: dark`.

The selected theme is then applied.

**Storage detail:** The theme preference is stored in the visitor's browser. It is not synchronized between devices or stored on a server.

### 4. Feather Icon Initialization

The page uses Feather Icons through the CDN package.

The script calls:

```javascript
feather.replace();
```

This converts elements marked with Feather's `data-feather` attributes into rendered SVG icons.

### Interaction summary

| Interaction | Current behavior |
|---|---|
| Mobile menu button | Opens and closes the mobile menu |
| Desktop Solutions item | Opens dropdown on hover |
| Theme toggle | Switches between light and dark themes |
| Theme persistence | Saves the selected theme in LocalStorage |
| First visit theme | Uses the operating-system preference when no saved theme exists |
| Page scrolling | Changes the sticky header appearance after 50px |
| Feather icons | Replaced with SVG icons during script initialization |
| Search field | Visual input only |
| Login | Placeholder link |
| Get Started Free | Placeholder link |
| Watch Demo | Placeholder link |
| Pricing and About Us | Placeholder links |

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and content |
| CSS3 | Custom styling, transitions, gradients, animations, and responsive behavior |
| Tailwind CSS | Utility classes for layout, spacing, typography, colors, and breakpoints |
| Vanilla JavaScript | Mobile menu, theme switching, LocalStorage, and scroll interaction |
| Feather Icons | Navigation and feature icons |
| Google Fonts | Inter typography |
| Browser DOM APIs | Element selection, class manipulation, and event handling |
| LocalStorage API | Persisting the visitor's theme preference |
| matchMedia API | Reading the operating-system color-scheme preference |

### HTML5

The page uses HTML for its navigation, hero, feature cards, statistics, calls to action, and footer.

### CSS3

The custom stylesheet defines the visual design, including:

- Light and dark theme styles.
- Glassmorphism effects.
- Animated gradient orbs.
- Gradient headline text.
- Hover states.
- Fade-in animations.
- Mobile menu transitions.
- Feature-card interactions.
- Footer styling.

### Tailwind CSS

Tailwind CSS is loaded through its CDN script in `index.html`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

The page also configures Tailwind's dark mode to use the `class` strategy.

### Google Fonts

The project loads the **Inter** font family from Google Fonts, with multiple font weights.

### Feather Icons

Feather Icons are loaded from unpkg:

```html
<script src="https://unpkg.com/feather-icons"></script>
```

The icon library is initialized by `script.js`.

---

## Project Architecture

FlowForge uses a simple static front-end architecture.

```text
                    Visitor's Browser
                            |
                            v
                        index.html
                            |
                +-----------+-----------+
                |                       |
                v                       v
             styles.css              script.js
                |                       |
                v                       v
        Visual presentation      Browser interactions
                |                       |
        +-------+-------+       +-------+--------+
        |       |       |       |       |        |
        v       v       v       v       v        v
      Layout  Themes  Motion  Mobile  Theme    Header
                              menu   storage   scroll
                |                       |
                +-----------+-----------+
                            |
                            v
                    Rendered landing page
```

The browser loads the HTML document, stylesheet, JavaScript, and external CDN resources. JavaScript updates the DOM in response to visitor interactions.

There is no application server, API layer, database, authentication provider, or workflow engine in this repository.

---

## Project Structure

The repository uses a simple root-level structure:

```text
FlowForge-Project/
│
├── index.html       # Main landing-page markup
├── styles.css       # Themes, layout styling, animations, and visual effects
├── script.js        # Mobile menu, theme switcher, and header scroll behavior
├── LICENSE          # MIT License
└── README.md        # Project documentation
```

### File responsibilities

| File | Description |
|---|---|
| `index.html` | Contains the navigation, hero, statistics, feature cards, CTA section, and footer |
| `styles.css` | Defines the light and dark themes, glass effects, animated backgrounds, transitions, and responsive styling |
| `script.js` | Implements mobile navigation, theme preference handling, scroll-state behavior, and Feather icon initialization |
| `LICENSE` | Contains the MIT License |
| `README.md` | Documents the project, setup, design, behavior, and limitations |

There is no `package.json`, `src/` directory, or build configuration in the current repository.

---

## Getting Started

### Requirements

- A modern web browser.
- An internet connection for Tailwind CSS, Google Fonts, and Feather Icons CDN resources.
- Git (optional).
- Visual Studio Code or another code editor (optional).

No Node.js installation, npm packages, framework setup, or build command is required.

### 1. Clone the repository

```bash
git clone https://github.com/M-Taimoor-Mansha/FlowForge-Project.git
```

### 2. Navigate to the project folder

```bash
cd FlowForge-Project
```

### 3. Run the website

**Option A: Open directly**

Open `index.html` in your browser.

**Option B: Visual Studio Code Live Server**

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Open `index.html`.
4. Right-click inside the editor.
5. Select **Open with Live Server**.

**Option C: Python local server**

If Python is installed, run:

```bash
python -m http.server 5500
```

Then visit:

```text
http://localhost:5500
```

Python is only being used to serve the static files locally. The project itself is not a Python application.

---

## How to Use

1. Open the website in a modern browser.
2. Explore the navigation bar and Solutions dropdown on desktop.
3. On a smaller screen, use the menu button to open and close mobile navigation.
4. Scroll down to see the sticky header's visual transition.
5. Use the theme button to switch between light and dark appearances.
6. Refresh the page to confirm that the selected theme preference is retained.
7. Explore the hero section, statistics, feature cards, CTA, and footer.

The search, login, pricing, demo, and signup elements are currently presentation elements rather than connected product services.

---

## Design System

FlowForge uses a clean SaaS visual language with glassmorphism, soft gradients, animated background elements, and a contrasting dark theme.

### Light theme

The default page background is a soft off-white with a subtle grid pattern.

Key visual characteristics include:

- Light gray page surface.
- White translucent navigation glass.
- Dark navy login button.
- Blue and violet hero gradients.
- Light feature-card surfaces.
- Muted gray supporting text.

### Dark theme

The dark theme uses a deep navy background with cyan accents.

Key visual characteristics include:

- Deep navy page background.
- Translucent dark navigation glass.
- Cyan borders and highlights.
- Bright cyan and blue gradients.
- Dark feature-card surfaces.
- Luminous login-button treatment.

### Accent colors

The following colors are used throughout the custom stylesheet:

| Color | Hex value | Usage |
|---|---|---|
| Blue | `#3B82F6` | Light-theme primary accent |
| Violet | `#8B5CF6` | Gradient accents |
| Cyan | `#06B6D4` | Supporting light-theme gradient |
| Bright Cyan | `#00F2FE` | Dark-theme highlight |
| Light Blue | `#4FACFE` | Dark-theme gradient |
| Dark Navy | `#0D0F1A` | Dark page background |
| Slate | `#1E293B` | CTA gradient |
| Deep Slate | `#0F172A` | CTA gradient and text |

### Glassmorphism

The navigation uses translucent backgrounds, backdrop blur, subtle borders, and soft shadows. The effect becomes more pronounced after scrolling.

### Animated gradient orbs

Three blurred orbs are positioned around the hero area. Each has a different size, placement, color, and animation duration to create slow ambient movement.

### Typography

The project uses **Inter** from Google Fonts for a consistent modern sans-serif interface.

### Motion and transitions

The stylesheet includes:

- Floating gradient-orb animations.
- Pulsing status indicator.
- Animated gradient text.
- Staggered fade-in hero content.
- Feature-card hover lift.
- Button hover transitions.
- Mobile-menu expansion.
- Theme transition effects.

---

## Responsive Design

The page uses Tailwind CSS responsive utilities together with custom CSS.

### Responsive behavior

| Component | Behavior |
|---|---|
| Desktop navigation | Visible from the medium breakpoint |
| Search and theme controls | Visible on large screens |
| Mobile menu button | Displayed below the large-screen navigation breakpoint |
| Mobile navigation panel | Expands and collapses below the header |
| Hero typography | Scales across mobile, tablet, and desktop |
| Hero CTA buttons | Stack vertically on narrow screens and align horizontally on wider screens |
| Trust wordmarks | Wrap to additional lines when space is limited |
| Statistics | Two columns on small screens, four on medium and larger screens |
| Feature cards | One column on small screens, two on medium screens, three on large screens |
| Footer | Stacks vertically on smaller screens and aligns horizontally on medium screens |

Tailwind responsive prefixes such as `sm:`, `md:`, and `lg:` are used throughout the markup.

---

## External Dependencies

The current implementation loads these resources from external services:

| Resource | Source | Purpose |
|---|---|---|
| Tailwind CSS | `cdn.tailwindcss.com` | Utility-first CSS |
| Inter font | Google Fonts | Interface typography |
| Feather Icons | `unpkg.com/feather-icons` | Navigation and feature icons |

An internet connection is required for these external resources to load. The local HTML, CSS, and JavaScript files remain in the repository, but typography, icons, and utility styling may be affected if the CDNs are unavailable.

For a production deployment, consider pinning dependency versions and using a build-based Tailwind setup rather than relying on the Play CDN.

---

## Customization

### Change the brand name

Search for `CodeWithTaimoor` in `index.html` and replace the text in the navigation and footer with the desired brand name.

### Change the hero headline

Find the main heading inside the hero section in `index.html`. Update its text while retaining the `hero-gradient-text` span if you want to preserve the animated gradient effect.

### Update feature cards

The six feature cards are located in the Features section. Update each card's heading, description, and `data-feather` icon name.

### Change statistics

The four statistics are static HTML text. Update the values and labels directly in the Stats Bar section. Only publish real metrics if they are supported by actual product data.

### Change the theme colors

Open `styles.css` and locate the relevant light or dark theme rules. Update the color values used by the backgrounds, borders, gradients, and accents.

### Change the hero orb animations

The orb sizes, positions, colors, and animation durations are controlled by:

- `.orb-1`
- `.orb-2`
- `.orb-3`
- `@keyframes orbFloat1`
- `@keyframes orbFloat2`
- `@keyframes orbFloat3`

### Change the default theme

The initial theme logic is in `script.js`. It first checks LocalStorage and then the system color-scheme preference. Modify this logic if you want to force a particular initial theme.

### Connect navigation links

Replace placeholder `href="#"` values in `index.html` with real page URLs or section IDs when those destinations exist.

---

## Deployment

FlowForge is a static website and can be deployed to any hosting platform that serves HTML, CSS, and JavaScript.

### GitHub Pages

1. Open the repository on GitHub.
2. Navigate to **Settings**.
3. Select **Pages**.
4. Choose the `main` branch.
5. Select the repository root directory.
6. Save the configuration.
7. Wait for GitHub Pages to publish the site.

### Vercel

1. Sign in to Vercel.
2. Import the GitHub repository.
3. Set the project root to the repository root.
4. No build command is required for the current static implementation.
5. Deploy the site.

### Netlify

1. Import the GitHub repository.
2. Set the publish directory to the repository root.
3. Leave the build command empty.
4. Deploy the site.

### Deployment checklist

- Confirm that `index.html`, `styles.css`, and `script.js` are present.
- Check that all local file paths are correct.
- Test the mobile menu on narrow screens.
- Test the theme toggle in both directions.
- Refresh the page to verify theme persistence.
- Scroll to verify the header effect.
- Confirm that Tailwind CSS, Google Fonts, and Feather Icons load.
- Test the layout at mobile, tablet, and desktop widths.
- Verify that all visible navigation destinations are intentional.

---

## Current Scope and Limitations

This repository is a front-end landing-page concept. The marketing language describes a proposed SaaS product, but the website does not implement the services themselves.

| Capability | Current status |
|---|---|
| Responsive landing page | Implemented |
| Sticky navigation | Implemented |
| Desktop Solutions dropdown | Implemented with CSS hover |
| Mobile navigation | Implemented |
| Light and dark themes | Implemented |
| Theme preference persistence | Implemented with LocalStorage |
| System theme detection | Implemented |
| Header scroll effect | Implemented |
| Animated hero background | Implemented with CSS |
| Gradient headline | Implemented with CSS |
| Hero entrance animations | Implemented with CSS |
| Feature-card hover effects | Implemented with CSS |
| Feather icons | Implemented through CDN |
| Search functionality | Not implemented |
| User registration | Not implemented |
| Login or authentication | Not implemented |
| Project and task management | Not implemented |
| Team collaboration | Not implemented |
| Workflow automation | Not implemented |
| Analytics dashboard | Not implemented |
| AI functionality | Not implemented |
| Version control service | Not implemented |
| Integrations | Not implemented |
| Backend or database | Not included |
| Real-time notifications | Not implemented |
| Pricing system | Not implemented |
| Product demo | Not implemented |
| Privacy, terms, and contact pages | Not included |

### Marketing content versus verified functionality

Some text in the page is illustrative marketing content. In particular:

- The 10K+ active users, 99.9% uptime, 50+ integrations, and 4.9-star rating are static values.
- The company wordmarks in the trust area are not evidence of partnerships.
- Security, compliance, encryption, performance, and AI statements are not backed by services or certifications in this repository.
- The Public Beta label is part of the visual design and does not establish that a live beta service exists.

If the page is used to promote a real product, replace illustrative content with accurate, verifiable information.

---

## Potential Improvements

The following are possible future development directions, not features currently included in this repository.

### Landing-page improvements

- Add functional section navigation.
- Create dedicated Features, Solutions, Pricing, About, Privacy, and Terms pages.
- Connect the primary CTA to a real signup or waitlist form.
- Add a working product demo.
- Add accessible keyboard support for the dropdown and mobile menu.
- Close the mobile menu after selecting a navigation link.
- Add focus-visible states and improved screen-reader announcements.
- Respect reduced-motion preferences for all animations.
- Improve metadata and social sharing previews.
- Add a custom favicon and branded social preview image.

### Product functionality

- Build a real user authentication flow.
- Add project and task management.
- Create team workspaces and permissions.
- Implement workflow automation.
- Add notifications and activity history.
- Build reporting and analytics dashboards.
- Integrate external services through documented APIs.
- Add a secure backend and database.
- Add automated tests and deployment checks.

### Engineering improvements

- Pin and manage external dependency versions.
- Replace the Tailwind Play CDN with a production build setup.
- Add linting and formatting.
- Add accessibility and performance audits.
- Add automated browser tests.
- Add a content management approach for marketing copy and statistics.

---

## Troubleshooting

### The page appears without Tailwind styling

Check your internet connection and confirm that the Tailwind CDN script is loading in the browser's developer tools.

### Feather icons do not appear

Verify that the Feather Icons script from unpkg loads successfully. Check the browser console for errors related to `feather.replace()`.

### The theme toggle does not respond

Check that the following elements exist in `index.html`:

- `theme-toggle`
- `theme-toggle-dark-icon`
- `theme-toggle-light-icon`

Also verify that `script.js` is loaded and that LocalStorage is available in the browser context.

### The selected theme does not persist

The theme is stored in LocalStorage under the key `theme`. Browser privacy settings, private browsing restrictions, or cleared site data may prevent the preference from being retained.

### The mobile menu does not open

Confirm that the HTML IDs match the JavaScript selectors:

- `mobile-menu-button`
- `mobile-menu`
- `menu-icon-open`
- `menu-icon-close`

Check the browser console for JavaScript errors.

### The header does not change when scrolling

Verify that the header uses the ID `header` and that the scroll listener in `script.js` is running.

### Fonts look different

Inter is loaded from Google Fonts. If the external font cannot be reached, the browser falls back to a generic sans-serif font.

### The page looks different offline

Tailwind CSS, Google Fonts, and Feather Icons are loaded from external CDNs. Their styles and assets may not be available without an internet connection.

---

## License

This project is licensed under the **MIT License**.

Copyright (c) 2026 CodewithTaimoor.

You may use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software, subject to the conditions of the MIT License.

See the [LICENSE](LICENSE) file for the complete license text.

---

## Author

**Muhammad Taimoor Mansha**

- GitHub: [@M-Taimoor-Mansha](https://github.com/M-Taimoor-Mansha)
- LinkedIn: [Muhammad Taimoor Mansha](https://linkedin.com/in/muhammad-taimoor-mansha-a09455228)
- Portfolio: [Personal Portfolio](https://m-taimoor-mansha.github.io/Portfolio/)

---

<p align="center">
  Built with HTML5, CSS3, Tailwind CSS, and Vanilla JavaScript.
  <br><br>
  <strong>FlowForge</strong>
  <br>
  Build Faster. Ship Smarter.
</p>
