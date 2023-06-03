console.log('***** Music Collection *****')

// TODO - create variable collection assign empty array
let collection = [];

// TODO - add function addToCollection with 3 parameters
function addToCollection(title, artist, yearPublished) {
    // TODO - create new object using 3 parameters as properties
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }; // end album
    // TODO - add new object to end of collection array
    collection.push(album);
    // TODO - return new object
    return album;
} // end addToCollection

// TODO - test the addToCollection function with 6 various albums
addToCollection('Apologies to Queen Mary', 'Wolf Parade', 2005);

addToCollection('In Evening Air', 'Future Islands', 2010);

addToCollection('The Immaculate Collection', 'Madonna', 1990);

addToCollection('Astro Lounge', 'Smash Mouth', 1999);

addToCollection('Torches', 'Foster the People', 2011);

addToCollection('Easter', 'Patti Smith', 1978);
