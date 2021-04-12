let year = prompt('Скільки вам років', '');

if (year < 12) {
  alert( 'Дитина' );
} else if (year < 18) {
  alert( 'Підліток' );
} else if (year < 60 ) {
  alert( 'Підліток' );
}else if (year >= 60 ) {
  alert( 'Пенсіонер' );
}