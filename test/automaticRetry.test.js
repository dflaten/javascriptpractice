const {retry, fetchData} = require('../practice/automaticRetry');

const SUCCESSFUL_RESULT = 'Success';
describe('Test retry function', () => {
    const successfulFetchData = jest.fn(() => SUCCESSFUL_RESULT);

    const errorThrowingFethData = jest.fn(() => {
        throw new Error('Error has occured!');
    });

    it('Returns result when fetch data succeeds', async () => {
        const result = await retry(successfulFetchData);
        expect(result).toBe(SUCCESSFUL_RESULT);
    });
});