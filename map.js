const myArray = [1, 2, 3, 4];
// call a map
const myArrayTimesTwo = myArray.map((value, index, array) => { return value * 2; } );

console.log(myArray);
console.log(myArrayTimesTwo);


const songs = [
    { id: 1, name: "Dumb", artist: "Nirvana" },
    { id: 2, name: "About a girl", artist: "Nirvana" },
    { id: 3, name: "One", artist: "Metallica" },
    { id: 4, name: "Nothing else matters", artist: "Metallica" }
];

// log out artists only
const artists = songs.map((artists) => { console.log(artists.artist) });

// transformation of array of object into an array of strings
const allSongNames = songs.map(song => song.name);

console.log(allSongNames);

// applying a transformation through an utility function

const mySongFunc = song => {
    return song.name.toLowerCase();
};

const lowerCaseSongs = songs.map(mySongFunc);

console.log(lowerCaseSongs);

// transforming a given array and adding and removing properties from easch object
 const mapped = songs.map(song => {
     const { artist, ...rest } = song;

     return {
         ...rest,
         scrobbleCount: 0,
         spotifyUrl: "let's just imagine these properties make sense for now",
     };
 });

console.log(mapped);

