let data = JSON.parse(localStorage.getItem("data")) || [];
const btn = document.getElementById("nav-toggle");
const menu = document.getElementById("navbar-default");
const change_mode=document.getElementById("change_mode");
const historique = document.getElementById("historique")

const date=document.getElementById("dateTd")
const absence=document.getElementById("absenceTd")
const retard=document.getElementById("retardTd")

change_mode.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark"); 
})
btn.addEventListener("click",()=>{
const open = menu.classList.toggle("hidden");
btn.setAttribute("aria-expanded",!open);
});
function display() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("apprenants")) || [];
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
}
let total=document.getElementById("taille")
total.textContent=data.length;

let absents  = JSON.parse(localStorage.getItem("absents")) || []; 
let new_historique  = JSON.parse(localStorage.getItem("historique")) || [];

let totaletudinet = students.length;
let totalAbsents  = absents.length;
let totalHistorique  = new_historique.length;

const ctx = document.getElementById("lineChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Total"],
    datasets: [{
      label: "Total",
      data: [totaletudinet,totalAbsents,totalHistorique]
    }]
  }
}
);

