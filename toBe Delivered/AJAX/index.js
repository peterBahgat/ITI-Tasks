var fetchButton = document.getElementById('fetch-btn');
function render(response) {
  for (var i = 0; i < response.length; i++) {
    var row = document.createElement('tr');
    var tableBody = document.getElementById('body');
    row.innerHTML = `<td>${response[i].id}</td><td>${response[i].name}</td><td>${response[i].username}</td><td>${response[i].address.street}, ${response[i].address.city}</td><td>${response[i].phone}</td><td>${response[i].website}</td><td>${response[i].company.name}</td>`;
    tableBody.appendChild(row);
  }
}

function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.response);
      console.log(data);
      if (!data) {
        throw new Error('error');
      }
      render(data);
    }
  };
  xhr.send();
}

fetchButton.addEventListener('click', fetchData);
