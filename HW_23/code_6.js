const rateEUR=0.84;
const rateUAN=27.78;
const rateAZN=1.7;
let value= window.prompt("Введіть сумму в доларах","");
let cash=window.prompt("Введіть валюту в яку хочете конвертувати гроші EUR, UAN чи AZN","");
let resultEUR= value * rateEUR;
let resultUAN=value*rateUAN;
let resultAZN=value*rateAZN;
if (cash == 'EUR'){
    alert(resultEUR);
}else if (cash =='UAN' ){
    alert(resultUAN);
}else if (cash =='AZN' ){
    alert(resultAZN);
} else{
    alert('Введіть правильну валюту');
}