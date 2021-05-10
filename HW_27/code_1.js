//Создать массив «Список покупок». Каждый элемент массива является объектом,
//который содержит название продукта, необходимое количество и куплен или нет.
//Написать несколько функций для работы с таким массивом.

// +++Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
//++Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
//в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
//++Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function Purchare(item, count, completed) {
  this.item = item || "";
  this.count = count || 0;
  this.completed = completed || false;
}

let listOfPurchare = [
  new Purchare("Banana", 10, true),
  new Purchare("Tomato", 5, true),
  new Purchare("Cucumber", 6),
  new Purchare("Ananas", 1, true),
  new Purchare("Potatoe", 25),
];

listOfPurchare.sort(function (first, second) {
  if (first.complete === false || second.completed === false) {
    return 1;
  }
  return -1;
});

let addPurchare = function (newItem) {
  let count = 0;
  for (let i = 0; i < listOfPurchare.length; i++) {
    if (listOfPurchare[i].item === newItem) {
      count = i;
    }
  }

  if (count === 0) {
    listOfPurchare[listOfPurchare.length - 1] = {
      item: Product,
      count: "1",
      completed: true,
    };
    console.log("count===0");
  } else {
    listOfPurchare[count].count = Number(listOfPurchare[count].count);
    listOfPurchare[count].count += 1;
  }
};

let buyPurchare = function (buyItem) {
    let count = 0;
    buyItem = String(buyItem);
    for (let i = 0; i < listOfPurchare.length; i++) {
        if (listOfPurchare[i].item === buyItem) {
          count = i;
        }
      }
    if (count === 0)  {
        console.log(`Продукту ${buyItem} немає в списку`)
    } else{
        listOfPurchare[count].completed = true;
    }
}
console.log(listOfPurchare);
addPurchare("Banana");
console.log(listOfPurchare);
buyPurchare("Potatoe");
console.log(listOfPurchare);
/*
class Product {
    constructor(params = {}) {
      Object.assign(this, {
        pName: null, 
        amount: 1, 
        bought: false
      }, { ...params }); 
    }
  
    static sortDefault(a, b) {  // чтобы сначала шли некупленные продукты, а потом – купленные
      return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
    }; 
  }
  Product.prototype.toString = function () {
    return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}`;
  }; 
  
  
  const shopList = [
    { pName: 'Банан', amount: 2 },
    { pName: 'Апельсин', amount: 5, bought: true },
    { pName: 'Молоко', bought: true },
    { pName: 'Груша', amount: 10 }
  ].map(prodDef => new Product(prodDef));
  
  const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
    const prod = shopList.find(prod => prod.pName === prodDef.pName); 
    if (!prod) return shopList.push(new Product(prodDef)); 
    prod.amount += prodDef.amount; 
  }; 
  const printShopList = () => shopList.forEach(
    (prod, i) => console.log(`${i + 1}. ${prod}`)
  ); 
  
  shopList.sort(Product.sortDefault);
  printShopList();
  console.log('---'); 
  
  addToShopList({ pName: 'Банан', amount: 3 });
  addToShopList({ pName: 'Шоколад', amount: 2 });
  shopList.sort(Product.sortDefault);
  printShopList();

*/
