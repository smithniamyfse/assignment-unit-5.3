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

// Add function showCollection with collection array as its parameter
function showCollection(collection) {
    // Log the number of albums in the collection
    console.log('Number of albums in the collection:', collection.length);
    for (let i = 0; i < collection.length; i++) {
      console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    } // end loop over array
  }
  showCollection(collection);