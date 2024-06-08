const boxesContainer = document.getElementById("boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const blockCounts = document.querySelector('input[type="number"]');
const defaultBlockCountsValue = blockCounts.value;
let countOfBlocks = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const setCount = (event) => {
  const value = event.target.value;
  if (value >= 1 && value <= 100 && value !== countOfBlocks) {
    countOfBlocks = value;
  }
};

const generatedBlocks = (count) => {
  const resultArray = [];

  for (let i = 0; i < count; i++) {
    resultArray.push({
      width: 30 + i * 10,
      height: 30 + i * 10,
    });
  }

  return resultArray;
};

const generatedLayout = (blocksArray) => {
  return blocksArray
    .map((block) => {
      return `<div style="
        width: ${block.width}px; 
        height: ${block.height}px; 
        background-color: ${getRandomHexColor()}" >
      </div>`;
    })
    .join("");
};

blockCounts.addEventListener("change", setCount);
blockCounts.addEventListener("input", setCount);

destroy.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  blockCounts.value = defaultBlockCountsValue;
});

create.addEventListener("click", () => {
  if (countOfBlocks > 0) {
    const blocks = generatedBlocks(countOfBlocks);
    boxesContainer.innerHTML = "";
    boxesContainer.insertAdjacentHTML("beforeend", generatedLayout(blocks));
    blockCounts.value = defaultBlockCountsValue;
    countOfBlocks = 0;
  }
});
