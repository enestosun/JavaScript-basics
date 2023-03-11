class Currency {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;
    this.url = "https://api.exchangerate.host/latest?base=";
    this.amount = null;
  }

  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstSelect)
        .then((response) => response.json())
        .then((data) => {
          const deger = data.rates[this.secondSelect];
          let total = this.amount * deger;
          resolve(total);
        })
        .catch((err) => reject(err));
    });
  }

  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirst(firstSelect) {
    this.firstSelect = firstSelect;
  }

  changeSecond(secondSelect) {
    this.secondSelect = secondSelect;
  }
}
