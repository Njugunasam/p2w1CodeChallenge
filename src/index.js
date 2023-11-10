import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data)); 
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Transactions</h2>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Date: {transaction.date}</p>
              <p>Amount: {transaction.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
