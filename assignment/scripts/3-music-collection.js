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
    }; // end object album
    // Add object album to end of collection array
    collection.push(album);
    // Return object album
    return album;
} // end function addToCollection

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
let albumSix = addToCollection('Sgt. Peppers Lonely Hearts Club Band', 'The Beatles', 1967);
console.log(albumSix);
let albumSeven = addToCollection('Let It Be', 'The Beatles', 1970);
console.log(albumSeven);

// Log the collection array
console.log(collection);

// Add function showCollection with parameter collectionName
function showCollection(collectionName) {
    // Log the number of albums in the collection
    console.log('Number of albums in the collection:', collectionName.length);
    for (let i = 0; i < collectionName.length; i++) {
        console.log(`${collectionName[i].title} by ${collectionName[i].artist}, published in ${collectionName[i].yearPublished}`);
    } // end for loop
} // end function showCollection 

// Test 1: Testing showCollection by sending collection array variable
showCollection(collection); 

// Test 2: Testing showCollection by adding new album to collection
let albumEight = addToCollection('Easter', 'Patti Smith', 1978);
console.log(albumEight);
showCollection(collection);

// Add function findByArtist pass string variable 
function findByArtist(artistName) {
    // Create empty array variable
    let artistResults = [];
    // Loop through collection to find artist and add property matches to artistResults array
    for (let i = 0; i < collection.length; i++) {
        if (artistName === collection[i].artist) {
            artistResults.push(collection[i]);
        }
    }
    // Return array with matching results or an enmpty array if none found
    return artistResults;
} // end function artistName 

// Test 1: Testing findByArtist with known artist as arguments 
console.log(findByArtist('Wolf Parade'));

// Test 2: Testing findByArtist with 2 collections from same artist
console.log(findByArtist('The Beatles'));

// Test 3: Testing findByArtist with value not in collection
console.log(findByArtist('The B-52s'));