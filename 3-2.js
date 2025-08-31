const prompt = require("prompt-sync")(); 
let price = parseFloat(prompt("กรุณากรอกราคาสินค้า (บาท): "));
let discountPercent = parseFloat(prompt("กรุณากรอกเปอร์เซ็นต์ส่วนลด (%): "));
let discountedPrice = price - (price * discountPercent / 100);
if (discountedPrice <= 0) {
  discountedPrice = 0;
}
if (discountedPrice > 0 && discountedPrice <= 500) {
  discountedPrice += 50; 
}
if (discountedPrice > 500) {
  discountedPrice -= discountedPrice * 0.10; 
}
console.log("ราคาสุทธิที่ต้องจ่าย:", discountedPrice.toFixed(2), "บาท");
