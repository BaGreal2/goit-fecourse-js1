const userInput = prompt('Сколько у вас есть денег?');

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

let allPrice = 0;

function Cashier(name, productDatabase, allPrice, userInput) {

    this.name = name;

    this.productDatabases = Object.values(productDatabase);

    this.customerMoney = Number(userInput);

    this.countTotalPrice = function(){
        for(let item of this.productDatabases) {

        allPrice += Number(item);

        }
        return Number(allPrice);
    };

    this.countChange =  Number(userInput) - Number(this.countTotalPrice());

    //     return change;

    // };

    this.onSuccess = function() {
            console.log(`Спасибо за покупку, ваша сдача ${this.countChange}!`)
    };

    this.onError = function(){
            console.log(`Очень жаль, вам не хватает денег на покупки`)
        }

    this.reset = function() {this.countTotalPrice() = 0};

}

const mango = new Cashier('Mango', products, allPrice, userInput)

if (mango.countChange >= 0) {
    mango.onSuccess();
} else {
    mango.onError();
}