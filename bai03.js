const express = require('express')
const app = express()
const port = 3000

//Tìm trung bình cộng các phần tử trong mảng
// let arr = [0, 3, 5, 7, 9, 12];

// function average(arr1) {
//     let num = 0;
//     for(let i = 0; i < arr1.length; i++){
//         num += arr1[i];
//     }
//     return num / arr1.length;
// };

// console.log(average(arr));


//Tìm các phần tử duy nhất trong mảng
// let arr2 = [0, 3, 5, 7, 9, 12, 0, 9, 3, 2];

// function timPhanTuDuyNhat(array) {
//     let resultArr = [];
//     for(let i = 0; i < array.length; i++) {
//         if(resultArr.indexOf(array[i]) === -1) {
//             resultArr.push(array[i]);
//         } else {
//             let index = resultArr.indexOf(array[i]);
//             //index là vị trí cần xóa; 1 là số phần tử cần xóa
//             resultArr.splice(index, 1);
//         }
//     }
//     return resultArr;
// }

// console.log(timPhanTuDuyNhat(arr2));


//Tìm các phần tử trùng nhau trong 2 mang
// let arr3 = [1, 3, 4, 5, 6]
// let arr4 = [3, 5, 6, 8, 9]

// function timPhanTuTrung(arr1, arr2) {
//     let resultArr = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.indexOf(arr1[i]) !== -1 && 
//         resultArr.indexOf(arr1[i]) === -1) {
//             resultArr.push(arr1[i])
//         }
//     }
//     return resultArr;
// }

// console.log(timPhanTuTrung(arr3, arr4));


//Tìm số lớn nhất và nhỏ nhất trong mảng số nguyên
let arr1 = [1, 2, 6, 5, 9, 7, 4]

let newArr01 = arr1.sort((a, b) => a - b) // tăng dần
// let newArr02 = arr1.sort((a, b) => b - a) // giảm dần

console.log(newArr01);
// console.log(newArr02);




app.listen(port, () => {
    //   console.log(`Example app listening on port ${port}`)
})