
// Find all the odd numbers from 61 to 100.

// let num = 61;
// const oddNum = [];
// while (num <= 100) {
//     if (num % 2 !== 0) {
//         oddNum.push(num);
//     }
//     num++;
// }
// console.log("Odd number: ", oddNum);




//Display sum of all the odd numbers from 81 to 131.

let num1 = 81;
let sum = 0;
while (num1 <= 131) {
    if (num1 % 2 !== 0) {
        sum = sum + num1;
    }
    num1++;
}
console.log(sum);