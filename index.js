const ajouterbutton = document.getElementById("ajouter")
const xmodale = document.getElementById("closeModal")
const modale = document.getElementById("modalOverlay")
const saveModal = document.getElementById("addPlayer")
const anuller = document.getElementById("cancelModal")
const countplayer = document.getElementById("countPlayer")
const listBntouce = [ { name: "Modric", nubmer: 10, post: "CM", inlineup: false }]


//aficher les jouuers


function showPlayer() {
    const PlayerList = document.getElementById("PlayerList")
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
              
                    <select id="position"
                        class="mt-2.5 ml-2 w-full max-w-11 h-8 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm font-semibold text-slate-300  focus:border-blue-500">
                        

                        <option value="GB" class="bg-slate-800 font-bold text-amber-500">
                            GB - Gardien
                        </option>

                        <option value="DG" class="bg-slate-800 font-bold text-blue-500">
                            LB - Défenseur gauche
                        </option>

                        <option value="DC" class="bg-slate-800 font-bold text-blue-500">
                            DC - Défenseur central
                        </option>

                        <option value="MC" class="bg-slate-800 font-bold text-green-500">
                            MC - Milieu central
                        </option>

                        <option value="BU" class="bg-slate-800 font-bold text-red-500">
                            ST - Stircker
                        </option>
                    </select>


                    <div id="PlayerAction" class="  mt-2 text-sm ml-3   ">

                        <i class="fa-solid fa-trash text-slate-400 "></i>
                        <i class="fa-duotone fa-solid fa-pen  text-slate-400 ml-2"></i>
                    </div>
        `)
        PlayerList.appendChild(playercard)
    });



}




// ajoute d un joueur 

const player = []

let error = document.querySelectorAll(".error")


error.forEach(el => {
    el.classList.add("heading")

});
    let eroornmae = document.getElementById("nameerror")
    let posterror = document.getElementById("posterror")
    let numbererror = document.getElementById("nbrerror")
function ajouterPlayer() {
    //eroor handling 
    let finderror = false

 


    const playernameinp = document.getElementById("playerName")
    const playernumberinp = document.getElementById("playerNumber")
    let namevalue = ""
    let numbervalue = 0
   let haseror=false

    //chnager valeur de name // hander ereur de nom 
    playernameinp.addEventListener('blur', (e) => {
      
        let nmRgx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæœÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ ,.'-]{3,10}$/
        namevalue = e.target.value
        if (nmRgx.test(namevalue)) {
            eroornmae.classList.add("heading")
               haseror=true


     
        } else {
            eroornmae.classList.remove("heading")
             haseror=false
        }

    })



    //chnager value nombre et handling des ereur 
    playernumberinp.addEventListener('blur', (e) => {
        numbervalue = e.target.value
          console.log(listBntouce)
            let found = false
            listBntouce.forEach(element => {
               if(element.nubmer==numbervalue){
                found=true
              
               }
            });
       
        if(found||numbervalue<1||numbervalue>99){
            numbererror.classList.remove('heading')
            haseror=true
        }else{
          numbererror.classList.add('heading')
          haseror=false
        
 } 
 
}
 
) 

    //chnger valeur de post
    let post = ""
    const postionparent = document.getElementById("positionPlaye")
    postionparent.addEventListener("click", (e) => {
        let btn = e.target.closest('.position')

        if (!btn) return
        post = btn.dataset.position


    })

    //validation de modal
   
  

    saveModal.onclick = (e) => {
       
          if(namevalue.trim()==="" ){
    eroornmae.classList.remove("heading")
     haseror=true
    }else{
        eroornmae.classList.add("heading")
     haseror=false
    }
    
    if(numbervalue==0 ){
    numbererror.classList.remove("heading")
    haseror=true
    }else{
       numbererror.classList.add("heading")
    haseror=false
    }
     if(post.trim()===""){
        e.preventDefault()
        posterror.classList.remove("heading")
    }else if(haseror){
     e.preventDefault()
    }else{ 

     const sucssec=document.getElementById("sucssec")
        let newplayer={ name: namevalue, nubmer: numbervalue, post: post, inlineup: false }
        listBntouce.push(newplayer)
          showPlayer()
        
        //renitialisser les ereuur et les valeur
        playernameinp.value=""
        playernumberinp.value="0"
        namevalue=""
        numbervalue="0"
        post=""
        posterror.classList.add("heading")
        eroornmae.classList.add("heading")
        numbererror.classList.add("heading")
         
         modale.classList.add("heading")
sucssec.classList.remove("heading")
setTimeout(()=>{
   sucssec.classList.add("heading") 
},3000)

    }
}

}
//manupilation de modal
ajouterbutton.onclick = () => {
    modale.classList.remove("heading")
        posterror.classList.add("heading")
        eroornmae.classList.add("heading")
        numbererror.classList.add("heading")
}
xmodale.onclick = () => {
    modale.classList.add("heading")
        posterror.classList.add("heading")
        eroornmae.classList.add("heading")
        numbererror.classList.add("heading")
}

anuller.onclick = () => {
    modale.classList.add("heading")
        posterror.classList.add("heading")
        eroornmae.classList.add("heading")
        numbererror.classList.add("heading")
}

showPlayer()
ajouterPlayer()








