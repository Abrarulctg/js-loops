// let num = 78;

// const evenNum = [];
// while (num <= 98) {
//     if (num % 2 === 0) {
//         evenNum.push(num);
//     }
//     num++;
// }
// console.log(evenNum)





// Display sum of all the even numbers from 206 to 311.

let num1 = 206;
let sum = 0;
while (num1 <= 311) {
    if (num1 % 2 === 0) {
        sum = sum + num1;
    }
    num1++;
}
console.log(sum);