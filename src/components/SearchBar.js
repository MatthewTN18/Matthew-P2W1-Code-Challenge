import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;