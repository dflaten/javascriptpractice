// Here we have a cart
const cart = [
{
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
},
{
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
},
{
    name: 'Red Mars',
    price: 5.99,
    discount: true,
},
];

const reward = {
name: 'Guide to Science Fiction',
//They have this as true usually...
discount: false,
price: 0,
};
  
// This function mutates the original array to add a 
// free gift if they are buying more than one thing.
function addFreeGiftWithBug(cart) {
    if (cart.length > 2) {
        cart.push(reward);
        return cart;
      }
      return cart;
}
// This function doesn't mutate the original array
function addFreeGift(cart) {
if (cart.length > 2) {
    return [...cart, reward];
}
return cart;
}

function summarizeCartUpdated(cart) {
const cartWithReward = addFreeGift(cart);
// If we use the other function below the summarize function 
// will always add an additional gift to the cart every time 
// it is run.
//const cartWithReward = addFreeGiftWithBug(cart);
const discountable = cart.filter(item => item.discount);
if (discountable.length > 1) {
    return {
    error: 'Can only have one discount',
    };
}
return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
};
}

console.log("Add free gift:");
console.log(addFreeGift(cart));
console.log("\n");
console.log("Summarize cart updated:");
console.log(summarizeCartUpdated(cart));
console.log(summarizeCartUpdated(cart));