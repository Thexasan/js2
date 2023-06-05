let box = document.querySelector('.box')
let inpEdit = document.querySelector('.edit')
let inpEdit2 = document.querySelector('.decr')
let btn22 =  document.querySelector('.btn22')
let btnAdd = document.querySelector('.btnAdd')
let inpText = document.querySelector('.inpText')
let inpDesc = document.querySelector('.inpDesc')
let hide = document.querySelector('.hide')

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
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

// Get the modal
var modall = document.getElementById("myModall");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closee")[0];


// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}

let data = [
    {
        id:1,
        title:'The first task tittle',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum quisquam quaerat inventore a veritatis consequatur expedita repudiandae tenetur aliquam.',
        isComplete:false
    },
    {
        id:2,
        title:'The first task tittle',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum quisquam quaerat inventore a veritatis consequatur expedita repudiandae tenetur aliquam.',
        isComplete:false
    },
    {
        id:3,
        title:'The first task tittle',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum quisquam quaerat inventore a veritatis consequatur expedita repudiandae tenetur aliquam.',
        isComplete:false
    },
    {
        id:4,
        title:'The first task tittle',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero illum quisquam quaerat inventore a veritatis consequatur expedita repudiandae tenetur aliquam.',
        isComplete:false
    }

]

//edit
let idx = null
//open the modal user 
function editModalOpen(id){
    let user = data.find((e)=>e.id ==id)
    inpEdit.value=user.title
    inpEdit2.value = user.text
    modall.style.display='block';
    idx=id
}

//edit user
function editUser(){
    data = data.map((e)=>{
        if(e.id==idx){
            e.title=inpEdit.value
            e.text = inpEdit2.value
        }
        return e
    })
    get()
    modall.style.display='none'
}
btn22.onclick =editUser


//delete
function deleteUser(id){
    data = data.filter((e)=>{
        return e.id!=id
    })
    get()
}

//Add
btnAdd.onclick=()=>{
    let newAdd = {
        title:inpText.value,
        text:inpDesc.value,
        isComplete:false,
    } 
    data.push(newAdd)
    modal.style.display='none'
    get()
    inpDesc.value=''
    inpText.value=''
}

//com
function complete(id){
    data = data.map((e)=>{
        if(e.id==id){
            e.isComplete = !e.isComplete
        }
        return e
    })
    get()
}

//get()
function get(){
    box.innerHTML=''
    data.forEach((e)=>{
        let container = document.createElement('div')
        container.classList.add('cont')
        let titleAdd = document.createElement('h1')
        titleAdd.innerHTML=e.title
        if(e.isComplete==true){
            titleAdd.classList.toggle('com')
        }
        let textAdd = document.createElement('p')
        textAdd.innerHTML = e.text

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML='Edit'
        btnEdit.classList.add('Edit')
        btnEdit.onclick = ()=>{
            editModalOpen(e.id)
        }

        let btnDel = document.createElement('button')
        btnDel.innerHTML = 'delete'
        btnDel.classList.add('delete')
        btnDel.onclick =()=>{
            deleteUser(e.id)
        }

        let btnCom = document.createElement('input')
        btnCom.type='checkbox'
        btnCom.checked=e.isComplete
        btnCom.classList.add('completed')
        btnCom.onclick=()=>{
            complete(e.id)
        }

               

        container.appendChild(titleAdd)
        container.appendChild(textAdd)
        container.appendChild(btnEdit)
        container.appendChild(btnDel)
        container.appendChild(btnCom)


        box.appendChild(container)


    })
}

get()

hide.onclick=(erem)=>{
   let copyData = [...data]
  if(erem.target.checked){
    // console.log(event.target.checked)
      copyData= copyData.filter((el)=>{
        return el.isComplete!=false
    })
    get(copyData)
}else
        get(data)
}
