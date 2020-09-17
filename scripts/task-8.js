const controlsRef = document.querySelector('#controls');
const divBoxesRef = document.querySelector('#boxes');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

renderBtnRef.addEventListener('click', () => {
  createBoxes(Number(controlsRef.firstElementChild.value));
});
destroyBtnRef.addEventListener('click', () => {
  divBoxesRef.innerHTML = '';
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createBoxes = amount => {
  const divArr = [];
  for (let widthHeight = 30, i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = div.style.height = `${widthHeight}px`;
    div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    divArr.push(div);
    widthHeight += 10;
  }
  divBoxesRef.append(...divArr);
};
