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



//storage & addevente to form input 
const   playernameinp=document.getElementById("playerName")
const playernumberinp=document.getElementById("playerNumber")
let namevalue=""
let numbervalue=0
//chnager valeur de name
playernameinp.addEventListener('change',(e)=>{
namevalue=e.target.value

})
//chnager value nombre
playernumberinp.addEventListener('change',(e)=>{
numbervalue=e.target.value
})

//chnger valeur de post
let post ="" 
const postionparent=document.getElementById("positionPlaye")
postionparent.addEventListener("click", (e)=>{
    let btn =e.target.closest('.position')
    
    if(!btn) return 
 post = btn.dataset.position


})
 console.log(post)




// ajoute d un joueur 
const player=[]
  
function ajouterPlayer(){
 
}