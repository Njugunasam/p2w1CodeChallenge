import './App.css';
import React, { useState, useEffect } from "react";
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import TransactionCard from './TransactionCard';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Njugunasam/p2w1CodeChallenge/transactions")
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