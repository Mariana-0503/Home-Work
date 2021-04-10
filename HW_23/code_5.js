let number = +prompt( 'Введите пятизначное число: ', '');
number = number + '';
    if (number === number.split('').reverse().join(''))
        alert('Палиндром');
    else
        alert('Не палиндром');





        