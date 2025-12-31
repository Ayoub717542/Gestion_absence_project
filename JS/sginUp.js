const prenom = document.getElementById("prenom")
const nom = document.getElementById("nom")
const groupe = document.getElementById("groupe")
const password = document.getElementById("password")
const btn = document.getElementById("signUpbtn")
function ajouter(){
    let data=JSON.parse(localStorage.getItem("data")) ||[];
    data.push({
        prenom: prenom.value.trim().toLowerCase(),
        nom: nom.value.trim().toLowerCase(),
        groupe: groupe.value,
        password: password.value
    })
localStorage.setItem("data", JSON.stringify(data));
}
btn.addEventListener("click", ajouter)