const ajouterbutton = document.getElementById("ajouter")
const xmodale = document.getElementById("closeModal")
const modale = document.getElementById("modalOverlay")
const modifmodale = document.getElementById("modifmodalOverlay")
const saveModal = document.getElementById("addPlayer")
const anuller = document.getElementById("cancelModal")
const countplayer = document.getElementById("countPlayer")
const listBntouce = [ { name: "Modric", nubmer: 10, post: "CM", inlineup: false  , positoninlinup:"CM1"},{ name: "Modric", nubmer: 11, post: "CM", inlineup: false  , positoninlinup:"st1"}]
 const PlayerList = document.getElementById("PlayerList")
 const terrainPostes = {
    gk: document.getElementById('gk'),
    lb: document.getElementById('lb'),
    rb: document.getElementById('rb'),
    cb1: document.getElementById('cb1'),
    cb2: document.getElementById('cb2'),
    lm: document.getElementById('lm'),
    cm1: document.getElementById('cm1'),
    cm2: document.getElementById('cm2'),
    rm: document.getElementById('rm'),
    st1: document.getElementById('st1'),
    st2: document.getElementById('st2')
};
 


 function showInlinup(){
    //clean all post 
    Object.keys(terrainPostes).forEach((key)=>{
    const post=terrainPostes[key]
         let postplayer=post.querySelector('button')
                let number=post.querySelector('div')
                number.textContent=""

                postplayer.textContent=key.toUpperCase()
    })
    //show player in post from aarray
    listBntouce.forEach((el)=>{
            if (el.positoninlinup==="libre"){
                return
            }else{
                let post = terrainPostes[el.positoninlinup.toLowerCase()];
                let postplayer=post.querySelector('button')
                let number=post.querySelector('div')
                number.textContent=el.nubmer 

                postplayer.textContent=el.name

               
            }
    })
 }
//aficher les jouuers
showInlinup()

function showPlayer() {
   
PlayerList.innerHTML=""
    countplayer.textContent = `${listBntouce.length} Joueurs`
    let Tshirt = ""
    let cardcolor = ""
    listBntouce.forEach(el => {
        if (el.post === "GK") {
            Tshirt = "./gk.png"
        }
        else if (el.post === "CB" || el.post === "LB" || el.post === "RB") {
            Tshirt = "./def.png"
        } else if (el.post === "CM") {
            Tshirt = "./mid.png"
        } else {
            Tshirt = "./att.png"
        }
        const playercard = document.createElement("li")
        const twclass = "flex p-2 border-b-1 border-sky-400"
        twclass.split(" ").forEach(el => {
            playercard.classList.add(el)
        });
        playercard.insertAdjacentHTML("beforeend", `
        <button class="">
                        <div
                            class="gk  bg w-8 h-8 bg-[url(${Tshirt})] bg-cover bg-center bg-no-repeat  pt-2 text-slate-200 font-bold text-sm ">
                            ${el.nubmer}</div>
                    </button>
                    <span class="ml-2 leading-6 w-14.5">
                        <p class="text-slate-200 font-bold text-sm ">${el.name}</p>
                        <p class="text-slate-400 font-semibold text-sm">${el.post}</p>
                    </span>
              
                 <select id="positionchange" data-number="${el.nubmer}"
    class="mt-2.5 ml-2 w-full max-w-11 h-8 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm font-semibold text-slate-300 focus:border-blue-500">
        <option value="Libre" ${el.positoninlinup === "Libre" ? "selected" : ""} class="bg-slate-800 font-bold text-slate-500">
            Libre
        </option>

        <option value="GB" ${el.positoninlinup === "GB" ? "selected" : ""} class="bg-slate-800 font-bold text-amber-500">
            GB - Gardien
        </option>

        <option value="CB1" ${el.positoninlinup === "CB1" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            CB2 - Défenseur gauche
        </option>

         <option value="CB2" ${el.positoninlinup === "CB2" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            CB1 - Défenseur gauche
        </option>

         <option value="LB" ${el.positoninlinup === "LB" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            LB - Défenseur gauche
        </option>

         <option value="RB" ${el.positoninlinup === "RB" ? "selected" : ""} class="bg-slate-800 font-bold text-blue-500">
            RB - Défenseur gauche
        </option>

        <option value="CM1" ${el.positoninlinup === "CM1" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            CM1 - Milieu central
        </option>

         <option value="CM2" ${el.positoninlinup === "CM2" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            CM2 - Milieu central
        </option>

        <option value="LM" ${el.positoninlinup === "LM" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            LM - Milieu central
        </option>

        <option value="RM" ${el.positoninlinup === "RM" ? "selected" : ""} class="bg-slate-800 font-bold text-green-500">
            RM- Milieu central
        </option>

        <option value="ST1" ${el.positoninlinup === "ST1" ? "selected" : ""} class="bg-slate-800 font-bold text-red-500">
            ST 1- Stircker
        </option>

        <option value="ST2" ${el.positoninlinup === "ST2" ? "selected" : ""} class="bg-slate-800 font-bold text-red-500">
            ST 2- Stircker
        </option>
</select>


                    <div id="PlayerAction" class="  mt-2 text-sm ml-3   ">

                        <i class="fa-solid fa-trash text-slate-400 " id="deleteplayer" data-number=${el.nubmer}></i>
                        <i class="fa-duotone fa-solid fa-pen  text-slate-400 ml-2" id="modifierplayer" data-number=${el.nubmer}></i>
                    </div>
        `)
        PlayerList.appendChild(playercard)
    });



}




// ajoute player


const playerNameInp = document.getElementById("playerName");
const playerNumberInp = document.getElementById("playerNumber");

const nameError = document.getElementById("nameerror");
const postError = document.getElementById("posterror");
const numberError = document.getElementById("nbrerror");
const success = document.getElementById("sucssec");

const positionParent = document.getElementById("positionPlaye");


let playerToEdit = null;
let selectedPost = "";

// Validation number
function validerNom(name) {
    const nmRgx = /^[a-zA-ZàáâäãåąčćęèéêëėįíîïłńòóôöõøùúûüųūÿýżźñçčšžæœÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ ,.'-]{3,10}$/;

    return nmRgx.test(name.trim());
}

// Validation number
function validerNumero(number) {
    const numero = Number(number);

    if (!Number.isInteger(numero) || numero < 1 || numero > 99) {
        return false;
    }

    const existe = listBntouce.some((el) => {
        return el.nubmer == numero && el !== playerToEdit;
    });

    return !existe;
}

// delete eror
function cacherErreurs() {
    nameError.classList.add("heading");
    postError.classList.add("heading");
    numberError.classList.add("heading");
}

function fermerModal() {
    modale.classList.add("heading");
    cacherErreurs();
}

function resetModal() {
    playerNameInp.value = "";
    playerNumberInp.value = "";
    selectedPost = "";
    playerToEdit = null;
}

// modal ajoute
function ouvrirAjout() {
    saveModal.textContent="ajouter"
    resetModal();
    cacherErreurs();
    modale.classList.remove("heading");
}

// modal modif
function ouvrirModification(player) {
    saveModal.textContent="modifier"
    playerToEdit = player;

    playerNameInp.value = player.name;
    playerNumberInp.value = player.nubmer;
    selectedPost = player.post;

    cacherErreurs();
    modale.classList.remove("heading");
}

// post select
positionParent.addEventListener("click", (e) => {
    const btn = e.target.closest(".position");

    if (!btn || !positionParent.contains(btn)) return;

    selectedPost = btn.dataset.position;

    postError.classList.add("heading");
});

// form validation
function validerFormulaire() {
    let valide = true;

    if (!validerNom(playerNameInp.value)) {
        nameError.classList.remove("heading");
        valide = false;
    } else {
        nameError.classList.add("heading");
    }

    if (!validerNumero(playerNumberInp.value)) {
        numberError.classList.remove("heading");
        valide = false;
    } else {
        numberError.classList.add("heading");
    }

    if (!selectedPost) {
        postError.classList.remove("heading");
        valide = false;
    } else {
        postError.classList.add("heading");
    }

    return valide;
}

// savegarde de modal
function sauvegarderPlayer(e) {
    e.preventDefault();

    if (!validerFormulaire()) return;

    const newPlayer = {
        name: playerNameInp.value.trim(),
        nubmer: Number(playerNumberInp.value),
        post: selectedPost,
        inlineup : false
    };

    if (playerToEdit) {
        
        playerToEdit.name = newPlayer.name;
        playerToEdit.nubmer = newPlayer.nubmer;
        playerToEdit.post = newPlayer.post;
     showInlinup()
    } else {
    
        listBntouce.push(newPlayer);
    }

    showPlayer();

    fermerModal();
    resetModal();

    success.classList.remove("heading");

    setTimeout(() => {
        success.classList.add("heading");
    }, 3000);
}


PlayerList.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("#deleteplayer");
    const editBtn = e.target.closest("#modifierplayer");

    if (deleteBtn) {
        const number = Number(deleteBtn.dataset.number);

        const index = listBntouce.findIndex((el) => {
            return el.nubmer === number;
        });

        if (index !== -1) {
            listBntouce.splice(index, 1);
            showPlayer();
        }

    } else if (editBtn) {
        const number = Number(editBtn.dataset.number);

        const player = listBntouce.find((el) => {
            return el.nubmer === number;
        });

        if (player) {
            ouvrirModification(player);
        }
    }
});


ajouterbutton.addEventListener("click", ouvrirAjout);

xmodale.addEventListener("click", fermerModal);
anuller.addEventListener("click", fermerModal);

saveModal.addEventListener("click", sauvegarderPlayer);





// CNAGER LE POST 
PlayerList.addEventListener('change',(e)=>{
const chngerposition=e.target.closest("#positionchange")
if(chngerposition){
console.log(chngerposition.value)
}else{
    return
}
}
)
showPlayer()












