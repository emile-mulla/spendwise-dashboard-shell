# SpendWise — Interactive Personal Finance Dashboard
https://spendwise-emile.netlify.app/
**SpendWise** is an interactive personal finance and budget tracking dashboard built with **HTML5**, **CSS3 (Grid, Flexbox, Custom Properties)**, and **Vanilla JavaScript**.

## What Improvements Were Made to SpendWise This Week

- Replaced static hardcoded category cards and browser `prompt()` popups with live on-page interactive forms to update the monthly budget and log new expense entries.
- Added dynamic category card rendering, live budget health alerts in the header, and a filterable expense ledger where individual records can be added or removed in real time.

## How Conditionals Are Used in the Project

- **Budget Health Evaluation (`updateOverviewSummary`)**: Uses `if / else if / else` statements to check whether `remaining < 0` (*Over Budget* danger alert), `usageRatio >= 0.8` (*Approaching Limit* warning), or spending is safely *Within Budget*.
- **Category Threshold Styling (`renderCategoryCards`)**: Evaluates `spent > category.limit` and `percentUsed >= 80` to apply warning or over-budget status pills to individual category cards.
- **Input Validation & Filtering**: Validates form submissions before mutating state and filters records conditionally inside `renderExpenseList()`.

## How Arrays Are Used to Store Data

- `CATEGORY_CONFIG` stores an array of category objects (`name`, `limit`, and `note`) that define the six dashboard categories.
- `expenses` stores an array of expense record objects (`id`, `title`, `category`, `amount`, and `date`), allowing new records to be appended via `.push()` and removed cleanly without relying on separate individual variables per expense.

## How the DOM Is Updated

- `updateOverviewSummary()` updates `#total-budget-display`, `#total-spent-display`, `#remaining-balance-display`, and `#budget-status-banner` via `.textContent` and `.classList`.
- `renderCategoryCards()` clears `#cards-grid` and loops over `CATEGORY_CONFIG` using `document.createElement("article")` to render updated totals and percentage badges.
- `renderExpenseList()` dynamically builds `<li>` rows inside `#expense-list` (or displays an empty-state message when no records match the active filter).

## How User Interactions Are Handled Through Events

- **`submit` on `#budget-form`**: Updates `monthlyBudget` and recalculates remaining funds without reloading the page (`event.preventDefault()`).
- **`submit` on `#expense-form`**: Validates inputs, pushes a new expense object into `expenses`, resets the form, and triggers `refreshDashboard()`.
- **`change` on `#category-filter`**: Re-renders the expense list for the selected category.
- **`click` on `#expense-list` (Event Delegation)**: Detects clicks on `.btn-delete` buttons using `event.target.closest(".btn-delete")` and removes the matching record by `data-id`.
- **`click` on `#reset-demo-btn`**: Restores the initial budget and sample records.

## Challenges Encountered and How They Were Resolved

- **Keeping header totals, category cards, and the expense ledger synchronized**: Resolved by centralizing state updates into a single `refreshDashboard()` function called after every add, delete, budget update, or reset event.
- **Handling delete clicks on dynamically rendered list items**: Resolved by attaching a single delegated `click` listener on `#expense-list` and reading each button's `data-id` attribute rather than re-binding listeners on every render.