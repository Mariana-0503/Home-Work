// Создать массив, описывающий чек в магазине. Каждый элемент
//массива состоит из названия товара, количества и цены за единицу товара.
// Написать следующие функции:

// ++Распечатка чека на экран;
// ++Подсчет общей суммы покупки;
// ++Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.
function Product(name, count, price,total) {
  this.name = name || "";
  this.count = count || 0;
  this.price = price || 0.0;
  this.total = total || (this.price*this.count);
}

let listOfProduct = [
  new Product("Iphone", 1, 1250.0),
  new Product("AppleWatch", 2, 300.0),
  new Product("MacBook", 3, 1045.0),
  new Product("AirPods", 4, 220.0),
  new Product("IPad", 1, 1990.0),
];
function logBill(bill) {
  let time = new Date();
  console.log(`Apple World`);
  console.log(time);
  console.log(`Список покупок:`);
  bill.forEach(function ({ name, count, price, total}) {
    console.log(`Товар:${name}------${count}шт.     ціна ${price}$ загалом: ${total}$`);
    console.log("");
  });
  console.log(`Дякуємо за покупку!`);
};
function totalAmount(Amount) {
  let totalCount = 0;
  for (let i = 0; i < listOfProduct.length; i++) {
    totalCount += listOfProduct[i].total;
  }
  console.log(`Сума покупки:${totalCount}`);
};
function mostExpensive(Item) {
  let expensiveItem = 0;
  let expensiveItemName = '';
  for (let i = 0; i < listOfProduct.length; i++) {
    if (listOfProduct[i].price > expensiveItem) {
        expensiveItem = listOfProduct[i].price;
        expensiveItemName = listOfProduct[i].name;
    }
  }
  console.log(`Найдорожчий товар ${expensiveItemName} коштує:${expensiveItem}$`);
};
function avarageItemPrice(ItemPrice) {
    let avaragePriceSumm = 0;
    let avaragePrice = 0;
    for (let i = 0; i < listOfProduct.length; i++) {
        avaragePriceSumm +=listOfProduct[i].price;
       // numberOfItems = listOfProduct.length;
        avaragePrice = avaragePriceSumm/listOfProduct.length;
        }
      console.log(`Середня ціна в чеку ${avaragePrice}$`);
    
};
console.log(listOfProduct);
logBill(listOfProduct);
console.log("");
totalAmount(listOfProduct);
console.log("");
mostExpensive(listOfProduct);
console.log("");
avarageItemPrice(listOfProduct);
