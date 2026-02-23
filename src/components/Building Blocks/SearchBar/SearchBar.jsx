import React from 'react'
import { IoSearch } from "react-icons/io5";
import Styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={Styles.searchContainer}>
      <input type="text" className={Styles.searchBar} placeholder='Search for Your Desired Results' />
        <IoSearch className={Styles.icon} />

    </div>
  )
}

export default SearchBar
