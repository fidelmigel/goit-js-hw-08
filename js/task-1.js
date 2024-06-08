const categoriesListItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesListItems.length}`);

categoriesListItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
