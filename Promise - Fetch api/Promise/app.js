// function getData(data) {
//   // Promise Objesi döndüren fonksiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         // olumlu
//         resolve(data);
//       } else {
//         //olumsuz
//         reject(new Error("Lütfen string bir deger giriniz"));
//       }
//     }, 5000);
//   });
// }

// // console.log(getData("Merhaba")); //biz

// getData(1)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        // olumlu
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen bir sayı girin"));
      }
    }, 3000);
  });
}

addTwo(10)
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((err) => {
    console.log(err);
  });
