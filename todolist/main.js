let box = document.querySelector('.userTable')
let addBtn = document.querySelector('.btn-add')
let inpName = document.querySelector('.inpName')
let inpAge = document.querySelector('.inpAge')
let inpMar = document.querySelector('.inpMar')

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnAdd = document.querySelector(".qwe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnAdd.onclick =()=>{
    modal.style.display = 'block'
}
addBtn.onclick = function() {
  let newUser = { 
    id:new Date().getTime(),
    name:inpName.value,
    age:inpAge.value,
    married:inpMar.value,
    complete:false
  }
  data.push(newUser)
  get()
  modal.style.display='none'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let data = [
    {
        id:1,
        name:'Husenov Hasan',
        age:18,
        married:'NO',
        complete:false
    }
]


function deleteUser(id){
    data = data.filter((e)=>e.id!=id)
    get()
}

function completeUser(id){
    data = data.map((e)=>{
        if(e.id ==id){
            e.complete =!e.complete
        }
        return e
    })
    get()
}

let idx = null
function editModal(id){

}



function get(){
    box.innerHTML=''
    data.forEach((e,ind)=>{
        let tr = document.createElement('tr')
        tr.classList.add('tr')
        let idAdd = document.createElement('td')
        idAdd.innerHTML = ind+1;
        idAdd.classList.add('td')

        let nameAdd = document.createElement('td')
        nameAdd.innerHTML = e.name
        nameAdd.classList.add('td')
        if(e.complete){
            tr.classList.toggle('com')
        }

        let ageAdd = document.createElement('td')
        ageAdd.innerHTML = e.age
        ageAdd.classList.add('td')

        

        let marriedAdd = document.createElement('td')
        marriedAdd.innerHTML = e.married
        marriedAdd.classList.add('td')

        let tdBtn = document.createElement('td')

        let btnDel = document.createElement('button')
        btnDel.innerHTML = 'delete'
        tdBtn.classList.add('td')
        btnDel.onclick=()=>{
            deleteUser(e.id)
        }

        let btnCom = document.createElement('input')
        btnCom.classList.add('compl')
        btnCom.type = 'checkbox'
        btnCom.checked = e.complete
        btnCom.onclick =()=>{
            completeUser(e.id)
        }

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'Edit'
        btnEdit.onclick=()=>{
            editModal(e.id)
        }
        






        tr.appendChild(idAdd)
        tr.appendChild(nameAdd)
        tr.appendChild(ageAdd)
        tr.appendChild(marriedAdd)

        tdBtn.appendChild(btnDel)
        tdBtn.appendChild(btnEdit)
        tdBtn.appendChild(btnCom)
        // divBtns.appendChild(tdBtn)

        tr.appendChild(tdBtn)

        box.appendChild(tr)
    })
}
get()


let switc = document.querySelector('.switch')
let body = document.querySelector('body')
let checkbox = document.querySelector('.checkbox')
switc.onclick=()=>{
    if(checkbox.checked){
        body.classList.toggle('switc')
    }
}