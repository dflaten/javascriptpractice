
console.log("Using the spread operator...................")
const cart = ['20,000 Leagues under the Sea', 'Alice in Wonderland'];
// The ... operator just converts an array to a list. The list has a `toString()` method on it
// for log to use.
console.log("Array: "+ cart);
console.log("List: ");
console.log(...cart);

console.log("Removing items from array via splice...................")

function removeItemSplice(items, removable) {
    const index = items.indexOf(removable);
    // This modifies the original Array
    [...items.splice(index, 1)];
    return items;
}


const books = ['practical vim', 'moby dick', 'the dark tower'];
const recent = removeItemSplice(books, 'moby dick');
console.log("Recent books: " + recent);
const novels = removeItemSplice(books, 'practical vim');
// Novels was modified byt he Splice method so 'moby dick` is gone
console.log("Novels: " + novels);

console.log("Removing items using spread operator ...................")

function removeItemSlice(items, removable) {
    const index = items.indexOf(removable);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const books2 = ['practical vim', 'moby dick', 'the dark tower'];
const recent2 = removeItemSlice(books2, 'moby dick');
console.log("Recent books: " + recent2);
const novels2 = removeItemSlice(books2, 'practical vim');
console.log("Novels: " + novels2);

console.log("Formating a string without spread operator...................")
const bookAuthorPrice = ['The Dark Tower', 'Steven King', 24.99];

function formatBook(title, author, price) {
    return `${title} by ${author} ${price}`;
}

console.log(formatBook(bookAuthorPrice[0], bookAuthorPrice[1], bookAuthorPrice[2]));

console.log("Formating a string with spread operator...................")
console.log(formatBook(...bookAuthorPrice));
