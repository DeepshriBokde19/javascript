function sortPeople(names, heights) {
    return names.map((name, idx) => [name, heights[idx]])
                .sort((a, b) => b[1] - a[1])
                .map(([name, _]) => name);
}


const names = ["Mary", "John", "Emma"];
const heights = [160, 180, 165];
console.log(sortPeople(names, heights));  
