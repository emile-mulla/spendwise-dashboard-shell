# SpendWise Dashboard Shell

A responsive static layout shell for the **SpendWise** personal finance dashboard, built with **HTML5**, **CSS Grid**, **Flexbox**, and **CSS Custom Properties** as the structural foundation for the capstone project.

## What Was Built

- **`index.html`**: Semantic layout structure containing a navigation sidebar, top overview header, and six financial category cards (*Food & Dining*, *Transport*, *Housing & Rent*, *Entertainment*, *Savings*, and *Utilities*).
- **`style.css`**: Complete styling layer implementing CSS Grid for overall layout scaffolding, Flexbox for internal alignment, `:root` design tokens, dark mode via `@media (prefers-color-scheme: dark)`, a single-column layout below `768px`, and `180ms` hover/focus transitions.
- **`README.md`**: Documentation describing the project structure, layout architecture, and verification steps.

## How Each Part Works

1. **Dashboard Layout (`index.html` & `style.css`)**: Separates navigation (`.sidebar`), summary context (`.topbar`), and category breakdown cards (`.cards-grid`) using static sample figures without relying on layout `position: absolute`.
2. **CSS Grid & Flexbox**:
   - **CSS Grid** drives `.dashboard-shell` (sidebar + main column), `.main-area` (header + content rows), and `.cards-grid` (multi-column card grid on desktop, single column under `768px`).
   - **Flexbox** aligns items inside `.topbar`, `.header-summary`, `.brand-row`, `.nav-item` links, and each `.category-card` (header row, amount row, and vertical stack).
3. **CSS Custom Properties & Dark Theme**: Defines `--color-brand`, `--color-accent`, `--color-bg`, `--color-surface`, `--color-text-primary`, and `--color-text-secondary` on `:root`, and overrides only those `:root` custom properties inside `@media (prefers-color-scheme: dark)`.
4. **Responsiveness**: Uses `@media (max-width: 767px)` so both `.dashboard-shell` and `.cards-grid` collapse into a single column (`1fr`) below `768px`.
5. **Card Micro-interactions**: Applies `transform: translateY(-3px)` and `box-shadow` transitions over `180ms` (under the `250ms` limit) on both `:hover` and `:focus-visible`.

## Verification in DevTools

1. Open `index.html` in a browser and open **DevTools** (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
2. Toggle the **Device Toolbar** (`Ctrl+Shift+M` / `Cmd+Shift+M`) and test widths below `768px` (e.g., `375px` and `767px`) to confirm the single-column layout, as well as desktop widths (`>= 768px`).
3. Test both mouse hover and `Tab` keyboard focus on the category cards to verify smooth `180ms` motion and focus visibility, and toggle dark color scheme emulation in DevTools rendering settings to verify the dark theme variables.