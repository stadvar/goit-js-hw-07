const nameText = document.querySelector('#name-output');
const inputText = document.querySelector('#name-input');
inputText.addEventListener('input', () => {
  if (inputText.value) {
    nameText.textContent = inputText.value;
  } else {
    nameText.textContent = 'незнакомец';
  }
});
