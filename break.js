for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i >= 6) {
        break;
    }
}
console.log('after break up');

let n = 54;
while (n > 25) {
    console.log(n);
    if (n < 50) {
        break;
    }
    n--;
}