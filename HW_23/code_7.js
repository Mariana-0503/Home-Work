//Запросить у пользователя сумму покупки и вывести сумму 
//к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 
//300 до 500 – 5%, от 500 и выше – 7%.
let value=+window.prompt("Внесите сумму покупки","");
if (value>=200 && value<300){
    alert (value - value*0.03);
}  else if(value>=300 && value<500){
    alert (value - value*0.05);
} else if(value>=500 ){
        alert (value - value*0.07);
    }