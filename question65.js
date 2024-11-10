function rearrangeNegatives(arr) {
    return arr.sort((a, b) => (a < 0 && b >= 0) ? -1 : 1);
}

let arr = [-1, 3, -5, 6, -7, 8];
console.log(rearrangeNegatives(arr));
