import './App.css';
import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";

function App() {
  const [transactions, setTransactions] = useState([]); // Declare and initialize state variable

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data)); // Set the fetched data to the state variable
  }, []);

  return (
    <div className="App">
      {/* Display the fetched data */}
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount}</p>
              <TransactionTable />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;