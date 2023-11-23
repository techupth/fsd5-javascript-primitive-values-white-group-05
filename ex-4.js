// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);

// จะแสดงผลลัพธ์เป็น Nan เนื่องจาก ตัวแปร numberOfSoldProduct หารด้วยค่า undefined
// ซึ่งจะได้ผลลัพธ์ไม่มีค่าทางคณิตศาสตร์ ดังนั้นจะได้  console.log จะแสดง Nan   (Not a Number). ออกมานั่นเอง
