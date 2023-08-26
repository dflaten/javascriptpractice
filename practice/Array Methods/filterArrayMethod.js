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