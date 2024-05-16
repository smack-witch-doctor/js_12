//
/*
function Dog(name){

   /* if(!name){
        this.dName= "Rex";
    }
    else{
    this.dName=name;
    }

this.dName= name|| "Rex"; //isplativije
}

//2.
var doggy= new Dog(); //ne bi se ispisalo da ne stavimo uvjet
console.log(doggy);


//3.
var doggo=new Dog("Rex");
console.log("ime psa je: "+ doggo.dName);

//4.
Dog.prototype.imePsa= function (){

    return this.dName;
}

console.log("Ime psa1 preko metode: "+ doggy.imePsa());
console.log("Ime psa2 preko metode: "+ doggo.imePsa());
*/
//pattern (provjeri jQuery)

//napsii modul za brojanje koraka i exportaj modul za kasnije koristenje

//----------------------------------
/*
var brojanjeKoraka= (function(){
var koraci=0;
function _increaseSteps(){
    koraci++;
}
return {

    walk: function(){
      _increaseSteps();
    },
    getTotalSteps: function(){
        return koraci;
    },
    run: function(){
        koraci+=5;
      },

};


})();

module.export= brojanjeKoraka;
*/

//spread operator i rest
/*
function isp(prvi, drugi, treci){
console.log(prvi);
}
const x= ['Ivan','Bro','Ha'];
ispisi(...x);*/

//rest (obrnuto)
/*function isp(...imena){
    console.log(imena);
    }
    const x= ['Ivan','Bro','Ha'];
    isp(x);
*/
//use strict-kada se stavi prije dokumenta, ovo ispod ce ispravit
var a=78;
var b= 34;
delete a;

var myObject={property1: 1},{property2: 2},{property3: 1};

const users=[
{name :"Bravo", surname:"Ha"},
{name:"Mario",surname:"Rossi"},
]

const user= { name:"Lorenzo",surname:"Verdi"};

var allUsers=[...users, user];
console.log(`drugi user= ${allUsers[2].name}`);
for(let i=0;i<10;i++){
    setTimeout(function(){

        console.log("number je:"+i);
    },1000);
    console.log(i);
}
