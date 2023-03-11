function UI() {
  this.outputImage = document.querySelector("#outputImage");
  this.outputLanguage = document.querySelector("#outputLanguage");
  this.outputWord = document.querySelector("#outputWord");

  this.languageList = document.querySelector("#language");
}

UI.prototype.changeUI = function () {
  //ARAYÜZ DEĞİŞTİR

  this.outputImage.src = `images/${this.languageList.value}.png`;
  this.outputLanguage.innerHTML =
    this.languageList.options[this.languageList.selectedIndex].textContentt;
};

UI.prototype.displayTranslate = function (word) {
  this.outputWord.textContent = word;
};
