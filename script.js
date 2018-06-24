// Dummy database
const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecat.com'
];

// Dummy Google search function
const googleSearch = (query, db) => {
    const matches = db.filter(website => {
        return website.includes(query);
    });

    // If there are +3 matches return the top 3,
    // else return all.
    return matches.length > 3 ? matches.slice(0, 3)
        : matches;
}

console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;