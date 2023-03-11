// HTTP Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.querySelector("#btn").addEventListener("click", function () {
  // XMLHttpRequest

  const xhr = new XMLHttpRequest();
  //   console.log(xhr);

  //   xhr.onreadystatechange = function () {
  //     // console.log(this.readyState);
  //     // console.log(this.status);
  //     if (this.status == 200 && this.readyState == 4) {
  //       console.log(this.response);
  //     }
  //   };

  xhr.onload = function () {
    // console.log(this.readyState);
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.querySelector("#ajax").textContent = this.responseText;
    }
  };
  xhr.open("GET", "example.txt", true);
  xhr.send();
});
