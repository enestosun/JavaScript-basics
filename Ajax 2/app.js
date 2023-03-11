document.querySelector("#ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employees.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let list = document.querySelector("#employees");

      let employes = JSON.parse(this.responseText);
      console.log(employes);

      employes.forEach((emp) => {
        list.innerHTML += `
        <tr>
          <td>${emp.name}</td>
          <td>${emp.department}</td>
          <td>${emp.salary}</td>
        </tr>
        `;
      });
    }
  };

  xhr.send();
}
