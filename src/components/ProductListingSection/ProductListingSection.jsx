import { useContext, useState, useEffect } from 'react'
import Styles from './ProductListingSection.module.css'
import Container from '../Building Blocks/Container/Container'
import SearchBar from '../Building Blocks/SearchBar/SearchBar'
import ProductCard from '../Building Blocks/ProductCard/ProductCard'
import { CategoriesContext } from '../../context/CategoriesContext'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'
import ProductService from '../../services/productService'
import selectedCategoryService from '../../services/selectedCategory' // Import service

const ProductListingSection = () => {
    const { categories } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [showFilters, setShowFilters] = useState(false)  
      console.log(selectedCategory);
    
    useEffect(() => {
        const service = new ProductService()
        setTimeout(() => {
            const allProducts = service.getAllProducts()
            setProducts(allProducts)
            setFilteredProducts(allProducts)
        }, 500)
    }, [])

    useEffect(() => {
        const currentCategory = selectedCategoryService.getCategory()
        setSelectedCategory(currentCategory)
        
        const unsubscribe = selectedCategoryService.subscribe((newCategory) => {
            setSelectedCategory(newCategory)
        })
        
        return unsubscribe
    }, [])

    // Filter when category changes
    useEffect(() => {
        if (products.length > 0) {
            if (selectedCategory === 'All') {
                setFilteredProducts(products)
            } else {
                const filtered = products.filter(p => p.category === selectedCategory)
                setFilteredProducts(filtered)
            }
        }
    }, [selectedCategory, products])

    const applyPriceFilter = () => {
        console.log('Filtering:', minPrice, '-', maxPrice)
        setShowFilters(false)  
    }

    return (
        <>
        <SectionGap />
        <div className={Styles.ProductListingParent}>
            <Container>
                <div className={Styles.filterTopBar}>
                    <button 
                        className={Styles.filterToggleBtn}
                        onClick={() => setShowFilters(true)}
                    >
                        🔍 Filter Products
                    </button>
                </div>

                <div className={Styles.ProductListingContent}>
                    <div className={`${Styles.plFilters} ${showFilters ? Styles.show : ''}`}>
                        <div className={Styles.filterHeader}>
                            <h2>Filters</h2>
                            <button 
                                className={Styles.closeBtn}
                                onClick={() => setShowFilters(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <SearchBar />
                        <div className={Styles.plCategories}>
                            <h1>Categories</h1>
                            {categories && categories.map((category) => (
                                <p
                                    key={category.id}
                                    className={Styles.plCategory}
                                    onClick={() => selectedCategoryService.setCategory(category.categoryName)}
                                    style={{
                                        fontWeight: selectedCategory === category.categoryName ? 'bold' : 'normal',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {category.categoryName}
                                </p>
                            ))}
                        </div>
                        <div className={Styles.priceFilter}>
                            <h1>Price</h1>
                            <div className={Styles.priceInputs}>
                                <div className={Styles.inputGroup}>
                                    <label>From Rs</label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="100"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        placeholder="0.00"
                                        className={Styles.priceInput}
                                    />
                                </div>
                                <div className={Styles.inputGroup}>
                                    <label>To Rs</label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="100"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        placeholder="29212.00"
                                        className={Styles.priceInput}
                                    />
                                </div>
                            </div>
                            <button
                                className={Styles.applyButton}
                                onClick={applyPriceFilter}
                            >
                                Apply Filter
                            </button>
                        </div>
                    </div>

                    {showFilters && <div className={Styles.overlay} onClick={() => setShowFilters(false)}></div>}

                    <div className={Styles.plProducts}>
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                logotext={product.logotext}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default ProductListingSection