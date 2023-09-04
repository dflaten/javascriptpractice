// Here we are using a rest operator by using... plus the 
// name of the variable we want to assign the parameters to. 
// In this case items.
function validateCharacterCount(max, ...items) {
    return items.every(item => item.length < max);
}

console.log('Validating (wvlquie) word has less than 10 characters: '+ validateCharacterCount(10, 'wvoquie'));
console.log('Validating (wviquie) word in array has less than 10 characters: '+ validateCharacterCount(10, ...['wvoquie']));
const tags = ['Hobbs', 'Eagles', 'Mississippi'];
console.log('Validating (Hobbs), (Eagles), and (Mississippi) have less than 10 characters: ' + validateCharacterCount(10, ...tags));
console.log('Validating (Hobbs) and (Eagles) have less than 10 characters: ' + validateCharacterCount(10, 'Hobbs', 'Eagles'));
console.log('---------------')
// You can also use the shift operator to recreate common 
// array methods and remove the side effects. For example
// Shift which returns the first value of an array and removes
// the item from the first array. 

const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log('First item: ' + first);
console.log('Remaining items: ' + remaining);

// Note though that the spread method must always be the 
// last. So you can't create a pop method which would
// take the last item off a list in the same way. 

//const newQueue = ['stop', 'collaborate', 'listen'];
//const [...beginning, last] = queue;
// SyntaxError: Rest element must be last element
