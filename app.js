var contenido = document.querySelector("#api");
fetch("https://api.github.com/users/karensgo/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    var cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      contenido.innerHTML += `
			 <div class="card">
				<a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
			 </div>
			 `;
    }
  });

function validateForm() {
  var x =
    document.forms["formulario"][("form-name", "form-email", "form-asunto")].value;
  if (x == "") {
    alert("voce debe pre-encher todos os campos!!!!");
    console.log(x);
    return false;
  }
}