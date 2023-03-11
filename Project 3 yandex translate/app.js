//  https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481

eventListeners();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  // change

  document.getElementById("language").onchange = function () {
    // Arayüz işlemleri
    UI.changeUI();
  };
}
const ui = new UI();
const translate = new Translate(
  document.querySelector("#word").value,
  document.querySelector("#language").value
);
function translateWord(e) {
  translate.changeParameters(
    document.querySelector("#word").value,
    document.querySelector("#language").value
  );
  translate.translateWord(function (err, response) {
    if (err) {
      console.log(err);
    } else {
      ui.displayTranslate(response);
    }
  });
  e.preventDefault();
}
