const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
];

describe('googleSearch', () => {
    it('is a silly test', () => {
        expect('hello').toBe('hello');
    });

    it('is searching Google', () => {
        expect(googleSearch('test', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    });

    it('works with undef/null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it('returns no more than 3 results', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});
