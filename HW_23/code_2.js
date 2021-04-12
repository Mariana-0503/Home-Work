let number = window.prompt('Веевдть число від 0 до 9', '');
if ( number < 1) {
  alert( ')' );
} else if (number < 2) {
  alert( '!' );
} else if (number <3) {
  alert( '@' );
} else if (number <4) {
  alert( '#' );
} else if (number <5) {
  alert( '$' );
} else if (number <6) {
  alert( '%' );
} else if (number <7) {
  alert( 'ˆ' );
} else if (number <8) {
  alert( '&' );
} else if (number <9) {
  alert( '*' );
} else if  (number <10) {
  alert( '(' );
}
else if (number < 0) {
    alert( `Введіть вірне число` );
}
//чому не працює оператор -1
else  {
    alert( `Введіть вірне число` );
}