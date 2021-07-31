
    let submitButton = document.getElementById('submit');

    submitButton.onclick = function submitButton() {


let firstNameInput = document.getElementById('prenom');
let nameInput = document.getElementById('nom');
let emailInput = document.getElementById('mail');
let passwordInput = document.getElementById('password');


let userInformation = JSON.stringify({
    firstName:firstNameInput.value,
    name:nameInput.value,
    email:emailInput.value,
    password:passwordInput.value,
});

console.log('là ça va');

fetch('http://localhost:3000/api/users/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    mode: 'cors',
    body: userInformation,
})
.then(response => {
    return response.json()
})
.then (data => { 
    console.log(data);
})
.catch(error => {
    console.error(error);
});

console.log('ça va pas plus')
location.href='./connexion.html';

}