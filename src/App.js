import './App.css';
import React, { useState, useEffect } from "react";
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <TransactionCard transaction={transaction} /> {/* Use the TransactionCard component */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
