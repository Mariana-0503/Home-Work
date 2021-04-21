//Создать объект, описывающий автомобиль (производитель, модель, 
//год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//   + Функция для вывода на экран информации об автомобиле;

//Функция для подсчета необходимого времени для преодоления 
//переданного расстояния со средней скоростью. Учтите, что через 
//каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


let car ={
    manufacturer: "KIA",
    model: "Sportage",
    year: 2021,
    speed: 140,
    info() {
        console.log(car)
    },
    travelTime (a) {
     let  timeSimple = a/this.speed;
     let timeBreake = timeSimple%4;
     let  timeInRoad = timeSimple+timeBreake;
        console.log(timeInRoad)
    }

};
car.info()
car.travelTime(1400)