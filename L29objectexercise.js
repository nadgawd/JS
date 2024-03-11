// Area of a square
let square = {
    side: 5,
    get area(){
        return this.side**2;
    }
}
square.side = 10
console.log(square.area);



//joint function
function stringConcat(separator, ...strings){
    let retValue = ''
    strings.forEach((string, i) => {
        if (i == strings.length-1){
        retValue += string;
    }
        else{
            retValue += string + separator;
        }
    })
    return retValue;
}
console.log(stringConcat('-', 'i', 'like', 'bitches'))



// slice
let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(first)
console.log(second)
console.log(third)
console.log(other)



//matchstick houses
function matchHouses(step){
    if(step === 0)
    {
        return 0;
    }
    else
    {
        return 6 + (step - 1) * 5;
    }
}
console.log(matchHouses(5))