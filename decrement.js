// Incremental
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// Decremental
// for (let i = 20; i >= 11; i--) {
//     console.log(i)

// }


const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}