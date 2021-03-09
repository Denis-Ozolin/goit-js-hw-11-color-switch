const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');
let intervalId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(){
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)];
}

startBtnRef.addEventListener('click', () => {
  if(startBtnRef.disabled === true) return;

  intervalId = setInterval(() => {
    startBtnRef.disabled = true;
    changeColor();
  }, 1000);
});

stopBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = false;
  clearInterval(intervalId);
})


