function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
    

    const filmList = document.querySelector("#films");
    // console.log(filmList);

    filmList.innerHTML += `
         <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `;
}


UI.prototype.clearInput = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];

   
    const div = document.createElement("div");
    div.className=  `alert alert-${type}`;
    div.textContent=message;

    cardBody.appendChild(div);
    
    setTimeout(function(){
        div.remove();
    },1700)

}
UI.prototype.loadAllFilms = function(films){
    
    const filmList = document.querySelector("#films");

    films.forEach(function(film){
        filmList.innerHTML += `
         <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `;
    });

}

UI.prototype.deleteFilmFromUI  = function(element){
    // console.log(element.parentElement.parentElement);

    element.parentElement.parentElement.remove();

}

UI.prototype.deleteAllFilmsUI = function(){
    const filmList = document.querySelector("#films");

    while(filmList.firstElementChild != null){
        filmList.firstElementChild.remove();
    }

}