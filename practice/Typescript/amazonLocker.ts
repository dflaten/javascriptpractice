
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
    allLockersFull: boolean;
    openLockers: Map<Size, Locker[]>;
    fullLockers: Map<string, Locker>;

    constructor (id: string, lockers: Map<Size, Locker[]>) {
        this.id = id;
        this.allLockersFull = false;
        this.openLockers = lockers; 
        this.fullLockers = new Map<string, Locker>();
    }
    /**
     * Places a parcel at the DropOffLocation if a spot that 
     * will fit the package is available.  
     * @param parcel 
     * @returns true if able to place package, false otherwise. 
     */
    public placeParcel(parcel: Parcel): boolean {
        // Attempt to match parcel to same size locker
        let assigned = this.assignPackageToLocker(parcel, parcel.size);

        // If not assigned, try larger lockers
        if (!assigned) {
            for (let size = parcel.size + 1; size <= Size.Large; size++) {
                assigned = this.assignPackageToLocker(parcel, size);
                if (assigned) return true;
            }
        } else {
            return true;
        }
        return false;
    }
    /**
     * Retrieves parcel for the given parcel id. Returns null if 
     * package was not available.
     * @param parcelId 
     * @returns Parcel 
     */
    public retrieveParcel(parcelId: string): Parcel | null{
        //Will return a "default object if the parcel is not in the locker."
        return  this.fullLockers.get(parcelId)?.parcel ?? null;
    }

    private assignPackageToLocker(parcel: Parcel, size: Size) {
        const locker = this.openLockers.get(size)?.shift();
        if (locker) {
            parcel.lockerId = locker.id;
            parcel.locationId = this.id;
            locker.parcel = parcel;
            this.fullLockers.set(parcel.id, locker);
            return true;
        }
        return false;
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
console.log("Retrieving Package from locker... " + JSON.stringify(manager.retrievePackage("Fargo", "a123")));

