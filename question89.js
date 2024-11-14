function sumOfUnique(nums) {
    const frequency = {};
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    return Object.entries(frequency)
                 .filter(([_, count]) => count === 1)
                 .reduce((sum, [num, _]) => sum + Number(num), 0);
}


const nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums)); 
