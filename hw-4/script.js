let totalmoney = 0;

let userInput = 0;


const productsUser = [];


let money = [];

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

do {

    userInput = prompt( 'Вводите деньги, потом нажмите Cancel' );
    money.push( userInput )

 } while( userInput !== null );

do {

    userInput2 = prompt( 'Вводите продукты(bread, milk, apples, chicken, cheese), потом нажмите Cancel' );
    productsUser.push( userInput2 )

 } while( userInput !== null );

function Cashier(name, productDatabase) {

    this.name = name;

    this.productDatabase = Object.keys(productDatabase);

    this.customerMoney = money;

    this.setCustomerMoney = function(){
        for(var i=0;i<money.length;i++){
            totalmoney = totalmoney + money[i];
            
        }
    }

}
  
const mango = new Cashier('Mango', products)

console.log(mango)