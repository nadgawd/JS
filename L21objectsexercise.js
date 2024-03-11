const item = {
    itemName : "dildo",
    itemPrice : 69.69,
    itemDiscount : 69,
    itemCode : '69'
}

//using factory function
function getItem(itemName, itemPrice, itemDiscount, itemCode)
{
    return{
        itemName: itemName,
        itemPrice: itemPrice,
        itemDiscount: itemDiscount,
        itemCode: itemCode        
    }
}
const russian = getItem("Russian", 6000, 4140, '69')
console.log(russian)

//using constructor function
function Product(itemName, itemPrice, itemDiscount, itemCode){
    this.itemName = itemName,
    this.itemPrice = itemPrice,
    this.itemDiscount = itemDiscount,
    this.itemCode = itemCode
    this.discountvalue = function(){
        return itemPrice*itemDiscount/100
    }
}
const russian2 = new Product("Russian", 6000, 4140, '69')
console.log(russian2)
console.log(russian2.discountvalue)