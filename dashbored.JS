let data = JSON.parse(localStorage.getItem("data")) || [];
const btn = document.getElementById("nav-toggle");
const menu = document.getElementById("navbar-default");
const change_mode=document.getElementById("change_mode");
const historique = document.getElementById("historique")
const ajouter_btn=document.getElementById("ajouter_btn");
const ajouter_modal=document.getElementById("ajouter_modal");

const date=document.getElementById("dateTd")
const absence=document.getElementById("absenceTd")
const retard=document.getElementById("retardTd")
const motif=document.getElementById("motifTd")

const dateInput   = document.getElementById('date_input');
const absentInput = document.getElementById('absent_input');
const retardInput = document.getElementById('retard_input');
const motifInput  = document.getElementById('motif_input');

change_mode.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark"); 
})
btn.addEventListener("click",()=>{
const open = menu.classList.toggle("hidden");
btn.setAttribute("aria-expanded",!open);
});
function ajouter(){
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push({
    date: dateInput.value,
    absence: absentInput.value,
    retard: retardInput.value,
    motif: motifInput.value
  });
  localStorage.setItem("data", JSON.stringify(data));
  display();
dateInput.value = "";
absentInput.value = "";
retardInput.value = "";
motifInput.value = "";
}
function display(){
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  
  for (let i = 0; i < data.length; i++) {
    tableBody.innerHTML += `
      <tr>
        <td>${data[i].date}</td>
        <td>${data[i].absence}</td>
        <td>${data[i].retard}</td>
        <td>${data[i].motif}</td>
      </tr>
    `;
  }
}
ajouter_modal.addEventListener('click', ajouter);
display();

const ctx = document.getElementById("lineChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Total rows"],
    datasets: [{
      label: "Total",
      data: [data.length]
    }]
  }
});

