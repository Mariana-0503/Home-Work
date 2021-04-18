let positive=0,
negative=0,
zerotive=0;

let even=0,
odd=0;

for (let i=0;i<10;i++){
  let value=+prompt('Введи число');
  if(value%2===0){
    even++;
  }
  else{
    odd++;
  }
  if(value>0){
    positive++;
  } else if  (value===0){
   zerotive++;
  }
  else{
    negative++ ;
  }
};

console.log('Результат');
console.log(`Кількість позитивних чисел: ${positive}`);
console.log(`Кількість негативних чисел: ${negative}`);
console.log(`Кількість парних чисел: ${even}`);
console.log(`Кількість не парних чисел: ${odd}`);
console.log(`Кількість нулів: ${zerotive}`);

