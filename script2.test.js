const fetch = require('node-fetch');
const SWAPI = require('./script2');

describe('getPeople', () => {
    it('calls SWAPI to get people (async)', async () => {
        expect.assertions(1);
        try {
            const data = await SWAPI.getPeople(fetch);
            return expect(data.count).toEqual(87);
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    });

    it('calls SWAPI to get people (promise)', () => {
        expect.assertions(2);
        return SWAPI.getPeoplePromise(fetch).then(data => {
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
        })
    });

    it('getPeople returns count/result', async done => {
        expect.assertions(2);
        try {
            const data = await SWAPI.getPeople(fetch);
            expect(data.count).toBeTruthy();
            expect(data.results).toBeTruthy();
            done();
        } catch (e) {
            console.log(`Error; ${e}`);
        }
    });

    it('getPeople returns count/result (w/ mockFetch)', async done => {

        const mockFetch = jest.fn()
            .mockReturnValue(Promise.resolve(({
                json: () => Promise.resolve({
                    count: 87,
                    results: [0, 1, 2, 3, 4, 5]
                })
            })));

        expect.assertions(4);

        try {
            const data = await SWAPI.getPeople(mockFetch);
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
            expect(data.count).toBeTruthy();
            expect(data.results).toBeTruthy();
            done();
        } catch (e) {
            console.log(`Error; ${e}`);
        }
    });
});