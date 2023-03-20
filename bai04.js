const express = require('express')
const app = express()
const port = 3000

//Sắp xếp mảng 2 chiều tăng dần
let arr = [[3, 2, 1], [7, 9, 8], [4, 6, 5]]

function tangDan(arr1) {
    let resultArr = [];
    let arrN = 0;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            if(arrN < arr1[i][j]) {
                resultArr.push(arr1[i][j])
            }
        }
    }
    
    resultArr.sort((a, b) => a -b)
    return resultArr
}

console.log(tangDan(arr));

app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`)
    })