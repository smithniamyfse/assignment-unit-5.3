console.log('***** Music Collection *****')

// Create variable collection assign empty array
let collection = [];

// Add function addToCollection with 3 parameters
function addToCollection(title, artist, yearPublished) {
    // Create new object using the object literal syntax and 3 parameters as properties
    const album = {
        title,
        artist,
        yearPublished,
    }; // end album
    // Add object album to end of collection array
        collection.push(album); 
    // Return object album
        return album;
} // end addToCollection

// Test the addToCollection function with 6 various albums and log returned value
console.log(addToCollection('Apologies to Queen Mary', 'Wolf Parade', 2005));
console.log(addToCollection('Apologies to Queen Mary', 'Wolf Parade', 2005));
console.log(addToCollection('In Evening Air', 'Future Islands', 2010));
console.log(addToCollection('The Immaculate Collection', 'Madonna', 1990));
console.log(addToCollection('Astro Lounge', 'Smash Mouth', 1999));
console.log(addToCollection('Torches', 'Foster the People', 2011));
console.log(addToCollection('Easter', 'Patti Smith', 1978));

// Log the collection array
console.log(collection);

// Add function showCollection 
function showCollection () {

} // end showCollection