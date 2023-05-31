// let box = document.querySelector('.box')
// let numb1 = document.querySelector('.number1')
// let numb2 = document.querySelector('.number2')
// let check = document.querySelector('.check')


// check.addEventListener('click',()=>{
//     let n1 = numb1.value
//     let n2 = numb2.value

//     if(n1>n2){
//         alert('The latgest numb is ' + n1)
//     }else if(n2>n1){
//         alert(`the larg num is ${n2}`)
//     }else{
//         alert('equal')
//     }
// })

//2
// let btn = document.querySelector('.btn')
// let number = document.querySelector('.number')

// btn.addEventListener('click',()=>{
//     let n =Math.pow(number.value,2)
//     alert(n)
// })

//3
// let btn = document.querySelector('.btn')
// let number = document.querySelector('.number')
// let h1 = document.querySelector('.h1')

// btn.onclick=()=>{
//     let n = number.value
//     if(n<=10){
//        h1.innerHTML='welcome'
//     }else{
//         h1.innerHTML='goodbye'
//     }
// }

//5
// let btn = document.querySelector('.btn')
// let number = document.querySelector('#number')
// let result =document.querySelector('.result')

// btn.onclick=()=>{
//     let cnt = 1
//     let n = number.value
//     for(let i = 1;i<=n;i++){
//         cnt*= i
//         console.log(cnt)
//     }
//     result.innerHTML=cnt
// }

//4
// let plusBtn = document.querySelector('.plus');
// let resetBtn = document.querySelector('.reset');
// let minusBtn = document.querySelector('.minus');
// let numberEl = document.querySelector('.number');

// let count = 0;

// plusBtn.onclick =()=> {
//   count++;
//   numberEl.innerHTML = count;
//   if(count>0){
//     numberEl.style.color = 'green'
//   }else if(count==0){
//     numberEl.style.color = 'black'
//  }
// //   numberEl.style.color = 'green'
// }

// resetBtn.onclick=()=>{
//   count = 0;
//   numberEl.innerHTML = count;
//   numberEl.style.color = 'black'
 
// }

// minusBtn.onclick=()=> {
//   count--;
//   numberEl.innerHTML = count;
// //   numberEl.style.color='red'
// if(count<0){
//     numberEl.style.color = 'red'
// }else if(count==0){
//     numberEl.style.color = 'black'
//  }
// }

//6

// let btn = document.querySelector('.btn')
// let colors = ['red','green','blue','yellow','gold']
// let body = document.querySelector('body')
// btn.onclick = ()=>{
//     let count = Math.floor(Math.random()*colors.length)
//     body.style.backgroundColor =colors[count]
// }

//7
// let btn= document.querySelector('.btn')
// let img = document.querySelector('.img')

// btn.onclick =()=>{
//    if(btn.innerHTML =='On'){
//     img.src = './img/Screenshot_1.png'
//     btn.innerHTML = 'Off'
//    }else{
//     img.src = './img/Screenshot_3.png'
//     btn.innerHTML ='On'
//    }
// }

//8
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }