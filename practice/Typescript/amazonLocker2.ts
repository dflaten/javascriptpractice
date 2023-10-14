
/*
  Problem: Package Dropbox

  A Location has N lockers of varying dimensions to store packages
  Both Packages and Lockers can be of varying sizes

  Implement code and objects to

  * Match a package to a locker in an efficient manner
  * Retrieve a package from a locker via an ID

*/

/**
 * This is my second Attempt at this problem, continueing to executing it 
 * for practice writing code in Typescript.
 * 
 * Solution Below outlines an OOP approach to solving the problem.
 */

enum Size2 {
    SMALL,
    MEDIUM,
    LARGE
}

class Parcel2 {
    packageId: string;
    locationId: string;
    size: Size2;    

    constructor(packageId: string, size: Size2) {
        this.packageId = packageId;
        this.locationId = '';
        this.size = size;
    }
}

class Locker2 {
    lockerId: string;
    locationId: string;
    size: Size2;
    parcel?: Parcel2;

    constructor(lockerId: string, locationId: string, size: Size2) {
        this.lockerId = lockerId;
        this.locationId = locationId;
        this.size = size;
        this.parcel = undefined;
    }
}

class Customer2 {
    customerId: string;
    parcels: Parcel2[];
    
    constructor(customerId: string) {
        this.customerId = customerId;
        this.parcels = [];
    }
}

class DropOffLocation2 {
    locationId: string;
    fullLockers: Map<string, Locker2>;
    emptyLockers: Map<Size2, Locker2[]>;

    constructor(locationId: string, emptyLockers: Map<Size2, Locker2[]>) {
       this.locationId = locationId;
       this.emptyLockers = emptyLockers;
       this.fullLockers = new Map<string, Locker2>();
    }

    public placeParcel(parcel: Parcel2) : boolean {
        for(let size = parcel.size; size <= Size2.LARGE; size++ ) {
            const possibleLocker = this.emptyLockers.get(size)?.shift();
            if (possibleLocker) {
                parcel.locationId = this.locationId;
                possibleLocker.parcel = parcel;
                this.fullLockers.set(parcel.packageId, possibleLocker);
                return true;
            }
        }
        return false;
    }

    public retrieveParcel(parcelId: string): Parcel2 | null{
        //Take the parcel out of the full lockers
        const locker = this.fullLockers.get(parcelId);
        if (locker == undefined) {
            console.log('Error! Locker not found with this parcelId.')
            return null;
        }
        const parcel = locker?.parcel;
        if(parcel == undefined) {
           return null; 
        }
        locker.parcel = undefined;
        this.fullLockers.delete(parcelId);
        //Add empty locker back to the array.
        this.emptyLockers.get(parcel.size)?.push(locker);
        //Finally return the parcel
        return parcel; 
    }
}
const locationId = "Fargo";

const locker2a = new Locker2("a123", locationId, Size2.SMALL);
const locker2b = new Locker2("a124", locationId, Size2.SMALL);
const locker2c = new Locker2("a125", locationId, Size2.MEDIUM);
const locker2d = new Locker2("a126", locationId, Size2.MEDIUM);
const locker2e = new Locker2("a127", locationId, Size2.LARGE);

const fargoLockerMap = new Map();
fargoLockerMap.set(Size2.SMALL, [locker2a, locker2b]);
fargoLockerMap.set(Size2.MEDIUM, [locker2c, locker2d]);
fargoLockerMap.set(Size2.LARGE, [locker2c, locker2e]);

const dropOffLocation = new DropOffLocation2(locationId, fargoLockerMap);

const myCustomerParcel = new Parcel2("pID123", Size2.LARGE);

console.log('Placing parcel: ' + JSON.stringify(myCustomerParcel));
console.log('Placing was successs? ' + dropOffLocation.placeParcel(myCustomerParcel));
console.log('Retrieve parcel: ' + JSON.stringify(dropOffLocation.retrieveParcel(myCustomerParcel.packageId)));


