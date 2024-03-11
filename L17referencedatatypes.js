//objects
let animal = {
    name: "Dani",
    legs: 3,
    color: "Pink",
};
console.log(animal)
//dot notation
console.log(animal.name)
//bracket notation
console.log(animal["name"])
let nolegs = "legs"
console.log(animal[nolegs])



//arrays
let selectBooks = ["kamasutra", "fifty shades of gray", "fifty shades of dark"]
console.log(selectBooks)
console.log(selectBooks[1])
console.log(selectBooks.length)



//function
function hiiDani(){
    console.log("Hii Dani");
}
hiiDani();

function addition(a,b){
    return a+b;
}
console.log(addition(33,36));