
let num1 = +prompt('Введите число') ;
let num2 = +prompt('Введите число') ; 
let result;
if (num2 != 0 && num2 != NaN) {

    for (let i = 1; i < num2 ; i++) {
        if (num1 != 0 && num1 != NaN) {
         result = num1 ** num2;
         alert(result)
         break;
        }
     }
    
}else{
    result = num1 * num1;
    alert(result);
} 


/* let num1 = +prompt('Введите данные')
let num2 = +prompt('Введите данные')
let num3 = +prompt('Введите данные')
let result;

for (let i = 1; i > 0; i++) {
    if (num1 == NaN) {
    num1 == 5;
}else {
    num1 == num2 + num3
    console.log(num1);
}
} */
let str = +prompt('Insert number');
let step = prompt('Insert step');
let symbol = prompt('Insert symbol')

for (let i=1, str=''; i<=10; i++) {
    str += step;
    console.log(str + symbol);
    }






    


