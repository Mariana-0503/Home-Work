//Написать функцию, которая принимает часы, 
//минуты и секунды и возвращает это время в секундах.
function secondsTime(a,b,c) {
    let secondsA = a*60*60;
    let secondsB = b*60;
    let secondsC = c;
    alert(secondsA+secondsB+secondsC)
}
secondsTime(1,10,2)