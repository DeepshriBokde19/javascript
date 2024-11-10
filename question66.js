function countSubarraysWithSum(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) count++;
        }
    }
    return count;
}

let arr = [1, 2, 3, 7, 5];
console.log(countSubarraysWithSum(arr, 12));  // Expected output: 2
