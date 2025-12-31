localStorage.setItem("apprenant", JSON.stringify({ nom: "ded", prenom: "Jde", groupe: "Groupe A", absences: 2, retards: 3 }));
let data=JSON.parse(localStorage.getItem("apprenant"));

document.getElementById("name").textContent=data.nom +" "+ data.prenom;
document.getElementById("group").textContent=data.groupe;
document.getElementById("status").textContent=calculerStatut(data.absences,data.retards)
function calculerStatut(absences, retards) { 
if(absences>= 2||retards>= 3){
     return "Absent fréquent ";
        }
 else if(absences===1||retards===1||retards===2) {
     return "À surveiller "; 
    } 
 else{ 
    return "Assidu"; 
    } 
}
