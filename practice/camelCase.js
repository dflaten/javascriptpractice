/**
 * Converts as snake case string to camel case, keeping any leading or
 * trailing _s.
 * Example Input:  `__this_snake` 
 * Example Output: `__thisSnake`
 * */

function snakeToCamelCase(snakeCaseWord) {
    const words = snakeCaseWord.split('_');
    const camelCaseWords = [];

    let getToFirstWordYet = false;
    words.forEach((word) => {
        if (word.length === 0) {
            // Preserve underscores remaining after split
            camelCaseWords.push('_');
        }  else {
            // Convert to camel case
            if (getToFirstWordYet) {
                camelCaseWords.push(word.charAt(0).toUpperCase() + word.slice(1));
            } else {
                camelCaseWords.push(word.charAt(0).toLowerCase() + word.slice(1));
                getToFirstWordYet = true;
            }
        }
    });

    return camelCaseWords.join('');
}

/**
 * Checks a String for any snake case words and then converts those words to 
 * camel case. 
*/

function checkForAndConvertSnakeToCamelCase(inputString) {
    const words = inputString.split(' ');
    const newWords = [];
    words.forEach((word) => {
        console.log(word);
        if (isSnakeCase(word)) {
            const camelCase = snakeToCamelCase(word);
            newWords.push(camelCase);
        } else {
            newWords.push(word);
        }
    });
    return newWords.join(' ');

}

function isSnakeCase(str) {
      // Remove leading and trailing underscores
  const trimmedStr = str.replace(/^_+|_+$/g, '');
    // Split the string into parts using underscores as the delimiter
    const parts = trimmedStr.split('_');
  
    // Check if each part consists of lowercase letters and/or numbers
    for (const part of parts) {
      if (!/^[a-z0-9]+$/.test(part)) {
        return false;
      }
    }
  
    return true;
}


const snakeCaseExample1 = "___this_is_snake__";
const camelCaseExample1Result  = snakeToCamelCase(snakeCaseExample1);
console.log("Input: " + snakeCaseExample1);
console.log("Output: " + camelCaseExample1Result + " END");

const snakeCaseExample2 = "this_snake_snake";
const camelCaseExample2Result  = snakeToCamelCase(snakeCaseExample2);
console.log("Input: " + snakeCaseExample2);
console.log("Output: " + camelCaseExample2Result + " END");

const snakeCaseExample3 = "_that_snake_snake_";
const camelCaseExample3Result  = snakeToCamelCase(snakeCaseExample3);
console.log("Input: " + snakeCaseExample3);
console.log("Output: " + camelCaseExample3Result + " END");

const stringWithSnakeCase = "A string with snake_case and some __snake_too_case and some snake_tree_case_case"
console.log("Input: " + stringWithSnakeCase);
console.log("Output: " + checkForAndConvertSnakeToCamelCase(stringWithSnakeCase));