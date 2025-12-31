
const prenomInput = document.getElementById("prenom");
const nomInput = document.getElementById("nom");
const password_input = document.getElementById("password");
const loginbtn = document.getElementById("loginbtn")
const message = document.getElementById("message")
const role = document.getElementById("loginAs");
loginbtn.addEventListener("click", login);

const admins = [
  { prenom_admin: "samir", nom_admin: "samir", password_admin: "admin123" },
  { prenom_admin: "saad", nom_admin: "director", password_admin: "enaa2025" }
];

function login() {
    let users = JSON.parse(localStorage.getItem("data")) || [];
    let found = users.find(user =>
        user.prenom.toLowerCase() === prenomInput.value.trim().toLowerCase() &&
        user.nom.toLowerCase() === nomInput.value.trim().toLowerCase()&&
        user.password === password_input.value
    );
    const foundAdmin = admins.find(
    admin =>admin.prenom_admin === prenomInput.value.trim().toLowerCase() 
    && admin.nom_admin === nomInput.value.trim().toLowerCase()
    && admin.password_admin === password_input.value
  );
    if (found && role.value === "Etudient") {
        localStorage.setItem("loggedUser", JSON.stringify({...found, role}));
        window.location.href = "student_dashbored.html"
    } else if (foundAdmin && role.value === "Admin"){
        localStorage.setItem("loggedadmin",JSON.stringify({...foundAdmin, role}))
        window.location.href = "Index.html"
    }
    else {
        message.classList.remove("hidden");
        message.textContent = "Nom ou prénom incorrect";
    }
}