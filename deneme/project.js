const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const form = document.querySelector("#film-form");
const filmList = document.querySelector("#films");
const clearFilms = document.querySelector("#clear-films");

allEvents();

function allEvents() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function addLoad() {
    let films = Storage.getFilmFromStorage();
    UI.loadedFilms(films);
    filmList.addEventListener("click", deleteFilm);
    clearFilms.addEventListener("click", clearAllFilms);
  });
}

function addFilm(e) {
  const title = titleInput.value;
  const director = directorInput.value;
  const url = urlInput.value;

  if (title === "" || director === "" || url === "") {
    // Hata
    UI.displayMessage("Tüm alanları doldurmalısınız..", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    Storage.addFilmToStorage(newFilm);
    UI.addFilmToUI(newFilm);
    UI.displayMessage("Film Başarıyla Eklendi.", "success");
  }
  UI.clearInput(titleInput, directorInput, urlInput);
  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessage("Başarıyla Silindi.", "success");
  }
}

function clearAllFilms() {
  if (confirm("Tümünü silmek istediğinizden Emin misiniz ?")) {
    UI.clerAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}
