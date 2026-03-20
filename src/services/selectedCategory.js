class SelectedCategoryService {
  constructor() {
    this.category = 'All';
    this.listeners = [];
  }

  setCategory(cat) {
    this.category = cat;
    this.listeners.forEach(listener => listener(cat));
  }

  getCategory() {
    return this.category;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

export default new SelectedCategoryService(); 