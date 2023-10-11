
/*
  Problem: Package Dropbox

  A Location has N lockers of varying dimensions to store packages
  Both Packages and Lockers can be of varying sizes

  Implement code and objects to

  * Match a package to a locker in an efficient manner
  * Retrieve a package from a locker via an ID

*/

/**
 * Solution Below outlines an OOP approach to solving the problem.
 */
enum Size {
    Small,
    Medium,
    Large
}

class DropOffLocation {

    id: string;
    allLockersFull: boolean
    openLockers: Map<Size, Locker[]>
    fullLockers: Map<string, Locker>;

    constructor (id: string, lockers: Map<Size, Locker[]>) {
        this.id = id;
        this.allLockersFull = false;
        this.openLockers = lockers; 
        this.fullLockers = new Map<string, Locker>();
    }
    //Ideally O(1)
    public placeParcel(parcel: Parcel) {
        //Attempt to match parcel to same size locker
        const locker = this.openLockers.get(parcel.size)?.shift();
        if (locker) {
            return this.assignPackageToLocker(parcel, locker);
        }
        //Iterate through the sizes for every size that is greater than
        //the package size attempt to place the package.
        Object.keys(Size).forEach((key, index) => {
            if(Size[key] > parcel.size) {
                const largerLocker = this.openLockers.get(Size[key])?.shift();
                if (largerLocker) {
                    return this.assignPackageToLocker(parcel, largerLocker);
                }
            }
        });
        //Throw error if no empty lockers available
        return null;
    }
    //Ideally O(1)
    public retrieveParcel(parcelId: string): Parcel {
        //Will return a "default object if the parcel is not in the locker."
        return  this.fullLockers.get(parcelId)?.parcel ?? new Parcel("default", Size.Small);
    }

    private assignPackageToLocker(parcel: Parcel, locker: Locker) {
        parcel.lockerId = locker.id;
        parcel.locationId = locker.locationId;
        locker.parcel = parcel;
        this.fullLockers.set(locker.locationId, locker);
    }
}

class Locker {
    id: string;
    locationId: string;
    size: Size;
    parcel?: Parcel;

    constructor (id: string, size: Size, locationId: string) {
        this.id = id;
        this.size = size;
        this.locationId = locationId;
    }
    
}

class Parcel {
    id: string;
    size: Size;
    locationId?: string;
    lockerId?: string;

    constructor(id: string, size:Size) {
        this.id = id;
        this.size = size;
    }

}

class Customer {
    id: string;
    //List of Parcels, each parcel has a location on it
    parcels: Parcel[];
    constructor(id: string) {
        this.id = id;
        this.parcels = [];
    }
}

class ParcelDropOffManager {
    locations: Map<string, DropOffLocation>; 

    constructor(locations: Map<string, DropOffLocation>) {
        this.locations = locations;
    }

    public addParcel(locationId: string, parcel: Parcel) {
        this.locations.get(locationId)?.placeParcel(parcel);
    }

    public retrievePackage(locationId: string, parcelId: string) {
        return this.locations.get(locationId)?.retrieveParcel(parcelId);
    }

}

const myLocationId = "123";

const locker1 = new Locker("a123", Size.Small, myLocationId);
const locker2 = new Locker("a124", Size.Small, myLocationId);
const locker3 = new Locker("a125", Size.Medium, myLocationId);
const locker4 = new Locker("a126", Size.Medium, myLocationId);
const locker5 = new Locker("a127", Size.Large, myLocationId);
const locker6 = new Locker("a128", Size.Large, myLocationId);

const smallLockers = [locker1, locker2];
const mediumLockers = [locker3, locker4];
const largeLockers = [locker5, locker6];

const myLocation = new DropOffLocation(myLocationId, new Map([
        [Size.Small, smallLockers],
        [Size.Medium, mediumLockers],
        [Size.Large, largeLockers] 
    ]));

const manager = new ParcelDropOffManager(new Map([["Fargo", myLocation]]));

const myPackage = new Parcel("a123", Size.Small);
const myPackage2 = new Parcel("a1234", Size.Small);
const myPackage3 = new Parcel("a1234", Size.Small);
const myPackage4 = new Parcel("a1234", Size.Small);
const myPackage5 = new Parcel("a1234", Size.Small);
const myPackage6 = new Parcel("a1234", Size.Small);
const myPackage7 = new Parcel("a1234", Size.Small);
const myPackage8 = new Parcel("a1234", Size.Small);
console.log("Adding Package to locker...")
manager.addParcel("Fargo", myPackage); 
console.log("Retrieving Package from locker... " + manager.retrievePackage("Fargo", "a123"));

