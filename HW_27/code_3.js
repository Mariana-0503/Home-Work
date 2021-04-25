//Создать массив, описывающий чек в магазине. Каждый элемент
//массива состоит из названия товара, количества и цены за единицу товара.

// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание,
// подчеркивание и т. д.). Каждый элемент массива – это объект, 
// состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и 
// выводит этот текст с помощью document.write() в тегах <p></p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
function Css(name, value) {
    this.name = name || "";
    this.value = value || "";
}
  
  let CssStyle = [
    new Css('font-family', 'sans-serif'),
    new Css('color', 'blue'),
    new Css('line-height', '30px'),
    new Css('padding', '0'),
  ];

  function writeWithCss(style,text) {
      let article = style.reduce (function (sum,item) {
          return sum +`${item.name}:${item.value};`
      },'');   
        document.write(`
        <p style= "${article}">
            ${text}
        </p>
    `);
  };

  writeWithCss(CssStyle,'Hello');
