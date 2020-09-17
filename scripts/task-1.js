const allCategories = document.querySelectorAll('.item');
console.log(`В списке ${allCategories.length} категории.`);
allCategories.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItemCount = category.lastElementChild.children.length;
  console.log(`Категория: ${categoryName}\nКоличество элементов: ${categoryItemCount}`);
});
