//Написать функцию, которая проверяет, является ли
//переданное ей число совершенным. Совершенное
//число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(d) {
    let  result=0;
  for (let i = 1; i < d; i++) {
    if (d % i === 0) {
     result += i;
    }
  }
  if(d === result){
      alert("Число ідеальне");
  } else{
    alert("пічаль"); 
  }
  
}
perfectNumber(28);
