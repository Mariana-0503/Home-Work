//Создать объект, хранящий в себе отдельно числитель
// и знаменатель дроби, и следующие функции для работы с 
//этим объектом: 
//Функция сложения 2-х объектов-дробей;
//Функция вычитания 2-х объектов-дробей;
//Функция умножения 2-х объектов-дробей;
//Функция деления 2-х объектов-дробей;
//Функция сокращения объекта-дроби.


let numbers={
    number1: [5,10],
    number2: [3,7],
    addingFractionObjects(){
      let  addingNum =this.number1[0]*this.number2[1]+this.number2[0]*this.number1[1];  
      let  addingDenom =this.number2[1]*this.number1[1]; 
      console.log(`${addingNum}/${addingDenom}`);
    },
    subtractingFractionObjects(){
        let  subtractingNum =this.number1[0]*this.number2[1]-this.number2[0]*this.number1[1];  
        let  subtractingDenom =this.number2[1]*this.number1[1]; 
        console.log(`${subtractingNum}/${subtractingDenom}`);
      },
      multiplyingFractionObjects(){
        let  multiplyingNum =this.number1[0]*this.number2[0];  
        let  multiplyingDenom =this.number2[1]*this.number1[1]; 
        console.log(`${multiplyingNum}/${multiplyingDenom}`);
      },
      dividingFractionObjects(){
        let  dividingNum =this.number1[0]*this.number2[1];  
        let  dividingDenom =this.number2[0]*this.number1[1]; 
        console.log(`${dividingNum}/${dividingDenom}`);
      },
      reductionFractionObject (){
        let max;
        for (let i = 1; i <= this.number1[0] && i <= this.number1[1]; i++) {
          if ( this.number1[0] % i == 0 && this.number1[1] % i == 0) {
          max = i;
      }
    };
       let reductionNum=this.number1[0] /max;
       let reductionDenom = this.number1[1]/max;
       console.log(`${reductionNum}/${reductionDenom}`);
      },
          

};
////вивела скоротчення дробу, який заданий базово, але не вмію прописати шлях обєкта, щоб скоротити наприклад дріб, який отримала в результаті множення дробів
numbers.addingFractionObjects();
numbers.subtractingFractionObjects();
numbers.multiplyingFractionObjects();
numbers.dividingFractionObjects();
numbers.reductionFractionObject ();