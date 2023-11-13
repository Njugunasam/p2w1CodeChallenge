import React from 'react';
import './TransactionCard.css';

function TransactionCard({ transaction }) {
  return (
    <div className="transaction-card">
      <ul>
        <li>
          <span className="label">Description:</span>
          <span className="value">{transaction.description}</span>
        </li>
        <li>
          <span className="label">Category:</span>
          <span className="value">{transaction.category}</span>
        </li>
        <li>
          <span className="label">Date:</span>
          <span className="value">{transaction.date}</span>
        </li>
        <li>
          <span className="label">Amount:</span>
          <span className="value">{transaction.amount}</span>
        </li>
      </ul>
    </div>
  );
}

export default TransactionCard;