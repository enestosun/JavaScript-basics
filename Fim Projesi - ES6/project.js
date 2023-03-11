const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearBtn = document.querySelector("#clear-films");




//  Tüm eventleri yükleme 
eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    })
    cardBody.addEventListener("click",deleteFilm);
    clearBtn.addEventListener("click",deleteAllFilms);
}

function addFilm(e){
    const title = titleInput.value;
    const director = directorInput.value;
    const url = urlInput.value;


    if(title === "" || director === "" || url === ""){
        //Hata
        UI.displayMessages("Bilgileri Eksik girdiniz !! ", "danger");
    }
    else{
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);  //  Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage a film ekleme
        UI.displayMessages("Film Başarıyla Eklendi !!" , "success");
    }


    UI.clearInput(titleInput,directorInput,urlInput);
    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target);

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı .", "success");
    }
}

function deleteAllFilms(){
    if(confirm("Emin misiniz ? ")){
        UI.deleteAllFilmsUI();
        Storage.deleteAllFilmsStorage();
    }
}