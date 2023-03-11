class Storage {
  static getSearchedUsersFromStorage() {
    //  Tüm kullanıcıları al
    let users;
    if (localStorage.getItem("searched") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }

    return users;
  }

  static addSearchedUserToStorage(userName) {
    //Kullanıcı Ekle

    let users = this.getSearchedUsersFromStorage();

    if (users.indexOf(userName) === -1) {
      users.push(userName);
    }

    localStorage.setItem("searched", JSON.stringify(users));
  }

  static clearAllSearchFromStorage() {
    localStorage.removeItem("searched");
  }
}
