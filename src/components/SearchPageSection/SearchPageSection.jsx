import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './SearchPageSection.module.css'
import Container from '../Building Blocks/Container/Container'
import SquareButton from '../Building Blocks/Buttons/RoundedButton'

const SearchPageSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/product-list?search=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className={Styles.searchPageParent}>
            <Container>
                <div className={Styles.searchBar}>
                    <input 
                        type="text" 
                        placeholder='Search For Your Desired Results'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <SquareButton onClick={handleSearch}>Search</SquareButton>
                </div>
            </Container>
        </div>
    )
}

export default SearchPageSection