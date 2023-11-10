import React, { useState, useEffect } from "react";

function TransactionTable() {
    const [transactions, setTransactions] = useState([]);
    function TransactionTable() {
        const [transactions, setTransactions] = useState([]);
      
        useEffect(() => {
          fetch("http://localhost:8001/transactions")
            .then((response) => response.json())
            .then((data) => {
              setTransactions(data);
            });
        }, []);

}