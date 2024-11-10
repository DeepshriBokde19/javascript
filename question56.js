function secondGreatest(arr) {
    let uniqueArr = Array.from(new Set(arr)).sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

let arr = [2, 96, 69, 77, 145, 20];
console.log(secondGreatest(arr));
