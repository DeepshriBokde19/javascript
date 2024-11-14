function frequencyOfElements(arr) {
    const frequency = {};
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    console.log("Frequency of elements:", frequency);
}


const arr = [1, 2, 3, 2, 4, 3, 5, 3];
frequencyOfElements(arr);
