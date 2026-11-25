# SpendWise Dashboard Shell

A responsive static layout shell for the **SpendWise** personal finance dashboard built with **HTML5**, **CSS Grid**, **Flexbox**, and **CSS Custom Properties**.

## Structure & Components

- **`index.html`**: Defines the navigation sidebar, overview header, and six financial category cards (*Food & Dining*, *Transport*, *Housing & Rent*, *Entertainment*, *Savings*, and *Utilities*).
- **`style.css`**: Implements CSS Grid for page and card grid scaffolding, Flexbox for header/sidebar/card alignment, `:root` theme variables with `@media (prefers-color-scheme: dark)`, single-column responsiveness below `768px`, and `180ms` hover/focus micro-interactions.
- **`README.md`**: Documents the layout architecture, CSS rules, and browser verification steps.

## Key Requirements Covered

- **CSS Grid & Flexbox**: `.dashboard-shell`, `.main-area`, and `.cards-grid` use CSS Grid; `.topbar`, `.header-summary`, `.brand-row`, `.nav-list`, `.nav-item`, and `.category-card` use Flexbox without layout `position: absolute`.
- **Theme Variables & Dark Mode**: `:root` defines brand, accent, background/surface, and primary/secondary text custom properties, overridden in `@media (prefers-color-scheme: dark)`.
- **Responsive Breakpoint (`< 768px`)**: `@media (max-width: 767px)` sets `.dashboard-shell` and `.cards-grid` to `grid-template-columns: 1fr`.
- **Card Micro-interactions**: `.category-card` uses a `180ms` transition with `transform: translateY(-3px)` and `box-shadow` on both `:hover` and `:focus-visible`.