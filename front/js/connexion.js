    // Récupération des données de l'API au format json + affichage
    fetch('http://127.0.0.1/api/') //fetch sur l'url de l'API
    .then(res => { // renvoie un premiere prommesse
        if (res.ok) {
            return res.json() // Si res ok, retourne un objet json
        } else {
            Promise.reject(res.status); // sinon, me retourne la cause de l'echec
        };
    })
    .then(data => { // si response ok, renvoie d'une seconde promesse
        console.log(data)       
    }).catch((error) => {
        console.error(error);
    });

    let loginButton = document.getElementById('submit');

    loginButton.onclick = function submitButton() {

    formValidation.addEventListener('submit', submitButton);
    // Validation du mail
    let mailValidation = document.getElementById('mail').value;
    let mailRGEX = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    let mailResult = mailRGEX.test(mailValidation)
console.log(mailResult);

if (mailResult) { 

let userInformation = JSON.stringify({
    email:emailInput.value,
    password:passwordInput.value,
});

fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: userInformation,
})
.then(response => {
    return response.json()
})
.then (data => { 
    console.log(data);
})
.catch (erreur => {
    console.log(erreur);
}); 

location.href = "../html/forum.html"; 
} else if (mailResult == false) {
    mailInput.style.backgroundColor = '#ff00005d';
}}