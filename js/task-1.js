const item = document.querySelectorAll('.item');
const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
item.forEach(el => {
  const title = el.querySelector('h2');
  const elements = el.querySelectorAll('ul li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
