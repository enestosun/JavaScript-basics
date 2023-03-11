//  Callback Fonksiyonları

// const langs = ["Python", "Java", "C++"];

// langs.forEach((lang) => {
//   console.log(lang);
// });

// document.querySelector("#btn").addEventListener("click", function () {
//   console.log("tıkladın");
// });

// function process1(callback) {
//   //   console.log("Process1");
//   setTimeout(() => {
//     console.log("Process 1");
//     callback ();
//   }, 3000);
// }

// function process2() {
//   setTimeout(() => {
//     console.log("Process 2");
//   }, 2000);
// }

// process1(process2);

// console.log("Naber");

const langs = ["Python", "Java", "C++"];

function addLang(lang, callback) {
  setTimeout(() => {
    langs.push(lang);
    console.log("eklendi");
    callback();
  }, 2000);
}

function getAllLangs() {
  setTimeout(() => {
    langs.forEach((lang) => {
      console.log(lang);
    });
  }, 1000);
}

addLang("Javascript", getAllLangs);
// getAllLangs();    //  Asenkron  Durum
