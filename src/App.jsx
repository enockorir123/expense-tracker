import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
      <ExpenseTotal expenses={expenses} />
    </div>
  );
}

export default App;
