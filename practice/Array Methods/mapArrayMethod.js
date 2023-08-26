const band = [
    {
        name: 'corbett',
        instrument: 'guitar',
    },
    {
        name: 'evan',
        instrument: 'guitar',
    },
    {
        name: 'sean',
        instrument: 'bass',
    },
    {
        name: 'brett',
        instrument: 'drums',
    },
];

const instruments = [];
//Instead of using a for loop lets use a map function
for (let i = 0; i < band.length; i++) {
    const instrument = band[i].instrument;
    instruments.push(instrument);
}
console.log(instruments);
//map array method
const sameInstruments = band.map((member) => member.instrument);
console.log(sameInstruments);
