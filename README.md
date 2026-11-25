# SpendWise — Personal Finance & Budget Tracker

**SpendWise** is a personal finance dashboard built progressively in the PLP Web Development course. It combines a responsive dashboard layout (`index.html` and `style.css`) with foundational JavaScript budget-processing logic (`script.js`).

## What SpendWise Does

- Displays a responsive dashboard layout featuring a navigation sidebar, spending overview header, and six financial category cards (*Food & Dining*, *Transport*, *Housing & Rent*, *Entertainment*, *Savings*, and *Utilities*).
- Prompts the user for a budget period, monthly budget, and total expenses, calculates the remaining balance and spending percentage, and logs a clear summary to the browser console.

## JavaScript Concepts Implemented

- **Variables & Data Types**: Uses `const` for immutable configuration/defaults and `let` for mutable state (`budgetPeriod`, `monthlyBudget`, `totalExpenses`), working with strings and numbers.
- **User Input & Validation**: Reads input through `prompt()`, trims whitespace, converts strings to numbers using `Number()`, and safely falls back to defaults on cancel, empty input, or invalid numbers.
- **Arithmetic & Conditionals**: Computes `budget - expenses`, calculates spending percentage, and evaluates budget standing (`Within Budget`, `Budget Fully Allocated`, or `Over Budget`).
- **Functions**: Organizes input handling, calculations, formatting, and console reporting into reusable functions.

## How Variables Are Used

- **`const` variables** (`APP_NAME`, `CURRENCY_SYMBOL`, `DEFAULT_MONTHLY_BUDGET`, `DEFAULT_EXPENSES`) store fixed labels and fallback numbers that should not be reassigned.
- **`let` variables** (`budgetPeriod`, `monthlyBudget`, `totalExpenses`) store session values that update when the user enters new budgeting details.

## How User Input Is Collected

- `startSpendWiseFoundation()` prompts the user for the budget period, monthly budget, and total expenses.
- `promptForPositiveNumber(message, fallbackValue)` validates each numeric prompt and returns `fallbackValue` if the user cancels, submits an empty string, or enters a negative or non-numeric value.

## How Calculations Are Performed

- `calculateRemainingBalance(budget, expenses)` subtracts `expenses` from `budget` (`budget - expenses`).
- `calculateSpendingPercentage(budget, expenses)` computes `((expenses / budget) * 100)` rounded to one decimal place (returning `0` when `budget` is zero or negative).
- `getBudgetStatus(remainingBalance)` returns `"Within Budget"` if `remainingBalance > 0`, `"Budget Fully Allocated"` if `remainingBalance === 0`, or `"Over Budget"` if `remainingBalance < 0`.

## How Functions Help Organize the Code

Each function handles a single responsibility so the logic stays readable and reusable:
- `promptForPositiveNumber` handles prompt input validation.
- `calculateRemainingBalance`, `calculateSpendingPercentage`, and `getBudgetStatus` isolate financial calculations and status checks.
- `formatCurrency` formats numeric totals consistently.
- `printBudgetReport` formats and prints labeled console output.
- `startSpendWiseFoundation` runs the full workflow in sequence.

## Repository Files

- `index.html` — Dashboard markup and `<script src="script.js" defer></script>`.
- `style.css` — CSS Grid and Flexbox layout, `:root` custom properties, `@media (prefers-color-scheme: dark)`, single-column responsive layout below `768px`, and `180ms` card hover/focus transitions.
- `script.js` — Variables, input prompts, budget calculations, reusable functions, and console output.
- `README.md` — Project documentation.