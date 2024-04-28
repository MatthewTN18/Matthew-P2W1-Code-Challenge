
import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
    const [transactions, setTransactions] = useState([
        { description: 'Groceries', amount: 50, category: 'Food' },
        { description: 'Gasoline', amount: 30, category: 'Transportation' },
        // Add more transactions as needed
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSort = (criteria) => {
        if (sortBy === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('asc');
        }
    };

    // Filter transactions based on search query
    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort transactions based on sorting criteria
    const sortedTransactions = () => {
        let sorted = [...filteredTransactions];
        if (sortBy === 'description') {
            sorted = sorted.sort((a, b) => a.description.localeCompare(b.description));
        } else if (sortBy === 'category') {
            sorted = sorted.sort((a, b) => a.category.localeCompare(b.category));
        }
        return sortOrder === 'desc' ? sorted.reverse() : sorted;
    };

    return (
        <div>
            <h1>Bank Transactions</h1>
            <TransactionForm onSubmit={handleAddTransaction} />
            <SearchBar onSearch={handleSearch} />
            <TransactionTable transactions={sortedTransactions()} />
        </div>
    );
};

export default App;