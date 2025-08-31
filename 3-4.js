const products = [
  { price: 100, discount: 10 },
  { price: 200, discount: 5 },
  { price: 50, discount: 0 },
  { price: 500, discount: 20 },
  { price: 300, discount: 15 }
];
function calculateTotal() {
  let total = 0;
  products.forEach(product => {
    let discountedPrice = product.price - (product.price * product.discount / 100);
    total += discountedPrice;
  });
  console.log("Total price after discount:", `$${total.toFixed(2)}`);
}
calculateTotal();
