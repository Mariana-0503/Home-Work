//Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».Если при вызове 
//функции минуты и/или секунды не были переданы, то выводить их как 00.
function timeVisualisation (a,b,c){
    let zero = "00";
  let  resultB = (b != null && b != undefined) ? b: zero;
  let resultC = (c != null && c != undefined) ? c : zero;
   alert(`${a}:${resultB}:${resultC}`)
}
timeVisualisation (55,11, )