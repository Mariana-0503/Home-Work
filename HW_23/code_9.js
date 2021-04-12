let question1=+window.prompt("Сколько месяцев в году содержат по 28 дней? - 1, 8, 12");
let question2=window.prompt("Кто спит с открытыми глазами? - Рыбы, Лошади, Киты");
let question3=window.prompt("Что теряют космонавты во время полёта? - Сон, Сознание, Вес");
let result = 0;
if (question1==12)
    result=result+2;

if  (question2=='Рыбы')
    result=result+2;

if  (question3=='Вес')
    result=result+2;

alert('Ваш результат - ' +result)
//як помыстити результат в текст