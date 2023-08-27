//This will show one mach.
console.log('Dave'.match(/Dav/));
//This will return null (which is also a falsy value)
console.log('Michelle'.match(/Dav/));

//Lets filter out a list of names using this functionality
const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M',
];

console.log(team.filter((name) => name.match(/Dav/)));
console.log('-----------------')

const instructors = [
    {
        name: 'Jim',
        libraries: ['MERIT'],
    },
    {
        name: 'Sarah',
        libraries: ['Memorial', 'SLIS'],
    },
    {
        name: 'Eliot',
        libraries: ['College Library'],
    },
];

const librarian = instructors.find(instructor => {
    return instructor.libraries.includes('Memorial');
});
//Using currying to reduce the number of arguments down to one
const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
}
console.log('-----------------')
console.log(librarian);
console.log(instructors.find(findByLibrary('College Library')));