"use strict";
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
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
class DropOffLocation {
    constructor(id, lockers) {
        this.id = id;
        this.allLockersFull = false;
        this.openLockers = lockers;
        this.fullLockers = new Map();
    }
    //Ideally O(1)
    placeParcel(parcel) {
        // Attempt to match parcel to same size locker
        let assigned = this.assignPackageToLocker(parcel, parcel.size);
        // If not assigned, try larger lockers
        if (!assigned) {
            for (let size = parcel.size + 1; size <= Size.Large; size++) {
                assigned = this.assignPackageToLocker(parcel, size);
                if (assigned)
                    return true;
            }
        }
        else {
            return true;
        }
        // Throw error if no empty lockers available
        return false;
    }
    //Ideally O(1)
    retrieveParcel(parcelId) {
        var _a, _b;
        //Will return a "default object if the parcel is not in the locker."
        return (_b = (_a = this.fullLockers.get(parcelId)) === null || _a === void 0 ? void 0 : _a.parcel) !== null && _b !== void 0 ? _b : new Parcel("default", Size.Small);
    }
    assignPackageToLocker(parcel, size) {
        var _a;
        const locker = (_a = this.openLockers.get(size)) === null || _a === void 0 ? void 0 : _a.shift();
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
    constructor(id, size, locationId) {
        this.id = id;
        this.size = size;
        this.locationId = locationId;
    }
}
class Parcel {
    constructor(id, size) {
        this.id = id;
        this.size = size;
    }
}
class Customer {
    constructor(id) {
        this.id = id;
        this.parcels = [];
    }
}
class ParcelDropOffManager {
    constructor(locations) {
        this.locations = locations;
    }
    addParcel(locationId, parcel) {
        var _a;
        (_a = this.locations.get(locationId)) === null || _a === void 0 ? void 0 : _a.placeParcel(parcel);
    }
    retrievePackage(locationId, parcelId) {
        var _a;
        return (_a = this.locations.get(locationId)) === null || _a === void 0 ? void 0 : _a.retrieveParcel(parcelId);
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
console.log("Adding Package to locker...");
manager.addParcel("Fargo", myPackage);
console.log("Retrieving Package from locker... " + manager.retrievePackage("Fargo", "a123"));
