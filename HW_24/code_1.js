let number1=+window.prompt("Введіть початок діапазону", "");
let number2=+window.prompt("Введіть кінець діапазону", "");
let i = number1;
let result=0;

while (i <= number2) {
    
    result += i ;
    i++
}
alert (result)