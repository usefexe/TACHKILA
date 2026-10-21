const ajouterbutton=document.getElementById("ajouter")
const xmodale=document.getElementById("closeModal")
const modale=document.getElementById("modalOverlay")
const saveModal=document.getElementById("addPlayer")
const anuller=document.getElementById("cancelModal")




//modale maunipliation (show/head)
ajouterbutton.onclick=()=>{
    modale.classList.remove("heading")
}
xmodale.onclick=()=>{
    modale.classList.add("heading")
}
saveModal.onclick=()=>{
    modale.classList.add("heading")
}
anuller.onclick=()=>{
    modale.classList.add("heading")
}

//