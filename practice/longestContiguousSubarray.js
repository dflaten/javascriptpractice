/**
Problem:
What is the length of the longest contiguous subarray containing non-negative 
prime numbers that are even and happy numbers?

Solution Outline:
First there is a contradiction in the problem. You can not have a consecutive 
sequence of prime number. as the only even prime number is 2. If we take out the 
even part of the problem the following algorithm will work. 

1. Iterate through the list. 
2. Determine if the current number is prime, even, and a happy number. If it is
   not move to the next number.
3. If it is set the `currentLongest` to 1 and then calculate the next highest 
   prime number that a happy number. Compare that value with the 
   next value in the list. If it is equal then currentLongest++ and calculate
   the next value to compare. Do this until you get to the end of the array or 
   the next value is not contiguous. Then update your `longestSubarray` if it
   is less than `currentLongest`. 
*/
// Function to check if a number is prime
function isPrime(num) {
    const squareRootOfNum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (let i = 2; i < squareRootOfNum + 1; i++) {
        if (num % i == 0) { 
            prime = false;
            break;
        }
    }
    return prime;
  }
  
  // Function to check if a number is a happy number
  // A happy number is a number which eventually reaches 1
  // when replaced by the sum of the squares of each digit.
  function isHappyNumber(num) {
    const seen = new Set();
    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = num
        .toString()
        .split('')
        .map((digit) => parseInt(digit) ** 2)
        .reduce((acc, cur) => acc + cur, 0);
    }
    return num === 1;
  }
  
  function findLongestSubarray(arr) {
    let maxLen = 0;
    let currentLen = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i]) && isHappyNumber(arr[i])) {
        //For now we are just making sure the items are prime and happy
        //if by "contiguous" we mean the next prime/happy number we would
        //generate the next prime/happy number and make sure the next item
        //in the list is that value. 
        currentLen++;
        maxLen = Math.max(maxLen, currentLen);
      } else {
        currentLen = 0;
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const numbers = [31, 12, 4, 13, 19, 23, 28, 7, 14, 82];
  const longestSubarrayLength = findLongestSubarray(numbers);
  console.log("Length of the longest subarray:", longestSubarrayLength);
  
  