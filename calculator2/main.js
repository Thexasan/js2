
// Get all buttons and input field
const buttons = document.querySelectorAll('button');
const input = document.getElementById('result');

// Add event listener on each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the value of the clicked button
    const buttonValue = button.textContent;

    // If the clicked button is C, clear the input field
    if (buttonValue === 'C') {
      input.value = '';
    }
    // If the clicked button is =, calculate the result
    else if (buttonValue === '=') {
      input.value = eval(input.value);
    }
    // If the clicked button is any other button, append its value to the input field
    else {
      input.value += buttonValue;
    }
  });
});

// Add event listener on backspace button
document.getElementById('backspace').addEventListener('click', () => {
  // Get the current input value
  let inputValue = input.value;

  // Remove the last character
  inputValue = inputValue.substring(0, inputValue.length - 1);

  // Set the new input value
  input.value = inputValue;
});

// Add event listener on percentage button
document.getElementById('percentage').addEventListener('click', () => {
  // Get the current input value
  const inputValue = input.value;

  // Calculate the result
  const result = parseFloat(inputValue) / 100;

  // Set the new input value
  input.value = result;
});

// Add event listener on positive-negative button
document.getElementById('positive-negative').addEventListener('click', () => {
  // Get the current input value
  const inputValue = input.value;

  // Negate the value if it is not zero
  if (inputValue !== '0') {
    input.value = parseFloat(inputValue) * -1;
  }
});

