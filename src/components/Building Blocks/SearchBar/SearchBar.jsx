// components/Building Blocks/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Styles from './SearchBar.module.css';

const SearchBar = ({ initialQuery = '' }) => {
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/product-list?search=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            navigate('/product-list'); // optional: go without query
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={Styles.searchContainer}>
            <input
                type="text"
                className={Styles.searchBar}
                placeholder="Search for Your Desired Results"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <IoSearch className={Styles.icon} onClick={handleSearch} />
        </div>
    );
};

export default SearchBar;