function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", () => createBoxes(Number(input.value)));

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    destroyBoxes();

    const correctNumber =
        amount <= 100 && amount > 0
            ? amount
            : alert("Введіть число від 1 до 100 включно.");

    for (let index = 0; index < correctNumber; index++) {
        const boxSize = 30 + index * 10;

        const newBox = `<div 
                          class="js-box" 
                          style="background-color: ${getRandomHexColor()}; 
                          width: ${boxSize}px; 
                          height: ${boxSize}px"
                        ></div>`;

        boxes.insertAdjacentHTML("beforeend", newBox);
        input.value = "";
    }
    boxes.style.padding = "32px";
}

function destroyBoxes() {
    const newBoxes = document.querySelectorAll(".js-box");

    boxes.style.padding = "0";

    newBoxes.forEach((box) => {
        box.remove();
    });
}
