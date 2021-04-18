//Зациклить вывод дней недели таким образом: «День недели.
//Хотите увидеть следующий день?» и так до тех пор,
//пока пользователь нажимает OK.

/*var date = new Date();
var day = date.getDay();
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let result=(days[day+1]);
alert(result)*/
/*let answer = window.prompt(`Хочете побачити наступний день тижня?`);

  if (answer === true) {*/  
      
    for (i = 0; i < 7; i++) {   
    
        let date = new Date();
    let day = date.getDay();
    let days = [
      'Неділя',
      'Понеділок',
      'Вівторок',
      'Середа',
      'Четвер',
      'Пятниця',
      'Субота',
    ];
    let result = (days[day + i]);
    console.log(result)
} 
 /* }
 else { 
        alert("Дякую за користування");
  }


do {
  let answer = window.prompt(`${day}.Хочете побачити наступний день тижня?`);
  if (answer != true) {
    alert("Дякую за користування");
  }
  for (let i = Date(); ; i++) alert(i);
} while (answer === true);*/
