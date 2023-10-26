/**
 * This function implements retries by wrapping a function provided by input. This could
 * be used to automatically retry requests due to networking issues.
 */

async function retry(inputFunction, region, retryNumber) {
    let retryAttempts = 3;
    if (retryNumber != undefined) {
        retryAttempts = retryNumber;
    }     
    let attempts = 0;
    let result;
    while (attempts < retryAttempts) {
        try {
            attempts++;
            result = inputFunction(region);
            return result;
        } catch (error) {
            console.log("Error occurred during attempt, " + attempts + 
            " error message: " + error);
        } 
        // If we wanted to make this interval configurable we could add 
        // another parameter for a constant value to add or subtract from 
        // the exponentially increasing back off. Ideally we should also 
        // add a randomized element to this back off to avoid all
        // retries happening arround the same time. This is sometimes
        // called a "jitter"
        let waitInSeconds = Math.pow(2, attempts - 1) * 100;
        if(waitInSeconds > 1.5) {
            waitInSeconds = 1.5;
        }
        await new Promise(resolve => setTimeout(resolve, waitInSeconds));
    }
    return result;
}

async function fetchData(location) {
    //Could throw an error or return valid result
    if (location == 'NA') {
        return 'NAResult';
        
    } else if (location == 'EU') {
        return 'EUResult'
    } else {
        return 'DefaultResult'
    }
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