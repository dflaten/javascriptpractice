// Here is the normal way of creating a function in javascript
function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
}
console.log(capitalize('joe'));

// You can also create an anonymous function that doesn't have 
// a name like so: 
const assignedCapitalize = function (name) {
    return name[0].toUpperCase() + name.slice(1);
};

console.log(assignedCapitalize('joe'));

// The `=>` symbols mean the same as function in Javascript
// So the below function is the same as the one directly
// above.
const arrowCapitalize = name => {
    return name[0].toUpperCase() + name.slice(1);
};

console.log(arrowCapitalize('joe'));

console.log('------------')

// Using callback functions with arrowFunctions

const greet = (name) => {
    //
    console.log('Where?')
    return `Oh, hi ${name}`;
};

function applyCustomGreeting(name, callback) {
    console.log('What is joe? ' + name)
    console.log('Before the execution of the end of the code.');
    // Callback here is basically the 'greet' function
    // We will call that after the arrowCapitalize has been completed and returned.
    return callback(arrowCapitalize(name));
}
console.log('Starting to apply the custom greating.')
console.log(applyCustomGreeting('joe', greet));