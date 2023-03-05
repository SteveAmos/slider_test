const canvas = document.getElementById('canvas1');
canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext('2d');
const xPosSlider = document.getElementById('xPos');
const yPosSlider = document.getElementById('yPos');
const sizeSlider = document.getElementById('size');

function drawRect() {
  const xPos = xPosSlider.value;
  const yPos = yPosSlider.value;
  const size = sizeSlider.value;

  const rectX = xPos - (size / 2);
  const rectY = yPos - (size / 2);
  
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(rectX, rectY, size, size);
}

xPosSlider.addEventListener('input', drawRect);
yPosSlider.addEventListener('input', drawRect);
sizeSlider.addEventListener('input', drawRect);

drawRect();

