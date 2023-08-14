// Consider the following program which creates book objects and 
// assigns default values to fields if they don't include them
// in their instantiation.
const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
};

const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};

const anotherBook = {
    title: 'Another book',
    year: 2016,
};

function addBookDefaults(book, defaults) {
    return Object.assign(defaults, book);
}


console.log("Using book: ");
console.log(addBookDefaults(book,defaults));
console.log("\n");
console.log("Using another book: ");

// Our 'author` field on this other book is now the same author
// as the first book instead of the default ''
console.log(addBookDefaults(anotherBook,defaults));

console.log("\n");
console.log("-------------------");
console.log("\n");

// Here is an updated version which fixes the issue above by 
// passing in an empty object to the 'Objects.assign' method.
const defaults2 = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
};
const book2 = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};
const book2a = {
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
};
// By adding an empty object to the parameters we are
// telling the code to return a new object instead of a
// reference to the original `defaults2` object.
const updated2 = Object.assign({}, defaults2, book2);
const updated2a = Object.assign({}, defaults2, book2a);
console.log(`Updated book2 object:`);
console.log(updated2);
console.log("\n");
console.log(`Updated book2a object:`);
console.log(updated2a);
console.log("\n");

console.log(`Original default object:`);
console.log(defaults2); 

console.log("\n");
console.log("-------------------");
console.log("\n");

// We still have a problem though because Objects.assign 
// does a shallow copy of Objects. 
console.log("Shallow Copy Problem");
console.log("\n");
const defaultEmployee = {
    name: {
        first: '',
        last: '',
    },
    years: 0,
};
console.log('Default Employee: ')
console.log(defaultEmployee);
const employee = Object.assign({}, defaultEmployee);
employee.name.first = 'John';
console.log('Employee: ')
console.log(employee);
console.log('Default Employee: ')
console.log(defaultEmployee);
console.log("\n");

//Excluding example showing updating deep copying with Objects.assign because it
// is easily replaced with the spread operator. 

//To do this with the Spread Operator:

const employeeSpread = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    },
};

employee.name.first = 'joe';
console.log("Employee name:");
console.log(employeeSpread.name.first);
console.log("Default employee name:");
console.log(defaultEmployee.name.first);
