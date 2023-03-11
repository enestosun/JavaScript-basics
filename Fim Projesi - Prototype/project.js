const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearBtn = document.querySelector("#clear-films");


// UI  objesini başlatma

const ui = new UI();

// Storage Objesi 

const storage = new Storage();

//  Tüm eventleri yükleme 
eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Bilgileri Eksik girdiniz !! ", "danger");
    }
    else{
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);  //  Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage a film ekleme
        ui.displayMessages("Film Başarıyla Eklendi !!" , "success");
    }


    ui.clearInput(titleInput,directorInput,urlInput);
    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target);

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi başarılı .", "success");
    }
}

function deleteAllFilms(){
    if(confirm("Emin misiniz ? ")){
        ui.deleteAllFilmsUI();
        storage.deleteAllFilmsStorage();
    }
}