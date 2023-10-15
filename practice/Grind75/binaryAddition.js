/**
 * Given two strings consisting of 0s and 1s (binary numbers)
 * add both numbers together and return the result.
 * @param {string} a
 * @param {string} b
 * @return {string} the result of a + b
 */
var addBinary = function(a, b) {
    //start at right on each string
    var aChar = a.length;
    var bChar = b.length;
    var carry = 0;
    var result = "";
    while (aChar >= 0 && bChar >= 0) {
        var newdigit = parseInt(a[aChar]) + parseInt(b[bChar]) + carry;
        carry = 0;
        //Possible values are 0, 1, 2, 3
        //If it is 0 or 1 just add one to string
        if (newdigit == 1 || newdigit == 0) {
           result = newdigit.toString() + result;
        }
        if (newdigit == 2) {
            result = "0" + result;
            carry = 1;
        }
        if (newdigit == 3) {
            result = "1" + result;
            carry = 1;
        }
        aChar--;
        bChar--;
    }
    if (aChar < 0 && bChar >= 0) {
        if (carry == 0) {
           result = b.substring(0, bChar + 1) + result;
        } else {
            //Could create a sub function to call here and below instead of re-creating code.
            while (bChar >= 0) {
                var newdigit = parseInt(b[bChar]) + carry;
                carry = 0;
                if(newdigit == 1 || newdigit == 0) {
                    result = newdigit.toString() + result;
                } else {
                    result = "0" + result;
                    carry = 1;
                }
                bChar--;
            }
        }
    }
    if (bChar < 0 && aChar >= 0) {
        if (carry == 0) {
            result = a.substring(0, aChar + 1) + result;
        } else {
            while (aChar >= 0) {
                var newdigit = parseInt(a[aChar]) + carry;
                carry = 0;
                if(newdigit == 1 || newdigit == 0) {
                    result = newdigit.toString() + result;
                } else {
                    result = "0" + result;
                    carry = 1;
                }
                aChar--;
            }
        }
    }
    if (carry == 1) {
        result = "1" + result;
    }
    return result;
 };

 console.log("Result of 11 + 1: " + addBinary("11", "1"));