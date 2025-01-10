"use strict";

var CART = [{
  title: 'Milk',
  price: 32.5,
  qty: 2,
  isBuy: true
}, {
  title: 'Bread',
  price: 21.2,
  qty: 1,
  isBuy: false
}];

function addToCart(newTitle, newPrice, newQty) {
  var ind = CART.findIndex(function (el) {
    return el.title === newTitle;
  });
  console.log(ind);
  var action = 'added';

  if (ind === -1) {
    CART.push({
      title: newTitle,
      price: newPrice,
      qty: newQty,
      isBuy: false
    });
  } else {
    CART[ind].qty += newQty;
    action = 'update';
    CART[ind].isBuy = false;
  }

  return action;
}

function checkAndAddToCart() {
  var title = document.getElementById('prodTitle').value;
  var price = document.getElementById('prodPrice').valueAsNumber;
  var qty = document.getElementById('prodQty').valueAsNumber;

  if (title === '') {
    toast.error("Enter product title, please");
    return;
  }

  if (isNaN(price)) {
    toast.error("Enter product price, please");
    return;
  } else {
    if (price <= 0) {
      toast.error("Invalid price");
      return;
    }
  }

  if (isNaN(qty)) {
    toast.error("Enter product quantity, please");
    return;
  } else {
    if (qty <= 0) {
      toast.error("Invalid quantity");
      return;
    }
  }

  toast.success(addToCart(title, price, qty) === 'added' ? 'Product added successfully' : 'Product updated successfully');
  document.getElementById('prodTitle').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodQty').valueAsNumber = 1;
  showProductList();
}

function showProductList() {
  var cardTotal = CART.reduce(function (acc, el) {
    return acc + el.price * el.qty;
  }, 0);
  console.log(cardTotal);
  var list = '';
  CART.forEach(function (prod, index) {
    list += "<tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(prod.title, "</td>\n        <td>").concat(prod.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>', "\n        </td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat(prod.qty, "</td>\n        <td>").concat((prod.price * prod.qty).toFixed(2), "</td>\n        <td class=\"text-end\">\n            ").concat(!prod.isBuy ? "<button type=\"button\" class=\"btn btn-success\" onclick=\"buyProduct(".concat(index, ")\">Buy</button>") : "", "\n            ").concat(!prod.isBuy ? "<button type=\"button\" class=\"btn btn-danger\" onclick=\"deleteProduct(".concat(index, ")\">Delete</button>") : "", " \n        </td>\n        </tr>");
  });
  document.getElementById('product_list').innerHTML = list;
  document.getElementById('cardTotal').innerText = cardTotal.toFixed(2);
}

function buyProduct(index) {
  CART[index].isBuy = true;
  showProductList();
}

function deleteProduct(index) {
  if (confirm("Do you want to delete ".concat(CART[index].title, "?"))) {
    CART.splice(index, 1);
    showProductList();
  }
}

showProductList();
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = arr.reduceRight(function (acc, el) {
  console.log(acc, el);
  return acc + el;
}, 0);
console.log('sum = ' + sum);