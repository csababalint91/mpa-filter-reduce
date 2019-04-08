// triforce

const spotifySongs = [
    { id: 1, name: "Dumb", artist: "Nirvana", duration: "204" },
    { id: 2, name: "About a girl", artist: "Nirvana", duration: "306" },
    { id: 3, name: "One", artist: "Metallica", duration: "444" },
    { id: 4, name: "Nothing else matters", artist: "Metallica", duration: "246" }
];

const lastFmSongs = [
    { id: 1, name: "Chop suey", artist: "System of a Down", duration: "192" },
    { id: 2, name: "Throre", artist: "Bring me the Horizon", duration: "186" },
    { id: 3, name: "Destrier", artist: "Agent Fresco", duration: "132" },
    { id: 4, name: "Nothing else matters", artist: "Metallica", duration: "240" }
];

const allSongs = [spotifySongs, lastFmSongs];
console.log(allSongs);

const songNames = allSongs.reduce((acc, currValue) => {
    return acc.concat(currValue);
}, [])

.map(song => {
    return { ...song, duration: Math.floor(song.duration / 60) };
})

.filter(song => {
    return song.duration > 3;
}) 

.map(song => song.name).join(" , ");

console.log(songNames);