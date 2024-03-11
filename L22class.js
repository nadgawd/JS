//syntax - declare - pascal case
class Product{
    constructor(itemName, price, discount, code){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
}
let pencil = new Product("Apsara", 69, 69, "P69")
console.log(pencil)


//syntax - expression
const Pdt = class Product{
    constructor(itemName, price, discount, code){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
}
let chair = new Pdt("chair", 499, 15, "D34")
console.log(chair)

const Pdt1 = class {
    constructor(itemName, price, discount, code){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
}
let dildo = new Pdt1("chair", 499, 15, "D34")
console.log(dildo)



//getter & setter
const Thing = class {
    constructor(itemName, price, discount, code){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
        this.discount = value;
    }
    discountValue(){
        return this.discount*this.price/100
    }
}
let latina = new Thing("bitch", 7000, 20, "L34")
console.log(latina.getDiscountValue)
console.log(latina.setDiscountValue = 15)
console.log(latina.getDiscountValue)
console.log(latina.discountValue())



//extending class
class Russian{
    constructor(itemName){
        console.log("Passed by Pussy "+itemName)
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + " is a russian.";       
    }
}
class Pussy extends Russian{
    constructor(itemName){
        super(itemName);
    }
    getItemName(){
        return this.itemName + " is pink."
    }
}
let mia = new Russian("Mia");
let pussy = new Pussy("Pussy");
console.log(mia.getItemName())
console.log(pussy.getItemName())
