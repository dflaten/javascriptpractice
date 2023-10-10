
/*
  Problem: Package Dropbox

  A Location has N lockers of varying dimensions to store packages
  Both Packages and Lockers can be of varying sizes

  Implement code and objects to

  * Match a package to a locker in an efficient manner
  * Retrieve a package from a locker via an ID

*/

//Below I am using a mix of functional and OOP techniques to solve
//the problem which is making it quite messy and ended up being 
//complicated as soon as I started thinking about keeping the 
//list of available and full lockers up to date. 

//Next I plan on updating this code to use OOP techniques purely,
//then will try a functional approach. 
enum Size {
    Small,
    Medium,
    Large
}

interface LockerLocation {
    id: string;
    allLockersFull: boolean
    openLockers: {[size in Size]: Locker[]};
    fullLockers: {[lockerId: string]: Locker};
}

interface Locker {
    id: string;
    size: Size;
    parcel: Parcel;
}

interface Parcel {
    id: string;
    size: Size;
    locationId: string;
    lockerId: string;
}

interface Customer {
    id: string;
    //List of Parcels, each parcel has a location on it
    parcels: Parcel[];
}

const locker1 = {
    id: "a123",
    size: Size.Small,
    parcel: undefined
}

const locker2 = {
    id: "a124",
    size: Size.Small,
    parcel: undefined
}

const locker3 = {
    id: "a125",
    size: Size.Small,
    parcel: undefined
}

const locker4 = {
    id: "a126",
    size: Size.Medium,
    parcel: undefined
}

const locker5 = {
    id: "a127",
    size: Size.Medium,
    parcel: undefined
}

const locker6 = {
    id: "a128",
    size: Size.Large,
    parcel: undefined
}

const locker7 = {
    id: "a129",
    size: Size.Large,
    parcel: undefined
}

const myLocation = {
    id: 123,
    allLockersFull: false,
    openLockers : {
        [Size.Small]: [locker1, locker2],
        [Size.Medium]: [locker3, locker4],
        [Size.Large]: [locker5, locker6]
    }
}

function placePackage(parcel: Parcel, location: LockerLocation) {
    if (location.allLockersFull) {
        const fullMessage = "All lockers full, please try another location."
        console.log(fullMessage);
        return fullMessage;
    }
    //use the size of the package to match the parcel with an open locker, 
    //if the package is small and no smalls are available try the medium,
    //if no mediums available try the large, if no large display error message.
    location.openLockers(parcel.size);

}