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
let albumOne = addToCollection('Apologies to Queen Mary', 'Wolf Parade', 2005);
console.log(albumOne);
let albumTwo = addToCollection('In Evening Air', 'Future Islands', 2010);
console.log(albumTwo);
let albumThree = addToCollection('The Immaculate Collection', 'Madonna', 1990);
console.log(albumThree);
let albumFour = addToCollection('Astro Lounge', 'Smash Mouth', 1999);
console.log(albumFour);
let albumFive = addToCollection('Torches', 'Foster the People', 2011);
console.log(albumFive);
let albumSix = addToCollection('Easter', 'Patti Smith', 1978);
console.log(albumSix);

// Log the collection array
console.log(collection);

// Add function showCollection with parameter collectionName
function showCollection(collectionName) {
    // Log the number of albums in the collection
    console.log('Number of albums in the collection:', collectionName.length);
    for (let i = 0; i < collectionName.length; i++) {
        console.log(`${collectionName[i].title} by ${collectionName[i].artist}, published in ${collectionName[i].yearPublished}`);
    } // end loop over array
}

// Test 1: Testing showCollection by sending collection array variable
showCollection(collection); // end Test 1
// Test 2: Testing showCollection by adding new album to collection
let albumSeven = addToCollection('Sgt. Peppers Lonely Hearts Club Band', 'The Beatles', 1967);
console.log(albumSeven);
showCollection(collection); // end Test 2