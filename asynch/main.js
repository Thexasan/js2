const API = "https://645508aef803f34576386931.mockapi.io/thexasan";
const box = document.querySelector(".tbody");
const form = document.querySelector(".form");
const box2 = document.querySelector(".box2");
const form2 = document.querySelector(".form2");

const btn = document.querySelector(".btn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

btn.onclick = () => {
  modal.style.display = "block";
};

//get()
async function get() {
  try {
    const { data } = await axios.get(API);
    getData(data);
    select(data)
  } catch (error) {
    console.log(error);
  }
}

//delete
async function deleteUser(id) {
  try {
    let { data } = await axios.delete(`${API}/${id}`);
    get();
  } catch (error) {
    console.log(error);
  }
}

//put
async function editUser(id, obj) {
  try {
    let { data } = await axios.put(`${API}/${id}`, obj);
    get();
  } catch (error) {
    console.log(error);
  }
}

//add
async function addUser(user) {
  try {
    let { data } = await axios.post(API, user);
    get();
  } catch (error) {
    console.log(error);
  }
}

form.onsubmit = (event) => {
  event.preventDefault();
  let newUser = {
    img: event.target["img"].value,
    name: event.target["name"].value,
    job: event.target["job"].value,
    phone: event.target["phone"].value,
    complete: false,
  };
  addUser(newUser);
  form.reset();
  modal.style.display = "none";
};

function editModal(el) {
  modal3.style.display = "block";
  form2["img"].value = el.img;
  form2["name"].value = el.name;
  form2["job"].value = el.job;
  form2["phone"].value = el.phone;

  form2.onsubmit = (event) => {
    event.preventDefault();
    let newEdit = {
      img: event.target["img"].value,
      name: event.target["name"].value,
      job: event.target["job"].value,
      phone: event.target["phone"].value,
    };
    editUser(el.id, newEdit);
    form2.reset();
    modal3.style.display = "none";
  };
}

function getData(data) {
  box.innerHTML = "";
  data.forEach((e) => {
    let container = document.createElement("tr");
    let idAdd = document.createElement("td");
    idAdd.innerHTML = e.id;

    let imgtd = document.createElement("td");
    let img = document.createElement("img");
    img.src = e.img;
    imgtd.appendChild(img);

    let name = document.createElement("td");
    name.innerHTML = e.name;

    let job = document.createElement("td");
    job.innerHTML = e.job;

    let phone = document.createElement("td");
    phone.innerHTML = e.phone;

    if (e.complete) {
      container.classList.toggle("com");
    }

    let complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = e.complete;
    complete.onclick = () => {
      e.complete = !e.complete;
      completeUser(e.id, e);
    };

    let tdBtn = document.createElement("td");
    let btns = document.createElement("button");
    btns.innerHTML = "...";
    btns.classList.add("btns");
    tdBtn.appendChild(btns);
    btns.onclick = () => {
      modal1.style.display = "block";
      const info = document.querySelector(".info");
      info.onclick = () => {
        modal2.style.display = "block";
        box2.innerHTML = "";
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = e.img;
        let name = document.createElement("h1");
        name.innerHTML = `Fullname:${e.name}`;
        let job = document.createElement("h1");
        job.innerHTML = `Job:${e.job}`;

        let phone = document.createElement("h1");
        phone.innerHTML = `Phone:${e.phone}`;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(job);
        div.appendChild(phone);
        box2.appendChild(div);
      };
      modal2.style.display = "none";

      const del = document.querySelector(".del");
      del.onclick = () => {
        deleteUser(e.id);
      };
      const edit = document.querySelector(".edit");
      edit.onclick = () => {
        editModal(e);
      };
    };
    modal1.style.display = "none";

    const sort = document.querySelector(".sort");
    sort.onclick = () => {
      data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      getData(data);
    };

   


const search = document.querySelector(".input");
search.addEventListener("input", () => {
  let value = search.value.toLowerCase().trim();
  let filteredData = data.filter(
    (e) => e.name.toLowerCase().includes(value) || e.phone.includes(value)
  );
  getData(filteredData);
}); 


   

    imgtd.appendChild(complete);
    container.appendChild(imgtd);
    container.appendChild(name);
    container.appendChild(job);
    container.appendChild(phone);
    container.appendChild(tdBtn);
    box.appendChild(container);
  });
}
get();

//com
async function completeUser(id, user) {
  try {
    let { data } = await axios.put(`${API}/${id}`, user);
    get();
  } catch (error) {
    console.error(error);
  }
}


  
let switc = document.querySelector('.switch')
let body = document.querySelector('body')
let checkbox = document.querySelector('#checkbox')
switc.onclick=()=>{
    if(checkbox.checked){
        console.log(checkbox.checked)
        body.classList.toggle('switc')
    }
}
 

function select(data){

    const select = document.getElementById('select');
select.onchange=()=>{
    // console.log(select.value)

    // console.log(data)
    if(select.value=='all'){
        box.innerHTML=''
        getData(data)
    }else if(select.value=='false'){
      let  data1 = data.filter((e)=>{
        return e.complete == false
      })
      box.innerHTML=''
      getData(data1)
    }else if(select.value=='true'){
        let  data1 = data.filter((e)=>{
          return e.complete == true
        })
        box.innerHTML=''
        getData(data1)
      }
}
}

const search = document.querySelector(".input");
search.addEventListener("input", () => {
  let value = search.value.toLowerCase().trim();
  let filteredData = data.filter(
    (e) => e.name.toLowerCase().includes(value) || e.phone.includes(value)
  );
  getData(filteredData);
}); 
