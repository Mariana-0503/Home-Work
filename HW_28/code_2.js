// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом;
// текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – 
//это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого
// маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 
class Marker {
    colore
    supply
    constructor(colore,supply) {
        this.colore = colore || "#782";
        this.supply = supply || 0;
    }
    print(text){
        let l = document.getElementById("line");
        for(let i=0;i<text.length;i++){
            if (this.supply !=0){
                if(text[i]==""){
                    this.supply +=0.5;
                }
                l.innerHTML+=text[i];
                l.style.color = this.colore;
                this.supply -=0.5;
            }else{
                document.write("Додайте чорнил");
                break;
            }

        }
            
    }
   
}
class FilledMarker extends Marker {
    fill(supply) {
      if (supply > 100) {
        supply = 100;
      } else {
        this.supply += supply;
      }
    }
}
let marker = new FilledMarker("#382", 2);

marker.fill(20);

const l = `Иногда говорят, что class – это просто «синтаксический сахар» в JavaScript (синтаксис для улучшения читаемости кода, но не делающий ничего принципиально нового), потому что мы можем сделать всё то же самое без конструкции class:`;
marker.print(l);
document.body.setAttribute("style", "font-size: 22px; text-align: center;");