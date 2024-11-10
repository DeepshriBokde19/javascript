function reverseInPlace(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseInPlace(arr));
