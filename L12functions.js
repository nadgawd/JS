function cookMaggi(maggi, pani, pateli){
    console.log("Your maggi will be ready in " + maggi*2 + " minutes"
    + " with " + pani + " cups of water and " + pateli + " pateli");
}

cookMaggi(1, 2, 3);



function sandWich(bread, veggies, sauce){
    let sandWich = bread + " bread " + veggies + " " + sauce + " sandwich.";
    return sandWich;
}
let sandWich1 = sandWich(wheat, paneer, ketchup);
console.log(sandWich1);