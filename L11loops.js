console.log("I like Bitches.");

//for loop
for(let i=0; i<10; i++)
{
    console.log("Hello Bitches");
}

for(let i=5; i<51; i+=5)
{
    console.log(i);
}

//while loop
let i=0;
while(i<10)
{
    console.log("Bitches, where are you?");
    i++;
}

//do while loop
let j=10;
do{
    console.log("hii");
    j--;
}
while(j>0);

//for in loop - objects
let animal = 
{
    name: "Dog",
    leg: 5,
    color: "Brown"
};
for(let key in animal){
    console.log(key);
    console.log(key, animal[key]);
};

console.log(animal.name);
console.log(animal["leg"]);

//for in loop - arrays
let names = ["Mia", "Brandy", "Abella", "Megan"];
for(let index in names){
    console.log(index);
    console.log(index, names[index]);
}

//for of loop
for(let name of names){
    console.log(name);
}