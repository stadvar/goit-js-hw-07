const inputRef = document.querySelector('#validation-input');
const inputCount = Number(inputRef.dataset.length);

inputRef.addEventListener('change', () => {
  if (inputRef.value.length < inputCount) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
});
