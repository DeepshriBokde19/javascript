function buildArray(nums) {
    return nums.map(num => nums[num]);
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));  // Expected output: [0, 1, 2, 4, 5, 3]
