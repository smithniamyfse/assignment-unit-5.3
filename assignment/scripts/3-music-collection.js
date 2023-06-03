console.log('***** Music Collection *****')

// TODO - create variable collection assign empty array
let collection = [];

// TODO - add function addToCollection with 3 parameters
function addToCollection(title, artist, yearPublished) {
    console.log('in addToCollection:', title, artist, year);
    // TODO - create new object using 3 parameters as properties
    const album = {};
    album.title = '';
    album.artist = '';
    album.yearPublished = undefined;
    // TODO - add new object to end of collection array
    collection.push(album);
    // TODO - return new object
    return album;
} // end variable addToCollection

