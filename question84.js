function printUniqueElements(arr) {
    const uniqueElements = [...new Set(arr)];
    console.log("Unique elements:", uniqueElements);
}


const arr = [1, 2, 3, 2, 4, 3, 5];
printUniqueElements(arr);
