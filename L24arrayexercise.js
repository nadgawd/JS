const bitches = [
    {
        name: 'Ava',
        height: '172',
        mass: '77',
        ass_color: 'pink',
        gender: 'female'
    },
    {
        name: 'Brandy',
        height: '150',
        mass: '69',
        ass_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Abella',
        height: '145',
        mass: '136',
        ass_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Sasha',
        height: '168',
        mass: '84',
        eye_color: 'black',
        gender: 'female'
    }
]

// Get an array of all names
console.log(bitches.map(bitch => {
    return bitch.name;
}))

// Get an array with just object name and height 
console.log(bitches.map((bitch) => {
    return {name: bitch.name,
    height: bitch.height};
}))

// Get total height of all
console.log(bitches.reduce((prevHeight, bitch) => {
    return prevHeight + Number(bitch.height);
},0))

// Get characters with mass greater than 100
let heavyChicks = bitches.filter(chick => chick.mass > 100);
console.log(heavyChicks)

// Get all females
let nastyChicks = bitches.filter(chick => chick.gender == 'female');
console.log(nastyChicks)

// Sort by name
const byName = bitches.sort((bitch1, bitch2) => {
    if(bitch1.name<bitch2.name){
        return -1;
    }
    if(bitch1.name>bitch2.name){
        return 1;
    }
    return 0;
})
console.log(byName)

// Does every bitch weighs greater than 80?
console.log(bitches.every((bitch) =>
{
    return bitch.mass>80;
}))

//Does every bitch has brown ass?
console.log(bitches.every((bitch) =>
{
    return bitch.ass_color == "brown";
}))

// Is there at least one bitch taller than 160?
console.log(bitches.some((bitch) =>{
    return bitch.height > 160;
}))