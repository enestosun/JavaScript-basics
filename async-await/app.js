// async function test(data) {
//   // Promise return new promise

//   //   return data;

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Bu bir değerdir.");
//     }, 5000);
//   });

//   let response = await promise;
//   console.log(response);
//   console.log("Naber");
// }

// console.log(test("Merhaba"));

// test("Merhaba").then((response) => console.log(response));
//
// test("Merhaba");

// async function testData(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("Lütfen string bir değer giriniz."));
//       }
//     }, 5000);
//   });

//   let response = await promise;

//   return response;
// }

// testData(1)
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

async function getCurrency(url) {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

getCurrency("https://api.exchangerate.host/latest").then((response) => {
  console.log(response);
});
