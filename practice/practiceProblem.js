function getLowestPrice(item) {
	// Since we are still using the same name for each this code is still a bit hard to read.
    let count = item.inventory;
    console.log("Intializing count %d", count);
    let price = item.price;
    if (item.salePrice) {
		// The "count" here is a local variable only accessible inside the if statement started on
        // the line before.
        let count = item.saleInventory;
        console.log("Accessing second count %d", count);
        if (count > 0) {
            price = item.salePrice;
        }
    }
    if (count) {
        return price;
    }
    return 0;
}

const item = {
  inventory: 3,
  price: 3,
  salePrice: 2,
  saleInventory: 0,
};
console.log(getLowestPrice(item));