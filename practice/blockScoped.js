function addClick(items) {
    /**
     * If you do not scope your i variable here correctly the loop will not work
     * as expected. This will always produce the number of items you have in th
     * list. So the three logs below will just print 3 every time. 
     * 
     * However if you change it from a `var` to a lexically scoped `let` it will
     * correctly count the clicks up from 0 to 2. 
     */
    for (let i = 0; i < items.length; i++) {
        items[i].onClick = function () { return i; };
    }
    return items;
}
const exampleLet = [{}, {}, {}];
const clickSetLetScoped = addClick(exampleLet);
console.log("Add click let scoped %d.", clickSetLetScoped[0].onClick());
console.log("Add click let scoped %d.", clickSetLetScoped[1].onClick());
console.log("Add click let scoped %d.", clickSetLetScoped[2].onClick());
/**
 * Here we are using a function scoped variable which makes the function work as expected. 
 *  
 */
function addClickFunctionScoped(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = (function (i) {
            return function () {
                return i;
            };
        }(i));
    }
    return items;
}
const exampleFS = [{}, {}];
const clickSetFS = addClickFunctionScoped(exampleFS);
console.log("Add click function scoped %d", clickSetFS[0].onClick());
console.log("Add click function scoped %d", clickSetFS[1].onClick());