const filters = new Map()
    .set('color', 'black')
    .set('breed', 'labrador');
// If we use the spread operator on a map we get a list of pairs
console.log("List of Pairs: ")
console.log(...filters);
console.log("\n")
console.log("Array of Pairs: ")
console.log([...filters]);

// If we want to sort the items in the map by their keys.
function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
    const applied = [];
    // here: [...filters].sort(sortByKey)
    // We are sorting the filters by spreading the list of the filters
    // and passing in a function that sorts by the first element in 
    // each pair, its key. 
    for (const [key, value] of [...filters].sort(sortByKey)) {
        applied.push(`${key}:${value}`);
    }
    return `Your filters are: ${applied.join(', ')}.`;
}

console.log(getSortedAppliedFilters(filters));

function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}

// We can use the map function to refactor the looping
// method and create the new array. 
// This is just like using a Stream/Map function in Java 
function getSortedAppliedFiltersSimplified(filters) {
    const applied = [...filters]
        .sort(sortByKey)
        .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');
    return `Your filters are: ${applied}.`;
}

console.log(getSortedAppliedFiltersSimplified(filters));
console.log("------------------")
let names = new Map()
.set(18, 'Anne')
.set(25, 'Rachel')
.set(35, 'Joe');

console.log("Array of map: ")
console.log([...names])
const answer = [...names] 
                // Filter here is taking a function as input
                // What is telling filter to look at the first
                // element in each array? 
                .filter(([k]) => k < 30) 
console.log("\n")
console.log("Filtered Names: ")
console.log(answer);