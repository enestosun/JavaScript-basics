//  Ajax Callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, callback) {
    this.xhr.open("GET", url); // Bağlantıyı açtık

    this.xhr.onload = function () {
      if (this.status === 200) {
        callback(null, this.responseText);
      } else {
        // HATA DURUMU
        callback("hata olustu", null);
      }
    };

    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = function () {
      if (this.status === 201) {
        // basarılı
        callback(null, this.responseText);
      } else {
        callback("hata olustu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");

    this.xhr.onload = function () {
      if (this.status === 200) {
        // basarılı
        callback(null, this.responseText);
      } else {
        callback("hata olustu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  delete(url, callback) {
    this.xhr.open("DELETE", url); // Bağlantıyı açtık

    this.xhr.onload = function () {
      if (this.status === 200) {
        callback(null, "başarıyla silindi");
      } else {
        // HATA DURUMU
        callback("hata olustu", null);
      }
    };

    this.xhr.send();
  }
}

const request = new Request();
// // console.log(request.xhr);
// request.get(
//   "https://jsonplaceholder.typicode.com/albums/51",
//   function (err, response) {
//     if (err === null) {
//       //basarılı
//       console.log(response);
//     } else {
//       //hata
//       console.log(err);
//     }
//   }
// );

// request.post(
//   "https://jsonplaceholder.typicode.com/albums",
//   {
//     userId: 2,
//     title: "Thriller",
//   },
//   function (err, response) {
//     if (err === null) {
//       //basarılı
//       console.log(response);
//     } else {
//       //hata
//       console.log("hata");
//     }
//   }
// );

// request.put(
//   "https://jsonplaceholder.typicode.com/albums/10",
//   {
//     userId: 150,
//     title: "Thriller  2",
//   },
//   function (err, response) {
//     if (err === null) {
//       //basarılı
//       console.log(response);
//     } else {
//       //hata
//       console.log("hata");
//     }
//   }
// );

request.delete(
  "https://jsonplaceholder.typicode.com/albums/",
  function (err, response) {
    if (err === null) {
      //basarılı
      console.log(response);
    } else {
      //hata
      console.log(err);
    }
  }
);
