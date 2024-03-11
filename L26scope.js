// Global scope
var name = 'Mia';

function sayName(){
    var marks = 10;
    console.log(name);
}
sayName()
// console.log(marks);



// Global scope
var x=0
function first(){
    // Local Scope #1
    var x=1;
    console.log(x);
    function childOfFirst(){
        // var x=2;
        console.log(x);
        // Local Scope #2
        
    }
    childOfFirst()
}
first()
// Global Scope
function second(){
    console.log(x);
    //Local Scope #3
}
second()



var y=10;
let z=10;
const w =10;
{
    var y=1;
    let z=1;
    const w=1;
    console.log(y);
    console.log(z);
    console.log(w);
}
console.log(y);
console.log(z);
console.log(w);



if(true){
    //this "if" conditional block doesn't create a new scope
    let foo = "bar";
    var goo = "bar";
}
// console.log(foo);
console.log(goo)



// Lexical Scope
function Dada(){
    var name = "Jordi";
    // likes is not accessible here
    function Papa(){
        console.log(name)
        // name is accessible here
        // likes is not accessible here
        function Beta(){
            // Innermost level of the scope chain
            // name is accessible here
            // likes is accessible here
            var likes = 'Coding';
        }
        console.log(likes);
        Beta();
    }
    Papa();
}
Dada();