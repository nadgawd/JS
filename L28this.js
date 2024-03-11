// let counter = {
//     count:0,
//     increment: function(){
//         this.count++;
//     }
// }
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter)



// //factory function
// let counterf = counterF();
// let counterf1 = counterF();
// function counterF(){
//     return{
//         count: 0,
//         increment: function(){
//             this.count++;
//         }
//     }
// }
// counterf1.increment()
// counterf1.increment()
// counterf1.increment()
// console.log(counterf1)



// var count = 0;
// function incrementCounter(){
//     this.count++;
//     console.log(this)
// }
// incrementCounter();
// incrementCounter();
// console.log(count);



// console.log(this)



function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + " started");
        console.log(this)
    }
}
let swift = new Car('Swift');
console.log(swift)
swift.start();