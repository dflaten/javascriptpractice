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
