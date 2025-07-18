const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  input.value = '';
  return boxes;
}
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  const boxes = createBoxes(amount);
  boxesContainer.innerHTML = '';
  boxes.forEach(box => boxesContainer.appendChild(box));
});
destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  input.value = '';
});
