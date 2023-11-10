import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
//events handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
        date,
        description,
        category,
        amount: parseFloat(amount), // Convert amount to a number
      };
      addTransaction(newTransaction);

    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };
}
