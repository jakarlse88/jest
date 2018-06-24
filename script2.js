const fetch = require('node-fetch');

// Simple function to get 
const getPeople = async fetch => {
    try {
        const people = await fetch('https://swapi.co/api/people');
        const response = await people.json();
        return {
            count: response.count,
            results: response.results
        };
    } catch (e) {
        console.log(`Error: ${e}`);
    }
};

const getPeoplePromise = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            };
        })
        .catch(e => console.log(`Error: ${e}`));
};

module.exports = {
    getPeople,
    getPeoplePromise
};