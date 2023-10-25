const {retry, fetchData} = require('../practice/automaticRetry');

const SUCCESSFUL_RESULT = 'Success';
describe('Test retry function', () => {
    const successfulFetchData = jest.fn().mockResolvedValue(SUCCESSFUL_RESULT);

    const errorThrowingFetchData = jest.fn(() => {
        throw new Error('Error has occured!');
    });

    let failCount = 0
    const errorThrowingFetchDataTwiceThenSuccess = jest.fn(() => {
        if (failCount < 2) {
            failCount++;
            throw new Error('Error has occured!');
        }
        return SUCCESSFUL_RESULT;

    });

    it('Returns result when fetch data succeeds', async () => {
        const result = await retry(successfulFetchData);
        expect(result).toBe(SUCCESSFUL_RESULT);
        expect(successfulFetchData).toHaveBeenCalledTimes(1);
    });

    it('Should retry a fialing function three times then throw error.', async () => {
        const result = await retry(errorThrowingFetchData);
        expect(result).toBeUndefined();
        expect(errorThrowingFetchData).toHaveBeenCalledTimes(3);
    });

    it('Should retry a failing function and return a result after retrying twice.', async () => {
        const result = await retry(errorThrowingFetchDataTwiceThenSuccess);
        expect(result).toBe(SUCCESSFUL_RESULT);
        expect(errorThrowingFetchDataTwiceThenSuccess).toHaveBeenCalledTimes(3);
    });
});