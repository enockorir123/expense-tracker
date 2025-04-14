import React from 'react';

function ExpenseList({ expenses, onDelete }) {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.length === 0 ? (
          <li>No expenses found matching the search criteria.</li>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - Kshs {expense.amount} - {new Date(expense.date).toLocaleDateString()}
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ExpenseList;
