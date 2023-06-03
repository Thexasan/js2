const display = document.getElementById('display');
let img = document.querySelector('.img1')
let section = document.querySelector('.section')
let header = document.querySelector('.header')
let span = document.querySelector('.span')
const buttons = document.querySelectorAll('button');


img.onclick = ()=>{
    section.style.display='block'
    header.style.display='none'
}

function appendDigit(digit) {
  display.value += digit;
}

function press(operator) {
  display.value += operator;
}


let canAppendDecimal = true;
function clear() {
    display.value = '';
    canAppendDecimal = true;
}

function calculate() {
  const result = eval(display.value);
  display.value = result;   
}

span.onclick=()=>{
    section.style.display='none'
    header.style.display = 'block'
}

function toggleSign() {
  const currentVal = display.value;
  if (currentVal.startsWith('-')) {
    display.value = currentVal.slice(1);
  } else {
    display.value = '-' + currentVal;
  }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let buttonValue = button.textContent;
        if (buttonValue === 'C') {
        display.value = '';
      }
    });
  });
  
document.getElementById('decimal').addEventListener('click', () => {
    const inputValue = display.value;
      if (inputValue.indexOf('.') === -1) {
      display.value += '.';
    }
  });

let plusMin = document.querySelector('.plus-minus')
plusMin.addEventListener('click',()=>{
    let inputValue = display.value
    if(inputValue.indexOf('-')===-1){
        display.value = '-'+inputValue
    }
})