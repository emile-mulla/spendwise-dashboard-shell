// ============================================================================
// SpendWise — Interactive Budgeting Application
// Demonstrates: Arrays, Loops, Conditionals, DOM Manipulation, Event Listeners
// ============================================================================

const CATEGORY_CONFIG = [
  { name: "Food & Dining", limit: 600, note: "Groceries, market produce, and weekly coffee runs." },
  { name: "Transport", limit: 300, note: "Commuter transit passes, fuel top-ups, and rideshare." },
  { name: "Housing & Rent", limit: 1100, note: "Apartment lease payment settled on schedule." },
  { name: "Entertainment", limit: 175, note: "Streaming subscriptions, cinema tickets, and weekend outings." },
  { name: "Savings", limit: 500, note: "Emergency reserve and long-term goal allocation." },
  { name: "Utilities", limit: 250, note: "Electricity tokens, fiber internet, and water bill." }
];

const INITIAL_EXPENSES = [
  { id: 1, title: "Monthly Apartment Rent", category: "Housing & Rent", amount: 1100, date: "2026-11-01" },
  { id: 2, title: "Supermarket Groceries", category: "Food & Dining", amount: 265, date: "2026-11-05" },
  { id: 3, title: "Emergency Fund Transfer", category: "Savings", amount: 400, date: "2026-11-07" },
  { id: 4, title: "Commuter Pass & Fuel", category: "Transport", amount: 215, date: "2026-11-10" },
  { id: 5, title: "Electricity & Fiber Internet", category: "Utilities", amount: 165, date: "2026-11-12" },
  { id: 6, title: "Fresh Market & Coffee", category: "Food & Dining", amount: 145, date: "2026-11-16" },
  { id: 7, title: "Streaming & Cinema Night", category: "Entertainment", amount: 95, date: "2026-11-20" }
];

let monthlyBudget = 3200;
let expenses = [...INITIAL_EXPENSES];
let nextExpenseId = INITIAL_EXPENSES.length + 1;

// DOM Element References
const totalBudgetDisplay = document.getElementById("total-budget-display");
const totalSpentDisplay = document.getElementById("total-spent-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");
const budgetStatusBanner = document.getElementById("budget-status-banner");
const cardsGrid = document.getElementById("cards-grid");
const expenseList = document.getElementById("expense-list");
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseTitleInput = document.getElementById("expense-title");
const expenseCategorySelect = document.getElementById("expense-category");
const expenseAmountInput = document.getElementById("expense-amount");
const formFeedback = document.getElementById("form-feedback");
const categoryFilterSelect = document.getElementById("category-filter");
const resetDemoBtn = document.getElementById("reset-demo-btn");

function formatCurrency(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toFixed(2)}`;
}

/**
 * Uses a loop to calculate total spending across all stored expense records.
 */
function calculateTotalSpent(expenseRecords) {
  let total = 0;
  for (let i = 0; i < expenseRecords.length; i += 1) {
    total += expenseRecords[i].amount;
  }
  return total;
}

/**
 * Uses a loop and conditional check to sum expenses for one specific category.
 */
function calculateCategoryTotal(categoryName, expenseRecords) {
  let categorySum = 0;
  for (const record of expenseRecords) {
    if (record.category === categoryName) {
      categorySum += record.amount;
    }
  }
  return categorySum;
}

/**
 * Evaluates overall budget health using conditional statements and updates the header DOM.
 */
function updateOverviewSummary() {
  const totalSpent = calculateTotalSpent(expenses);
  const remaining = monthlyBudget - totalSpent;
  const usageRatio = monthlyBudget > 0 ? totalSpent / monthlyBudget : 1;

  totalBudgetDisplay.textContent = formatCurrency(monthlyBudget);
  totalSpentDisplay.textContent = formatCurrency(totalSpent);
  remainingBalanceDisplay.textContent = formatCurrency(remaining);

  budgetStatusBanner.classList.remove("is-warning", "is-danger");

  if (remaining < 0) {
    budgetStatusBanner.textContent = `Over Budget by ${formatCurrency(Math.abs(remaining))} — review category spending`;
    budgetStatusBanner.classList.add("is-danger");
  } else if (usageRatio >= 0.8) {
    budgetStatusBanner.textContent = `Approaching Limit (${Math.round(usageRatio * 100)}% used) — ${formatCurrency(remaining)} remaining`;
    budgetStatusBanner.classList.add("is-warning");
  } else {
    budgetStatusBanner.textContent = `Within Budget (${Math.round(usageRatio * 100)}% used) — ${formatCurrency(remaining)} remaining`;
  }
}

/**
 * Loops through CATEGORY_CONFIG and dynamically renders all category cards into the DOM.
 */
function renderCategoryCards() {
  cardsGrid.innerHTML = "";

  for (const category of CATEGORY_CONFIG) {
    const spent = calculateCategoryTotal(category.name, expenses);
    const percentUsed = category.limit > 0 ? Math.round((spent / category.limit) * 100) : 0;

    let pillClass = "status-pill";
    let statusLabel = `${percentUsed}% used`;

    if (spent > category.limit) {
      pillClass = "status-pill is-danger";
      statusLabel = `${percentUsed}% (Over)`;
    } else if (percentUsed >= 80) {
      pillClass = "status-pill is-warning";
      statusLabel = `${percentUsed}% used`;
    }

    const card = document.createElement("article");
    card.className = "category-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="card-header">
        <span class="category-badge">${category.name}</span>
        <span class="${pillClass}">${statusLabel}</span>
      </div>
      <div class="card-amount-row">
        <strong class="spent-amount">${formatCurrency(spent)}</strong>
        <span class="budget-limit">of ${formatCurrency(category.limit)}</span>
      </div>
      <p class="card-note">${category.note}</p>
    `;

    cardsGrid.appendChild(card);
  }
}

/**
 * Filters expenses by selected category and loops through matching records to render the list.
 */
function renderExpenseList() {
  const selectedCategory = categoryFilterSelect.value;
  const visibleExpenses = [];

  for (const item of expenses) {
    if (selectedCategory === "All" || item.category === selectedCategory) {
      visibleExpenses.push(item);
    }
  }

  expenseList.innerHTML = "";

  if (visibleExpenses.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "No expense records match this category filter.";
    expenseList.appendChild(emptyItem);
    return;
  }

  for (let i = visibleExpenses.length - 1; i >= 0; i -= 1) {
    const record = visibleExpenses[i];
    const listItem = document.createElement("li");
    listItem.className = "expense-item";

    listItem.innerHTML = `
      <div class="expense-info">
        <span class="expense-title">${record.title}</span>
        <span class="expense-meta">${record.category} • ${record.date}</span>
      </div>
      <div class="expense-actions">
        <span class="expense-amount">${formatCurrency(record.amount)}</span>
        <button type="button" class="btn-delete" data-id="${record.id}" aria-label="Delete ${record.title}">
          Remove
        </button>
      </div>
    `;

    expenseList.appendChild(listItem);
  }
}

/**
 * Re-renders all dashboard sections whenever state changes.
 */
function refreshDashboard() {
  updateOverviewSummary();
  renderCategoryCards();
  renderExpenseList();
}

function showFeedback(message, isError = false) {
  formFeedback.textContent = message;
  formFeedback.classList.toggle("is-error", isError);
}

// Event Listener 1: Update Monthly Budget
budgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBudget = Number(budgetInput.value);

  if (!Number.isFinite(newBudget) || newBudget <= 0) {
    showFeedback("Please enter a monthly budget greater than $0.", true);
    return;
  }

  monthlyBudget = newBudget;
  showFeedback(`Monthly budget updated to ${formatCurrency(monthlyBudget)}.`);
  refreshDashboard();
});

// Event Listener 2: Add New Expense Record
expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = expenseTitleInput.value.trim();
  const category = expenseCategorySelect.value;
  const amount = Number(expenseAmountInput.value);

  if (title === "" || !Number.isFinite(amount) || amount <= 0) {
    showFeedback("Provide a valid description and an amount greater than $0.", true);
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  expenses.push({
    id: nextExpenseId++,
    title,
    category,
    amount,
    date: today
  });

  expenseForm.reset();
  showFeedback(`Added "${title}" (${formatCurrency(amount)}) to ${category}.`);
  refreshDashboard();
});

// Event Listener 3: Filter Expense List by Category
categoryFilterSelect.addEventListener("change", () => {
  renderExpenseList();
});

// Event Listener 4: Remove an Expense Record via Event Delegation
expenseList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".btn-delete");
  if (!deleteButton) {
    return;
  }

  const targetId = Number(deleteButton.dataset.id);
  const updatedExpenses = [];

  for (const record of expenses) {
    if (record.id !== targetId) {
      updatedExpenses.push(record);
    }
  }

  expenses = updatedExpenses;
  showFeedback("Expense record removed.");
  refreshDashboard();
});

// Event Listener 5: Reset Sample Data
resetDemoBtn.addEventListener("click", () => {
  monthlyBudget = 3200;
  budgetInput.value = "3200";
  expenses = [...INITIAL_EXPENSES];
  nextExpenseId = INITIAL_EXPENSES.length + 1;
  categoryFilterSelect.value = "All";
  showFeedback("Dashboard restored to initial sample records.");
  refreshDashboard();
});

// Initial Page Render
refreshDashboard();