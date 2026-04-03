class ProductService {
  constructor() {
    this.products = [];
    this.listeners = []; // Add this - for callbacks
    this.loadProducts(); 
  }

  async loadProducts() {
    const response = await fetch('/products.json');
    const data = await response.json();
    this.products = data.products;
    console.log(this.products);
    
    // Add this - notify all listeners when products are loaded
    this.listeners.forEach(listener => listener(this.products));
  }

  getAllProducts() {
    return this.products;
  }

  // Add this new method - to subscribe to product loading
  onProductsLoaded(callback) {
    if (this.products.length > 0) {
      callback(this.products);
    } else {
      this.listeners.push(callback);
    }
  }

  getProductsByCategory(category) {
    if (!category || category === 'All') return this.products;
    
    const formattedCategory = category.toLowerCase().replace(/ /g, '-');
    
    return this.products.filter(product => {
      const productCategory = product.category.toLowerCase().replace(/ /g, '-');
      return productCategory === formattedCategory;
    });
  }
}

export default ProductService;