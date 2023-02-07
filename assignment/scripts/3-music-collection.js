console.log('***** Music Collection *****')

let collection = [];
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished, 
    }
    collection.push(album);
    return album;
};
addToCollection('good day', 'mike.', '2022');
addToCollection('these days', 'mike.', '2015');
addToCollection('if you want love', 'nf', '2017');
addToCollection('mockingbird', 'eminem', '2004');
addToCollection('spinnin', 'connor price', '2022');
addToCollection('yeah!', 'usher', '2004');

console.log(addToCollection('good day', 'mike.', '2022'));
console.log(addToCollection('let you down', 'mike.', '2015'));
console.log(addToCollection('if you want love', 'nf', '2017'));
console.log(addToCollection('mockingbird', 'eminem', '2004'));
console.log(addToCollection('spinnin', 'connor price', '2022'));
console.log(addToCollection('yeah!', 'usher', '2004'));

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }
    return array;
}
console.log('This is show collection',showCollection(collection));

function findByArtist(artist) {
    let artists = [];
    for (album of collection) {
        if (artist === album.artist) {
            artists.push(album)
        }
    }
    return artists;
}
console.log(findByArtist('mike.'));


