/**
 * This function implements retries by wrapping a function provided by input. This could
 * be used to automatically retry requests due to networking issues.
 */

async function retry(inputFunction) {
    let attempts = 0;
    let result;
    while (attempts < 3) {
        try {
            attempts++;
            result = inputFunction()
        } catch (error) {
            console.log("Error occurred during attempt, " + attempts + 
            " error message: " + error);
        } 
    }
    return result;
}

async function fetchData() {
    //Could throw an error or return valid result
    resource = 'MyResult';
    return resource;
}

async function main() {
    try {
        const result = await retry(fetchData);
        console.log(result);
    } catch(error) {
        //Thrown after the third attempt
        console.log(error);
    }
}

main().catch((error) => console.log(error));
exports.retry = retry;
exports.fetchData = fetchData;