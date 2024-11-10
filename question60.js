function rotateLeft(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2));
