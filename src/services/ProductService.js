class ProductService {
  constructor() {
    this.products = [];
    this.loadProducts(); 
  }

  async loadProducts() {
    const response = await fetch('/products.json');
    const data = await response.json();
    this.products = data.products;
    console.log(this.products); 
  }

  getAllProducts() {
    return this.products;
    
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