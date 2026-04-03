import React, { useState } from 'react'
import Styles from './SearchPageSection.module.css'
import Container from '../Building Blocks/Container/Container'
import SquareButton from '../Building Blocks/Buttons/RoundedButton'
import SearchService from '../../services/SearchService'
import ProductService from '../../services/ProductService'
import ProductCard from '../Building Blocks/ProductCard/ProductCard'

const SearchPageSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const searchService = new SearchService()
    const productService = new ProductService()
    const allProducts = productService.getAllProducts()

    const handleSearch = () => {
        if (searchQuery.trim()) {
            const results = searchService.search(searchQuery, allProducts)
            setSearchResults(results)
            setHasSearched(true)
        } else {
            setSearchResults([])
            setHasSearched(true)
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

                {hasSearched && (
                    <div className={Styles.searchResults}>
                        <h2>Results for "{searchQuery}" ({searchResults.length} products)</h2>
                        {searchResults.length === 0 ? (
                            <p>No products found</p>
                        ) : (
                            <div className={Styles.resultsGrid}>
                                {searchResults.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        logotext={product.logotext}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default SearchPageSection