const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const listRef = document.querySelector('#ingredients');

const listItemsArr = ingredients.map(ingredient => {
  let li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
listRef.append(...listItemsArr);
