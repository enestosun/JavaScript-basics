//Elementleri seçelim

const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListener();

function eventListener() {
  amountElement.addEventListener("input", exchangeCurrency);
  firstSelect.onchange = function () {
    currency.changeFirst(
      firstSelect.options[firstSelect.selectedIndex].textContent
    );
    ui.changeFirst();
    exchangeCurrency();
  };
  secondSelect.onchange = function () {
    currency.changeSecond(
      secondSelect.options[secondSelect.selectedIndex].textContent
    );
    ui.changeSecond();
    exchangeCurrency();
  };
}

function exchangeCurrency() {
  currency.changeAmount(amountElement.value);
  currency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err));
}
