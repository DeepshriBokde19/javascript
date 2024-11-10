function rotateLeftByOne(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateLeftByOne(arr));
