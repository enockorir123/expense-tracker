import React from 'react';

function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h2>Total Expenses: Kshs {total.toFixed(2)}</h2>
    </div>
  );
}

export default ExpenseTotal;
