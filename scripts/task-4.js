let counterValue = 0;
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');

const increment = value => (value += 1);
const decrement = value => (value -= 1);

btnIncrementRef.addEventListener('click', () => {
  counterValue = increment(counterValue);
  counterRef.textContent = counterValue;
});
btnDecrementRef.addEventListener('click', () => {
  counterValue = decrement(counterValue);
  counterRef.textContent = counterValue;
});
