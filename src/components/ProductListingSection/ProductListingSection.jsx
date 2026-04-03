// components/ProductListingSection/ProductListingSection.jsx
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './ProductListingSection.module.css';
import Container from '../Building Blocks/Container/Container';
import SearchBar from '../Building Blocks/SearchBar/SearchBar';
import ProductCard from '../Building Blocks/ProductCard/ProductCard';
import { CategoriesContext } from '../../context/CategoriesContext';
import SectionGap from '../Building Blocks/SectionGap/SectionGap';
import ProductService from '../../services/ProductService';
import selectedCategoryService from '../../services/selectedCategory';
import SearchService from '../../services/SearchService';

const ProductListingSection = () => {
    const { categories } = useContext(CategoriesContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const urlSearchQuery = queryParams.get('search') || '';

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
    const [productsLoaded, setProductsLoaded] = useState(false);

    const searchService = new SearchService();

    // Load all products - FIXED VERSION
    useEffect(() => {
        const service = new ProductService();
        
        const checkProducts = setInterval(() => {
            const allProducts = service.getAllProducts();
            if (allProducts.length > 0 && !productsLoaded) {
                setProducts(allProducts);
                setFilteredProducts(allProducts);
                setProductsLoaded(true);
                clearInterval(checkProducts);
            }
        }, 100);
        
        const timeout = setTimeout(() => {
            clearInterval(checkProducts);
        }, 5000);
        
        return () => {
            clearInterval(checkProducts);
            clearTimeout(timeout);
        };
    }, [productsLoaded]);

    // Sync searchQuery state when URL changes (e.g., user navigates back)
    useEffect(() => {
        setSearchQuery(urlSearchQuery);
    }, [urlSearchQuery]);

    // Listen for category changes
    useEffect(() => {
        const currentCategory = selectedCategoryService.getCategory();
        setSelectedCategory(currentCategory);
        const unsubscribe = selectedCategoryService.subscribe((newCategory) => {
            setSelectedCategory(newCategory);
        });
        return unsubscribe;
    }, []);

    // Combined filtering function
    const applyAllFilters = () => {
        let filtered = [...products];

        // 1. Category filter
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // 2. Price filter
        if (minPrice !== '' || maxPrice !== '') {
            filtered = filtered.filter(product => {
                const productPrice = product.price;
                const min = minPrice === '' ? 0 : Number(minPrice);
                const max = maxPrice === '' ? Infinity : Number(maxPrice);
                return productPrice >= min && productPrice <= max;
            });
        }

        // 3. Search filter (from URL)
        filtered = searchService.search(searchQuery, filtered);

        setFilteredProducts(filtered);
    };

    // Run filters whenever any dependency changes
    useEffect(() => {
        if (products.length > 0) {
            applyAllFilters();
        }
    }, [products, selectedCategory, minPrice, maxPrice, searchQuery]);

    const applyPriceFilter = () => {
        setShowFilters(false);
    };

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

                            <SearchBar initialQuery={searchQuery} />

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
                                    id={product.id}
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
    );
};

export default ProductListingSection;