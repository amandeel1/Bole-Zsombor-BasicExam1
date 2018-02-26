function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // itt a json content, benne a data változóban
  var userDatas = JSON.parse(xhttp.responseText);
  console.log(userDatas);
  /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
  genChars(userDatas);
  search(userDatas);
}
// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData("/json/characters.json", successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */

function genChars(userDatas) {
  var div = document.querySelector(".container");
  div.innerHTML = "";
  for (var i = 0; i < userDatas.length; i++) {
    div.innerHTML += `<div class ="container"><img src = "${
      userDatas[i].portrait
    }">
        <p>${userDatas[i].name}</p>
        </div>`;
  }
}
function search(userDatas) {
  var sideline = document.getElementById("search").value;
  var div = document.querySelector(".sideline");

  for (var i = 0; i < userDatas.length; i++) {
    div = 0;
    if ((sideline = userDatas[i].name)) {
      div.innerHTML += `<div class = "sidelne"><img src = "${
        userDatas[i].picture
      }"><p>${userDatas[i].name}</p><p>${userDatas[i].bio}</div>`;
    }
  }
}
