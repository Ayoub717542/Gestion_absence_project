let apprenants = JSON.parse(localStorage.getItem("apprenants"))||[];


  const form = document.getElementById("form");
afficher();
document.getElementById("addBtn").addEventListener("click", () => {
    document.getElementById("addBtn").style.display='none'

  form.innerHTML=`<form id="apprenantForm" class="max-w-sm maax-auto">
  <div class="mb-5 flex justify-center">
   <input type="text" id="id" value="Id" class="border px-2 py-1 rounded w-1/4" required></div>
   <div class="mb-5 flex justify-center"> 
  <input type="text" id="nom" value="Nom" class="border px-2 py-1 rounded w-1/4" required></div>
  <div class="mb-5 flex justify-center"> 
  <input type="text" id="prenom" value="Prénom" class="border px-2 py-1 rounded w-1/4" required></div>

  <div class="mb-5 flex justify-center"> 
  <select id="groupe" class="border px-2 py-1 rounded w-1/4" required> 
  <option value="">-- Choisir un groupe --</option> 
  <option value="Groupe A">Groupe A</option> 
  <option value="Groupe B">Groupe B</option> 
  <option value="Groupe C">Groupe C</option> 
  <option value="Groupe D">Groupe D</option> </select>
  <button type="submit" class="bg-gray-800 text-white px-2 py-1 rounded">Ajouter</button> </form>`
});
form.addEventListener("submit",()=>{
    const id= document.getElementById("id").value;
    const nom=document.getElementById("nom").value;
    const prenom=document.getElementById("prenom").value;
    const groupe=document.getElementById("groupe").value;
    apprenants.push({id,nom,prenom,groupe});
    localStorage.setItem("apprenants",JSON.stringify(apprenants));
    document.getElementById("addBtn").style.display='';
    afficher();
})
function afficher() {
    console.log(apprenants.length)
        const tbody = document.getElementById("TableBody");
        tbody.innerHTML = "";
        apprenants.forEach((e,index) => {
        const tr =document.createElement("tr");
        tr.innerHTML=`<td class="px-4 py-2 border border-gray-300">${e.id}</td>
        <td class="px-4 py-2 border border-gray-300">${e.nom}</td>
        <td class="px-4 py-2 border border-gray-300">${e.prenom}</td>
        <td class="px-4 py-2 border border-gray-300">${e.groupe}</td>
        <td class="px-4 py-2 border border-gray-300"><button class=" rounded px-2 py-1 text-white" onclick=modifier(${index})><img class="w-4" src="edit.png"></button>
        <button class=" rounded text-white px-2 py-1 " onclick=suppr(${index}) ><img class="w-4" src="images/delete.png"></button></td>`;
        tbody.appendChild(tr);
    });
   
    
}
function modifier(i) {
      form.innerHTML=`<form id="apprenantForm" class="mx-w-sm mx-auto">
  <div class="mb-5 flex justify-center">
   <input type="text" id="id" value="${apprenants[i].id}" class="border px-2 py-1 rounded w-1/4" required></div>
   <div class="mb-5 flex justify-center"> 
  <input type="text" id="nom" value="${apprenants[i].nom}" class="border px-2 py-1 rounded w-1/4" required></div>
  <div class="mb-5 flex justify-center"> 
  <input type="text" id="prenom" value="${apprenants[i].prenom}" class="border px-2 py-1 rounded w-1/4" required></div>
  <div class="mb-5 flex justify-center"> 
    <select id="groupe" class="border px-2 py-1 rounded w-1/4" required> 
  <option value="">${apprenants[i].groupe}</option> 
  <option value="Groupe A">Groupe A</option> 
  <option value="Groupe B">Groupe B</option> 
  <option value="Groupe C">Groupe C</option> 
  <option value="Groupe D">Groupe D</option> </select>  
  <div class="mb-5 flex justify-center"> 
  <button id="btn" class="bg-gray-800 text-white px-2 py-1 rounded">OK</button> </form>`
    btn.addEventListener("click",()=>{
        const id=document.getElementById("id").value;
        const nom=document.getElementById("nom").value;
        const prenom=document.getElementById("prenom").value;
        const groupe=document.getElementById("groupe").value;
        apprenants[i].id=id;
        apprenants[i].nom=nom;
        apprenants[i].prenom=prenom;
        apprenants[i].groupe=groupe;
        localStorage.setItem("apprenants",JSON.stringify(apprenants));

    });

    localStorage.setItem("apprenants",JSON.stringify(apprenants));
    afficher();
}
function suppr(i) {
    apprenants.splice(i,1);
    localStorage.setItem("apprenants",JSON.stringify(apprenants));
    afficher();
}