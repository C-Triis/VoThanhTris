const express = require('express')
const app = express()
const port = 3000

let a = 5; 
let b = 9;
let c = a;

// Hoán đổi giá trị a và b
a = b;
b = c;

console.log("a = ", a);
console.log("b = ", b);

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})

