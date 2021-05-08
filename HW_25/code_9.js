//Написать функцию, которая принимает количество секунд, 
//переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». 3820 - 1 - 3 - 40
function timeIn(a) {
    let hours = Math.floor(a/3600);
    let minutes =  Math.floor((a-(hours*3600))/60) ;
    let seconds = (a-(hours*3600))-minutes*60;

    let S = `${seconds}` .padStart(2,'0');
    let M = `${minutes}` .padStart(2,'0');
    let H = `${hours}` .padStart(2,'0');



    alert(`${H}:${M}:${S}`);
}
timeIn(3820)