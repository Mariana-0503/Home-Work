//Создать страницу, которая выводит нумерованный список песен:

class SongList {
    constructor(author, song) {
      this.author = author;
      this.song = song;
    }
}
  let playList = [
    new SongList("LED ZEPPELIN", "STAIRWAY TO HEAVEN"),
    new SongList("QUEEN", "BOHEMIAN RHAPSODY"),
    new SongList("LYNYRD SKYNYRD", "FREE BIRD"),
    new SongList("JIMI HENDRIX", "ALL ALONG THE WATCHTOWER"),
    new SongList("AC/DC", "BACK IN BLACK"),
    new SongList("QUEEN", "WE WILL ROCK YOU"),
    new SongList("METALLICA", "ENTER SANDMAN"),
  ]
/*
  print = function () {
List.forEach(function(item, i){
        alert(`№${i + 1} author: ${item.author} ${item.song}`);
    })}
    print();*/

    let ol = document.createElement('ol');
    let mainDiv = document.getElementById("list");
mainDiv.append(ol);
for (let i in playList) {
    let li = document.createElement("li");
    let pBtn = document.createElement("p");
    pBtn.append("author: ");
  pBtn.append(playList[i].author);
  pBtn.append(" : ");
  pBtn.append("song: ");
  pBtn.append(playList[i].song);
  li.append(pBtn);
  ol.append(li);
}
    /*
let list = document.querySelector('.list');
list.innerHTML =  print;
console.log('list.innerHTML');*/