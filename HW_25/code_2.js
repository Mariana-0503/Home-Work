//Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(3) )