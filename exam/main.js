let box = document.querySelector('.box')
let save = document.querySelector('.btnAdd')


var modal5 = document.getElementById("myModal5");



// Get the <span> element that closes the modal
var span5 = document.querySelector(".close5");
span5.onclick = function() {
    modal5.style.display = "none";
  }

// When the user clicks on <span> (x), close the modal
console.log(span5);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}


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




let data = [
    {
        id:1,
        fullname:'Husenov HAsan',
        email:'husenovhasan5577@gmail.com',
        function:'Admin',
        status:'active',
        img:'./img/image-PQ4h2tnyy-transformed.png',
        teg:'designer',
        complete:false,
    },
    {
        id:2,
        fullname:'Husenov HAsan',
        email:'husenovhasan5577@gmail.com',
        function:'Admin',
        status:'unActive',
        img:'./img/image-PQ4h2tnyy-transformed.png',
        teg:'designer',
        complete:false,
    },
    {
        id:3,
        fullname:'Husenov Hsan',
        email:'husenovhasan5577@gmail.com',
        function:'Admin',
        status:'unActive',
        img:'./img/image-PQ4h2tnyy-transformed.png',
        teg:'designer',
        complete:false,
    }
]

// Get the modal
var modal = document.getElementById("myModal");

let newBtn = document.querySelector('.newBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


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




var modall = document.getElementById("myModall");


// Get the <span> element that closes the modal
var spann = document.getElementsByClassName("closee")[0];



// When the user clicks on <span> (x), close the modal
spann.onclick = function() {
  modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}


newBtn.onclick=()=>{
    modal.style.display='block'
}
save.onclick=()=>{    
        let inpImg = document.querySelector('.inpImg');
        let inpName = document.querySelector('.inpName');
        let inpEmail = document.querySelector('.inpEmail');
        let active = document.querySelector('.check1');
        let unActive = document.querySelector('.check2');
        let functionSelect = document.querySelector('#function');
        let tagSelect = document.querySelector('#userTag');
      
        if (inpImg.value === '' || inpName.value === '' || inpEmail.value === '') {
          alert('Please fill in all fields.');
          return;
        }
      
        let newUser = {
          id: data.length + 1,
          fullname: inpName.value,
          email: inpEmail.value,
          function: functionSelect.value,
          status: active.checked ? 'active' : 'unActive',
          img: inpImg.value,
          tag: tagSelect.value,
          complete: false,
        };
      
        data.push(newUser);
      
        inpImg.value = '';
        inpName.value = '';
        inpEmail.value = '';
        active.checked = false;
        unActive.checked = false;
      
        get();
        modal.style.display='none'
      
}

function edit(id){
    let currentUser = data.find((e)=>e.id==id)
    let inpImgEdit = document.querySelector('.inpImgEdit');
    let inpNameEdit = document.querySelector('.inpNameEdit');
    let inpEmailEDit = document.querySelector('.inpEmailEDit');
    let activeEdit = document.querySelector('.checkEdit1');
    let unActiveEdit = document.querySelector('.checkEdit2');
    let functionEdit = document.querySelector('#functionEdit');
    let tagEdit = document.querySelector('#userTagEdit');
    modal1.style.display='block'
    inpImgEdit.value = currentUser.img;
    inpNameEdit.value = currentUser.fullname;
    inpEmailEDit.value = currentUser.email;
    activeEdit.checked = currentUser.status == 'Active' ? true : false;
    unActiveEdit.checked = currentUser.status == 'Unactive' ? true : false;
    functionEdit.value = currentUser.function;
    tagEdit.value = currentUser.tag;

    

    let saveEdit = document.querySelector('.btnAEdit')
    saveEdit.onclick = ()=>{
        currentUser.img = inpImgEdit.value;
        currentUser.fullname = inpNameEdit.value;
        currentUser.email = inpEmailEDit.value;
        currentUser.status = activeEdit.checked ? 'Active' : 'Unactive';
        currentUser.function = functionEdit.value;
        currentUser.tag = tagEdit.value;
        get()
        modal1.style.display='none'
    }
}

//com{}

function complete(id){
    data = data.map((e)=>{
        if(e.id==id){
            e.complete  = !e.complete
        }
        return e
    })
    get()
}

function remove(id){
    data= data.findIndex((e)=>e.id!=id)
    get()
}
  
function get(newDAta){
    box.innerHTML = ''
    newDAta.forEach((e)=>{
        let container = document.createElement('div')
        container.classList.add('cont')

        let idAdd = document.createElement('h1')
        idAdd.innerHTML=e.id

        let div = document.createElement('div')
        let nameAdd = document.createElement('h1')
        nameAdd.innerHTML = e.fullname

       

        let emailAdd = document.createElement('h1')
        emailAdd.innerHTML = e.email

        let functionAdd  = document.createElement('h1')
        functionAdd.innerHTML = e.function
        functionAdd.classList.add('func')

        let statusAdd = document.createElement('h1')
        statusAdd.innerHTML=e.status
        statusAdd.classList.add('status')

        let tagAdd = document.createElement('h1')
        tagAdd.innerHTML=e.teg
        tagAdd.classList.add('tag')

        let btn = document.createElement('button')
        btn.innerHTML = '...'
        btn.classList.add('btn-')

        btn.onclick=()=>{
            modall.style.display='block'
            let btnDel = document.querySelector('.btn-delete')
            btnDel.onclick=()=>{
                remove(e.id)
            }

            let info = document.querySelector('.btn-info')
            console.log(info);
            let box2 = document.querySelector('.box2')
            info.onclick=()=>{
                box2.innerHTML = ''
                modal5.style.display='block'
                let name = document.createElement('h1')
                name.innerHTML=`title: ${e.fullname}`
                let email = document.createElement('h1')
                email.innerHTML=`email: ${e.email}`

                box2.appendChild(name)
                box2.appendChild(email)
               
            }
            let btnEdit = document.querySelector('.btn-edit')
            btnEdit.onclick=()=>{

                edit(e.id)
            }
        }

        let imgAdd = document.createElement('img')
        imgAdd.src = e.img
        imgAdd.classList.add('img1')

        if(e.complete==true){
            nameAdd.classList.toggle('com')
            emailAdd.classList.toggle('com')
            functionAdd.classList.toggle('com')
            statusAdd.classList.toggle('com')
            tagAdd.classList.toggle('com')
            
        }

        let btnCom = document.createElement('input')
        btnCom.type='checkbox'
        btnCom.checked = e.complete
        btnCom.onclick=()=>{
            complete(e.id)
        }

        


        container.appendChild(btnCom)
        container.appendChild(imgAdd)
        div.appendChild(nameAdd)
        div.appendChild(emailAdd)

        container.appendChild(div)
        container.appendChild(functionAdd)
        container.appendChild(statusAdd)
        container.appendChild(tagAdd)
        container.appendChild(btn)

        box.appendChild(container)
    })
}
get(data)

let sel = document.querySelector('.user')
sel.onchange=()=>{
    if(sel.value=='all'){
        box.innerHTML=''
        get(data)
    }else{
        let data1 = data.filter((e)=>{
            return e.status == sel.value
        })
        box.innerHTML=''
        get(data1)
    }
}