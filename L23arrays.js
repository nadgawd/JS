//Declaring array 
//method 1
const num = [1,2,3,4,5,6,7,8,9];
console.log(num)
console.log(num[4])
console.log(num[num.length-1])
//method 2
const nums = new Array(1,2,3,4,5,6,7,8,9);
console.log(nums)


//push - adds element at end
num.push(10);
console.log(num);

//unshift - adds element at start
num.unshift(0);
console.log(num);

//pop - pops and returns element at the end
// num.pop()
console.log(num.pop()) 
console.log(num);

//shift - removes and return element at start
// num.shift()
console.log(num.shift())
console.log(num)

//change value of index
num[0] = true
console.log(num)

//index of
const names = ['Mia', 'Abella', 'Brandy', 'Megan', 'Sasha', 'Natalie', 'Mia']
console.log(names.indexOf("Brandy"))
console.log(names.indexOf("Nat"))
console.log(names.indexOf("Mia", 1))

//last index of
console.log(names.lastIndexOf("Mia"))

//includes - works in primitive data types only
console.log(names.includes("Brandy"))
console.log(names.includes("Randy"))
console.log(names.includes("Brandy", 3))

let fans = [
    {
        name: "Mia",
        onlyfans: 30
    },
    {
        name: "Brandy",
        onlyfans: 69
    },
    {
        name: "Ava",
        onlyfans: 42
    }
];
console.log(fans.includes({
    name: "Brandy",
    onlyfans: 69
}))

//find - returns first element that satisfies the condition
//callback funciton
console.log(fans.find(function(element){
    // return element.onlyfans === 69;
    // return element.name === 'Ava';
    return element.name === 'Addams';
}))
//arrow functoion
console.log(fans.find((element) =>{
    return element.onlyfans === 69;
}))

//concat
const first = [1,2,3,4,5];
const second = [6,7,8,9,10];
console.log(first.concat('bitch', 'nasty'))
console.log(first.concat(second))

//slice
console.log(first.slice(2))
console.log(first.slice(1,3))

//concat using spread
let all = [...first, ...second]
console.log(all)

//for loop
for(let i=0; i<names.length; i++)
{
    // console.log(names[i]);
}

//for of
for(let name of names){
    // console.log(name)
}

//for each
names.forEach(function(name, index){
    console.log(name, index)
})

//join
let student = ['J', 'o', 'r', 'd', 'i'];
console.log(student.join())
console.log(student.join(''))
console.log(student.join("-"))

//split
student = student.join('_');
console.log(student.split('_'))

//filter
let bitches = [
    {name: 'Ava', bodycount: 1976465},
    {name: 'Abella', bodycount: 5344512},
    {name: 'Sasha', bodycount: 1555154},
    {name: 'Mia', bodycount: 456485},
    {name: 'Brandy', bodycount: 1231556}
];
console.log(bitches.filter(bitch=>
    {
        return bitch.bodycount > 1000000;
    }))

//map
console.log(bitches.map(bitch=>
    {
        return bitch.bodycount * 2;
    }))
