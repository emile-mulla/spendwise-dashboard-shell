// ============================================================================
// SpendWise — JavaScript Foundation
// ============================================================================

const APP_NAME = "SpendWise";
const CURRENCY_SYMBOL = "$";
const DEFAULT_MONTHLY_BUDGET = 3200;
const DEFAULT_EXPENSES = 2145;

let budgetPeriod = "November 2026";
let monthlyBudget = DEFAULT_MONTHLY_BUDGET;
let totalExpenses = DEFAULT_EXPENSES;

/**
 * Prompts the user for a non-negative number and returns a fallback value
 * if the prompt is canceled, blank, negative, or not a finite number.
 */
function promptForPositiveNumber(message, fallbackValue) {
  const rawInput = prompt(message, String(fallbackValue));

  if (rawInput === null || rawInput.trim() === "") {
    return fallbackValue;
  }

  const parsed = Number(rawInput.trim());
  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallbackValue;
  }

  return parsed;
}

/**
 * Calculates remaining budget balance from budget and expenses.
 */
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

/**
 * Calculates the percentage of the budget used, rounded to one decimal place.
 */
function calculateSpendingPercentage(budget, expenses) {
  if (budget <= 0) {
    return 0;
  }
  return Number(((expenses / budget) * 100).toFixed(1));
}

/**
 * Determines spending standing based on remaining balance.
 */
function getBudgetStatus(remainingBalance) {
  if (remainingBalance > 0) {
    return "Within Budget";
  }
  if (remainingBalance === 0) {
    return "Budget Fully Allocated";
  }
  return "Over Budget";
}

/**
 * Formats numbers into a consistent currency string.
 */
function formatCurrency(amount) {
  return `${CURRENCY_SYMBOL}${amount.toFixed(2)}`;
}

/**
 * Prints a clearly labeled budget report to the browser console.
 */
function printBudgetReport(period, budget, expenses, remainingBalance, percentageUsed, status) {
  console.log(`=== ${APP_NAME} Budget Summary (${period}) ===`);
  console.log(`Monthly Budget:     ${formatCurrency(budget)}`);
  console.log(`Total Expenses:     ${formatCurrency(expenses)}`);
  console.log(`Remaining Balance:  ${formatCurrency(remainingBalance)}`);
  console.log(`Budget Used:        ${percentageUsed}%`);
  console.log(`Budget Status:      ${status}`);
  console.log("==========================================");
}

/**
 * Coordinates input collection, budget calculations, and console reporting.
 */
function startSpendWiseFoundation() {
  const periodInput = prompt("Enter the budget period (e.g., November 2026):", budgetPeriod);
  if (periodInput && periodInput.trim() !== "") {
    budgetPeriod = periodInput.trim();
  }

  monthlyBudget = promptForPositiveNumber(
    "Enter your monthly budget amount:",
    DEFAULT_MONTHLY_BUDGET
  );

  totalExpenses = promptForPositiveNumber(
    "Enter your total expenses so far:",
    DEFAULT_EXPENSES
  );

  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  const percentageUsed = calculateSpendingPercentage(monthlyBudget, totalExpenses);
  const status = getBudgetStatus(remainingBalance);

  printBudgetReport(
    budgetPeriod,
    monthlyBudget,
    totalExpenses,
    remainingBalance,
    percentageUsed,
    status
  );
}

startSpendWiseFoundation();