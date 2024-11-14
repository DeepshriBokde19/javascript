function numJewelsInStones(jewels, stones) {
    const jewelSet = new Set(jewels);
    return stones.split('').filter(stone => jewelSet.has(stone)).length;
}


const jewels = "aA";
const stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));  // Output: 3
