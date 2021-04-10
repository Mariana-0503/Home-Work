//Запросить у пользователя длину окружности и периметр квадрата. 
//Определить, может ли такая окружность поместиться в указанный квадрат.
let circle=window.prompt('Введите длину окружности','');
let square=window.prompt('Введите периметр квадрата','');
let result1=circle/ Math.PI;
let result2=square/4;
if (result1<=result2){
    alert("Поміститься");
}
else{
    alert("Не поміститься");
}