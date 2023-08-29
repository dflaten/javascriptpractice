const dogs = [
    {
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
    },
    {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
    },
    {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
    },
];

const colors = dogs.reduce((colors, dog) => {
    if (colors.includes(dog.color)) {
        return colors;
    }
    return [...colors, dog.color];
}, []);

console.log("Here are the colors in our list of dogs:")
console.log(colors);

console.log("Here are the the possible filters in our list of dogs:")

const filters = dogs.reduce((filters, item) => {
	filters.breed.add(item.breed);
	filters.size.add(item.size);
	filters.color.add(item.color);
	return filters;
}, {
	breed: new Set(),
	size: new Set(),
	color: new Set(),
});

console.log(filters);