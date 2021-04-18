   
    // take input
    const number1 = prompt('Введіть перше число: ');
    const number2 = prompt('Введіть друге число: ');
    let hcf;
    // looping from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <= number2; i++) {
    
        // check if is factor of both integers
        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    
    // display the hcf
  alert(`Найбільший спільний дільник числа ${number1} і ${number2} є ${hcf}.`);