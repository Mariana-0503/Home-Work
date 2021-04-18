//Вывести таблицу умножения для всех чисел от 2 до 9. 
//Каждое число необходимо умножить на числа от 1 до 10.
let number=+window.prompt("Введіть число від 2 до 9")
for(let i=1;i<11;i++){
    let result = i * number
    console.log(`${i} * ${number} = ${result}`);
}