let value1=window.prompt("Вкажіть трьохзначне число");
let b, sum = 0;
let z = value1;
while(value1 > 0)
{
  b = value1 % 10;
  sum = sum * 10 + b;
  value1 = parseInt(value1 / 10);
}
alert(sum);