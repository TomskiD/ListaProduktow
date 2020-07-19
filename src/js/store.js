export default class Store {
    static getProducts() {
      let products;
      if (localStorage.getItem('products') === null) {
        products = [];
      } else {
        products = JSON.parse(localStorage.getItem('products'));
      }
      return products;
    }
  
    static addProduct(product) {
      const products = Store.getProducts();
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));
    }
  
    static removeProduct(category) {
      const products = Store.getProducts();
      products.forEach((product, index) => {
        if (product.category === category) {
          products.splice(index, 1);
        }
      });
      localStorage.setItem('products', JSON.stringify(products));
    }
  }
  