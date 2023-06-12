import { addUser,deleteUser,editUser} from "./api.js";
let box = document.querySelector('.box')
let btnAdd = document.querySelector('.btnAdd')

let form = document.querySelector('.form')
let form2 = document.querySelector('.form2')



// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnAdd.onclick = function() {
  modal.style.display = "block";
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

form.onsubmit=(event)=>{
    event.preventDefault()
    let newUser={
        name:event.target['name'].value,
        email:event.target['email'].value,
        completed:false,
    }
    addUser(newUser)
    form.reset()
    modal.style.display='none'
}

function editModal(el){
    modal2.style.display='block'
    form2['name'].value = el.name
    form2['email'].value = el.email
    form2.onsubmit=(ev)=>{
        ev.preventDefault()
        let newObj={
            name:ev.target['name'].value,
            email:ev.target['email'].value,
        }
        editUser(el.id,newObj)
        form2.reset()
    }
}


function getData(data){
    box.innerHTML=''
    data.forEach((e)=>{
        let container = document.createElement('tr')

        let id = document.createElement('td')
        id.innerHTML=e.id

        let name = document.createElement('td')
        name.innerHTML=e.name

        let email = document.createElement('td')
        email.innerHTML=e.email

        let completed = document.createElement('td')
        completed.innerHTML=e.completed

        let tdBtns = document.createElement('td')
        let info = document.createElement('button')
        info.innerHTML='Show'
        info.classList.add('info')
        info.onclick=()=>{
            modal1.style.display='block'
            const box2 = document.querySelector('.box2')
            box2.innerHTML=''
            let div = document.createElement('div')

            let name = document.createElement('h1')
            name.innerHTML=`Name: ${e.name}`

            let email = document.createElement('h2')
            email.innerHTML=`email: ${e.email}`

            div.append(name,email)
            box2.appendChild(div)
        }

        let edit = document.createElement('button')
        edit.innerHTML='Edit'
        edit.classList.add('edit')
        edit.onclick=()=>{
            editModal(e)
        }
        modal2.style.display='none'

        let del = document.createElement('button')
        del.innerHTML = 'Delete'
        del.classList.add('del')
        del.onclick=()=>{
            deleteUser(e.id)
        }
        if(e.completed){
            name.classList.toggle('com')
            completed.classList.toggle('compl')
        }else{
            completed.style.backgroundColor='red'
        }

        let com = document.createElement('input')
        com.type = 'checkbox'
        com.checked = e.completed
        // console.log(com.checked)
        com.onclick=()=>{
            e.completed=!e.completed
            editUser(e.id,e)
        }

        tdBtns.append(info,edit,del,com)


        container.append(id,name,email,completed,tdBtns)
        box.appendChild(container)
    })
}

export {getData}