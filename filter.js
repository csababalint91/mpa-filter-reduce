const myArray = [1, 2, 3, 4];

// log out even numbers
const myEvenArray = myArray.filter((value, index, number) => { 
    return value % 2 === 0;
 });

 console.log(myArray);
 console.log(myEvenArray);

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const myEvenNumbers = numbers.filter((value, index, number) => { 
    return value % 2 === 0;
 });

 console.log(numbers);
 console.log(myEvenNumbers);
 
// single string search
const string = ["hello", "Matt", "Metallica", "Cat", "Dog"];

const filtered = string.filter(str => {
     str.includes('at');
});

console.log(filtered);

// filtering arrays of objects
const songs = [
    { id: 1, name: "Dumb", artist: "Nirvana" },
    { id: 2, name: "About a girl", artist: "Nirvana" },
    { id: 3, name: "One", artist: "Metallica" },
    { id: 4, name: "Nothing else matters", artist: "Metallica" }
];

const metallicaSongs = songs.filter(song => {
    return song.artist.toLocaleLowerCase() === 'metallica';
});

console.log(metallicaSongs);




