function Translate(word, language) {
  this.apikey =
    "key=trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
  this.word = word;
  this.language = language;

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  //Ajax işlemleri

  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET", endpoint);
  this.xhr.onload = function () {
    if (xhr.status() === 200) {
      console.log(JSON.parse(xhr.responseText));
      const json = JSON.parse(xhr.responseText);

      const text = json.text[0];

      callback(null, text);
    } else {
      callback("bir hata olustu", null);
    }
  };
  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLang) {
  this.word = newWord;
  this.language = newLang;
};
