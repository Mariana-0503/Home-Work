//Написать функцию, которая принимает 2 числа и возвращает -1, 
//если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.
function compare(a,b) {
    if (a<b){
        alert(-1);
    } else if (a>b){
        alert(1);
    } else{
        alert(0);
    }
}
compare(4,4)