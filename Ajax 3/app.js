document.querySelector("#change").addEventListener("click", change);

function change() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.exchangerate.host/latest";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      const rate = response.rates.TRY;
      const amount = Number(document.querySelector("#amount").value);
      document.querySelector("#tl").value = amount * rate;
      //   console.log(typeof rate);
    }
  };
  xhr.send();
}
