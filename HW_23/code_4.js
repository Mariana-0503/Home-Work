let year = +prompt( 'Введите любой год: ');
if (year%4 == 0 && year%100 !== 0)
    {
        alert('Высокосный год');
    }
    else
        alert('Не высокосный год');