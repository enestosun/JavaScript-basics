//  Elementleri seçelim

const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearSearch = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");
const searchCardbody = document.querySelector(".search");
const github = new Github();
const ui = new UI();
eventListener();

function eventListener() {
  githubForm.addEventListener("submit", getData);
  clearSearch.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearch);
}

function getData(e) {
  let userName = nameInput.value.trim();
  if (userName === "") {
    ui.showMessage("Lütfen Alanları doldurun.", "danger");
  } else {
    github
      .getGithubData(userName)
      .then((response) => {
        if (response.user.message === "Not Found") {
          //HATA
          ui.showMessage("Kullanıcı Bulunamadı ", "danger");
        } else {
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
          ui.addSearchedUserToUI(userName);
          Storage.addSearchedUserToStorage(userName);
        }
      })
      .catch((err) => ui.showMessage(err, "danger"));
  }

  ui.clearInput();

  e.preventDefault();
}

function clearAllSearched() {
  if (confirm("Emin misiniz ? ")) {
    Storage.clearAllSearchFromStorage();
    ui.clearAllSearchedFromUI();
  }
}

function getAllSearch() {
  let users = Storage.getSearchedUsersFromStorage();
  let result = "";
  users.forEach((user) => {
    result += `<li class="list-group-item">${user}</li>`;
  });
  lastUsers.innerHTML = result;
}
