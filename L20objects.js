let lecture = 10;
let section = 3;
let title = "JS";

//nested object
const course ={
    lecture: 10,
    section: 3,
    title: "JS",
    notes: {
        intro: "Wellcum to JS"
    },
    enroll(){
        console.log("Enrolled");
    }
};
//calling object
console.log(course.enroll())
console.log(course.notes.intro)
console.log(course)
course.price=69
console.log(course)



//factory functionc - Camelcase is used
function createCourse(lecture, section, title){
    return{
        lecture: lecture,
        section: section,
        title: title,
        enroll(){
            console.log("Enrolled");
        }
    }
}
const course1 = createCourse(10, 3, "JS")
course1.enroll()
console.log(course1)



//constructor function - Pascalcase is used
function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log("Enrolled");
    }
}
const Course2 = new Course("JS");
//new keyword points 'this' to an empty object
Course2.enroll()
console.log(Course2)
//delete keyword
delete Course2.title;
console.log(Course2)
//create new function
Course2.checkEnrollment = function(){
    console.log("Enrolled sexessfully");
}
console.log(Course2)

console.log(Course2.constructor)
console.log(course1.constructor)
//for factory function, js internally writes ()
const Course1 = new Object({
    title: title,
    enroll(){
        console.log("Enrolled");
    }
})



//constructor function
const bitch = new Function('name', `this.name = name,
this.enroll = function(){
    console.log("Fucked");
}`)
const bitches = new bitch("Mia");
console.log(bitches.enroll());



//primitive datatype
let num = 69;
//pass by value - value of the variable is passed
let num1 = num;
console.log(num)
console.log(num1)
num = 42;
console.log(num)
console.log(num1)

//reference datatype
let obj = {number:10};
//pass by reference - memory location of that variable is passed
let obj2 = obj;
console.log(obj)
console.log(obj2)
obj.number = 15
console.log(obj)
console.log(obj2)



//pass by value in an object using 'spread'
const lesbian = {
    title : 'mia',
    enroll(){
        console.log('i like lesbians');
    }
}
//dots are important
const gay = {...lesbian}
console.log(gay)
gay.title = "straight";
console.log(gay);
//object.assign
const ass = Object.assign({}, lesbian)
console.log(ass)
//using loop
const boobs = {}
for(let key in lesbian)
{
    console.log(key, lesbian[key]);
    boobs[key] = lesbian[key];
}
for(let key of Object.keys(lesbian))
{
    console.log(key, lesbian[key])
}
console.log(boobs)