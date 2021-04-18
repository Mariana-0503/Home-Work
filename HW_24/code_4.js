//Определить количество цифр в введенном числе.
let number= +window.prompt('Введіть число: ');
let quantity=0;
for(let i=1; number/i>=1;i*=10){
    quantity++
}
alert (quantity)
