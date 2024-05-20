/*
//arrow funkcije
const bark = () => "wuf wuf";

let barkx = function bark2() {
  return "wuf wuf";
};
console.log(bark);
console(barkx);

//forEach metoda
let myArray = ["bla", "bla", "blal"];
forEach(myArray, (element) => console.log(element));
//umijesto
myArray.forEach(function (element) {
  console.log(element);
  return element;
});
//konstruktor i extends
class Dog {
  imePsa = "Rex";
  vrsta = "Seoski pas";
}

class GoldenRetriver extends Dog {
  constructor(godine) {
    this.godine = 4;
  }
}
//constructor u kojem nasljedujemo nest ood drugog prije zovemo funkciju super()
//zadatak da napisemo novi promise

function getX() {
  return Math.random() >= 0.5;
}

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise((resolve, reject) => {
  //console.log("pozvan promise object");
  let x = getX();
  if (x) {
    return resolve;
  }
  return reject;
})
  .then((vrijednost) => console.log("neka vrijednost"))
  .catch(() => console.log("oh, no!"));
*/
//rad s APIjem, ajax
var request = new XMLHttpRequest();
// endpoint data: https://xsmile007.github.io/JS-API-example/mydata.json
request.open(
  "GET",
  "https://xsmile007.github.io/JS-API-example/mydata.json",
  true
);
//isparsat na json i pretvorit ga u objekt
request.onload = function (result) {
  console.log(result.currentTarget.response);

  const obj = JSON.parse(result.currentTarget.response);

  let grad = obj.request.query;
  console.log("Isparsani grad je: " + grad);

  let uvIndex = obj.current.uv_index;
};
request.send();
