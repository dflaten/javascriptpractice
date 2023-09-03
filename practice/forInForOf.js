const firms = new Map()
    .set(10, 'Ivie Group')
    .set(23, 'Soundscaping Source')
    .set(31, 'Big 6');

function checkConflicts(firms, isAvailable) {
    for (const id in firms) {
        const id = firm;
		const name = firms.get(id);
        if (!isAvailable(id)) {
            return `${name} is not available`;
        }
    }
    return 'All firms are available';
}

const alwaysTrue = id => id;
const soundscapeUnavailable = id => id !== 23;
console.log(checkConflicts(firms,alwaysTrue));
console.log(checkConflicts(firms,soundscapeUnavailable));