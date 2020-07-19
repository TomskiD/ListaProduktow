import * as mdb from 'mdb-ui-kit';
import Product from './product';
import printDiv from './print';
import Store from './store';

class UI {
  static displayProduct() {
    const products = Store.getProducts();
    products.forEach((product) => UI.addProductToList(product));
  }

  static addProductToList(product) {
    const list = document.getElementById('product-list');
    const input = document.getElementById('count');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td contentEditable="true">${product.product}</td>
    <td contentEditable="true">${product.measure} ${input.value}</td>
    <td>${product.category}</td>
    <td><a href="#" class="btn btn-dange btn-sm delete">X</a></td>
    <tr></tr>
    `;
    list.appendChild(row);
  }

  static deleteProduct(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.getElementById('product-form');
    container.insertBefore(div, form);
    // Vanis after 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
}

export default {
  mdb,
};
