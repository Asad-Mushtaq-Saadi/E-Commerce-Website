// services/SearchService.js
class SearchService {
    search(query, products) {
        if (!query || query.trim() === '') {
            return products;
        }
        const lowerQuery = query.trim().toLowerCase();
        return products.filter(product => {
            const titleMatch = product.title?.toLowerCase().includes(lowerQuery) || false;
            const categoryMatch = product.category?.toLowerCase().includes(lowerQuery) || false;
            return titleMatch || categoryMatch;
        });
    }
}

export default SearchService;