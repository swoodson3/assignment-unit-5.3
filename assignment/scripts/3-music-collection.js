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
addToCollection('good day', 'days go bye', 'up again');
addToCollection('let you down', 'the search', 'lie');
addToCollection('if you want love', 'you broke me first', 'if ever');
addToCollection('mockingbird', 'without me', 'superman');
addToCollection('spinnin', 'violet', 'splat');
addToCollection('yeah!', 'my boo', 'omg');

console.log(addToCollection('good day', 'days go bye', 'up again'));
console.log(addToCollection('let you down', 'the search', 'lie'));
console.log(addToCollection('if you want love', 'you broke me first', 'if ever'));
console.log(addToCollection('mockingbird', 'without me', 'superman'));
console.log(addToCollection('spinnin', 'violet', 'splat'));
console.log(addToCollection('yeah!', 'my boo', 'omg'));

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
console.log(findByArtist('days go bye'));


