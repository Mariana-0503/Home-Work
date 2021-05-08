//Написать функцию, которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты,
// и возвращает результат в виде строки «чч:мм:сс». При 
//выполнении задания используйте функции из предыдущих 2-х заданий: 
//сначала обе даты переведите в секунды, узнайте разницу в секундах, 
//а потом разницу переведите обратно в «чч:мм:сс»
function superHardTask(a,b,c,x,y,z) {
    let secondsA = a*60*60;
    let secondsB = b*60;
    let secondsC = c;
    let data1 = secondsA+secondsB+secondsC;

    let secondsX = x*60*60;
    let secondsY = y*60;
    let secondsZ = z;
    let data2 = secondsX+secondsY+secondsZ;
    
    let result= data1-data2;
    let hours = Math.floor(result/3600);
    let minutes =  Math.floor((result-(hours*3600))/60) ;
    let seconds = (result-(hours*3600))-minutes*60;

    let S = `${seconds}` .padStart(2,'0');
    let M = `${minutes}` .padStart(2,'0');
    let H = `${hours}` .padStart(2,'0');

    alert(`${H}:${M}:${S}`);
}
superHardTask(12,12,10,10,2,5)