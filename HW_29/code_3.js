//Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
const button = document.getElementById('dot__button'),
 dot = document.getElementsByClassName('dot'),
 red = document.getElementById ("red"),
 yellow = document.getElementById("yellow"),
 green = document.getElementById("green");
 button.addEventListener('click', function() {
  if (red.classList.contains("dot_red")) {
    red.classList.remove("dot_red");
    yellow.classList.add("dot_yellow");
  } else if (yellow.classList.contains("dot_yellow")) {
    yellow.classList.remove("dot_yellow");
    green.classList.add("dot_green");
  } else if (green.classList.contains("dot_green")) {
    green.classList.remove("dot_green");
    red.classList.add("dot_red");
  }
});