// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    radius
    constructor(radius) {
        this.radius = radius || 0;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(newRad){
        [this.radius]=[...newRad]
    }
    get getDiam() {
        return this.radius+this.radius;
    }
    area(){
         console.log( Math.round(Math.PI*this.radius*this.radius));
    }
    long(){
        console.log( Math.round(Math.PI*this.radius*2));
   }

};
let p = new Circle(6);
console.log(p.getRadius);
p.setRadius = [10];
console.log(p.getRadius);
console.log(p.getDiam);
p.area();
p.long();