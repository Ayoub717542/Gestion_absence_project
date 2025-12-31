let data = JSON.parse(localStorage.getItem("apprenants"))
let user = JSON.parse(localStorage.getItem("loggedUser"))
let admin = JSON.parse(localStorage.getItem("loggedadmin"));
let total = document.getElementById("taille")
const btn = document.getElementById("nav-toggle");
const menu = document.getElementById("navbar-default");
const change_mode = document.getElementById("change_mode");
const historique = document.getElementById("historique")

const date = document.getElementById("dateTd")
const absence = document.getElementById("absenceTd")
const retard = document.getElementById("retardTd")

change_mode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
})
if (user && document.getElementById("userName")) {
  document.getElementById("userName").textContent =
    user.prenom + " " + user.nom;
}
if (admin && document.getElementById("AdminName")) {
  document.getElementById("AdminName").textContent =
    admin.prenom_admin + " " + admin.nom_admin;
}
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("hidden");
  btn.setAttribute("aria-expanded", !open);
});
function display() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  let filteredData = data.filter((etu) => etu.nom.toLowerCase() === user.nom.toLowerCase()
    && etu.prenom.toLowerCase() == user.prenom.toLowerCase());
  console.log("Filtered data:", data);
  let recent = data.slice(-5);
  for (let i = 0; i < recent.length; i++) {
    tableBody.innerHTML += `
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <td class="px-6 py-4">${recent[i].date}</td>
          <td class="px-6 py-4 text-center">${recent[i].absence}</td>
          <td class="px-6 py-4 text-center">${recent[i].retard}</td>
          <td class="px-6 py-4 text-blue-500 cursor-pointer"><a href="historique.html">Voir Détails</a></td>
        </tr>
      `;
  }
  console.log(filteredData)
}
if (!user) {
  window.location.href = "login.html";
}

total.textContent = data.length;
let absents = JSON.parse(localStorage.getItem("absents")) || [];
let new_historique = JSON.parse(localStorage.getItem("historique")) || [];
let totaletudinet = data.length;
let totalAbsents = absents.length;
let totalHistorique = new_historique.length;

const chart_infoes = document.getElementById("lineChart");
new Chart(chart_infoes, {
  type: "bar",
  data: {
    labels: ["Étudiants", "Absences", "Historique"],
    datasets: [{
      label: "Total",
      data: [totaletudinet, totalAbsents, totalHistorique]
    }]
  }
}
);
