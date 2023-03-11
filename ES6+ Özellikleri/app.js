//    ARROW FUNCTİON





// const merhaba = function(){
//     console.log("Merhaba");
// }

// merhaba();

//Arrow Function

// const merhaba = () => {
//     console.log("merhaba");
// }

// merhaba();

// const merhaba = firstname => console.log("Merhaba",firstname);


// merhaba("Enes")


// const cube = x => {
//     return x * x * x ;
// }
// const cube = x =>  x*x*x; 














//        DESTRUCTİNG





// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing
// [number1,number2] = arr ;

// const [number1,number2] = arr;

// console.log(number1,number2);




// Obje  Destructing

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };


// const {a:number1,c:number2,e} = numbers;

// console.log(number1,number2,e);


// Function Destructing

// const getLangs = () => ["Phyton","Java","C++"];

// const [lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);

// const person = {
//     name:"Enes",
//     year:1999,
//     salary:3000,
//     showInfos: () => console.log("Bilgiler Gösteriliyor...");
// }

















//    SPRED OPERATÖRÜ




// const langs = ["Python","C++","Java","Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// console.log(...langs);

// const langs2 = ["Javascript","C#",langs[0],langs[1],langs[2],langs[3]];
// const langs2 = ["Javascript","C#",...langs];

// console.log(langs2);


// const numbers = [1,2,3,4,5,6,7];

// const [a,b,...numbers2] = numbers;

// console.log(numbers2);

// const addNumbers = (a,b,c) => console.log(a+b+c);

// const numbers = [100,200,300];

// addNumbers(...numbers);



















//   FOR İN   -   FOR OF




// const  person = {
//     name:"Enes Tosun",
//     age:23,
//     salary:3000
    
// };

// const langs = ["Python","Java","C++","Php"];

// const name = "Enes";


// For in

// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// for(let index in langs){
//     console.log(index,langs[index]);
// }

//  String

// for (let index in name){
//     console.log(index,name[index]);
// }



//  For of
//objede çalısmaz
//array
// for (let value of langs){
//     console.log(value);
// }

// String

// for(let value of name){
//     console.log(value);
// }

















//    Mapler   -  Key(Anahtar)  -  Value(Değer)


// let myMap = new Map(); // Map Olusturma

// console.log(myMap);

// const key1 = "Enes";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// myMap.set(key1,"String deger");
// myMap.set(key2,"Object Literal deger");
// myMap.set(key3,"Function deger");

// Get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// console.log(myMap);

// Map boyutu

// console.log(myMap.size);


// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);


// For Each

// cities.forEach(function(value,key){
//     console.log(key,value)
// });

//For of

// for(let [key,value] of cities){
//     console.log(key,value);
// }

