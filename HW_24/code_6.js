//зациклила Y не знаю як зробити щоб в кінці циклу питало результат
let contin = window.prompt("Хочете провести обчислення? - Y/N");
if (contin === "Y") {
  for (let i = 0; contin = "Y" ; i++) {
    let number1 = +window.prompt("Введіть перше число");
    let sign = window.prompt("Введіть знак + - / чи *");
    let number2 = +window.prompt("Введіть друге число");
    if (sign === "+") {
      alert(number1 + number2);
    }
    if (sign === "-") {
      alert(number1 - number2);
    }
    if (sign === "*") {
      alert(number1 * number2);
    }
    if (sign === "/") {
      alert(number1 / number2);
    }
  }
}
if (contin != "Y") {
  alert("Дякую за користування");
}
