function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return "NO";
    }
    return "YES";
}

console.log(isSorted([1, 5, 8, 9, 10, 15]));
console.log(isSorted([1, 8, 6, 9, 10, 15]));
