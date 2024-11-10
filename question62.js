function linearSearch(arr, target) {
    return arr.indexOf(target);
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30));  // Expected output: 2
console.log(linearSearch(arr, 60));  // Expected output: -1
