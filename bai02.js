const express = require('express')
const app = express()
const port = 3000

// Tính tổng số chẵn từ 1 đến 20
let sum = 0;

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        sum += i;
    }
}

console.log('Tổng số chằn từ 1 đến 20 là ' + sum);

// Tính giai thừa của một số nguyên dương n
function giai_thua(x){
    if(x === 0){
        return 1
    } else {
        return x = x * giai_thua(x - 1)
    }
}

console.log('Kết quả của giai thừa là '+ giai_thua(4))


// Tính tổng các số nguyên tố từ 1 đến 100
let number = 0;

for(let x = 1; x <= 100; x++){ 
    number += x;
}

console.log('Tổng từ 1 đến 100 là '+ number)

app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`)
})