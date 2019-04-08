const numbers = [2, 10, 11, 5, 16];

// calculate the sum of an array of integers

const sum = numbers.reduce((acc, currValue) => {
    return acc + currValue;
}, 0);

console.log(sum);

// build an object from an array
const songs = [
    { id: 1, name: "Dumb", artist: "Nirvana" },
    { id: 2, name: "About a girl", artist: "Nirvana" },
    { id: 3, name: "One", artist: "Metallica" },
    { id: 4, name: "Nothing else matters", artist: "Metallica" }
];

const obj = songs.reduce((acc, currValue) => {
    const artist = currValue.artist;
    const artistCount = acc[artist] ? acc[artist] + 1 : 1;
    
    return {
      ...acc,
      [artist]: artistCount,
    };
  }, {});
  
  console.log(obj);

// turn an array of arrays into a single one
const mult = [ songs, [{id: 122, name: "Chop suey", artist: "System of a Down" }]];

const flatMult = mult.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, );

console.log(flatMult);



