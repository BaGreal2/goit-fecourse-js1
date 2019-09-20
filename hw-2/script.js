let userInput = 0;

const numbers = [];

var total = 0;

do {

    userInput = Number( prompt( 'Вводите числа, потом нажмите Cancel' ) );

    numbers.push( userInput )

 } while( userInput !== 0 );

for(var i=0;i<numbers.length;i++){
    total = total + parseInt(numbers[i]);

}
alert(`Общая сумма чисел равна ${total}`);
