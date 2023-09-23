const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fill-color"),
  sizeSlider = document.querySelector("#size-slider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#color-picker"),
  clearCanvas = document.querySelector(".clear-canvas"),
  saveImg = document.querySelector(".save-img"),
  ctx = canvas.getContext("2d");

//   global variables with default value
let prevMouseX,
  prevMouseY,
  isDrawing = false,
  selectedTool = "brush",
  brushWidth = 5,
  selectedColor = "#000";

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
}

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
});

const drawRect = (e) => {
  if(!fillColor.checked) {
    return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
  }
  ctx.fillRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};

const drawCircle = (e) => {
  ctx.beginPath(); //creating new path t draw circle
  //getting radius to a circle according to the mouse pointer
  let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseX - e.offsetX), 2));
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);//creating circle according to the mouse pointer
  fillColor.checked ?ctx.fill() : ctx.stroke();//filling color
}

const drawTriangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);//moving triangle to the mouse pointer
  ctx.lineTo(e.offsetX, e.offsetY);//creating 1st line acc to the mouse pointer
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); //creating bottom line of triangle
  ctx.closePath(); //closing path of a triangle
  fillColor.checked ?ctx.fill() : ctx.stroke();//filling color
}




const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX; //passing current mouseX position as prevMouseX value
  prevMouseY = e.offsetY; //passing current mouseY position as prevMouseY value
  ctx.beginPath(); //creating newpath to draw
  ctx.lineWidth = brushWidth; //passing brushsize as line width
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); //this avoid dragging the image
};

const drawing = (e) => {
  if (!isDrawing) return; //if isDrawing is false return from here
  ctx.putImageData(snapshot, 0, 0);

  if (selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the mouse pointer
    ctx.stroke(); //drawing/filing line with color
  } else if (selectedTool === "rectangle") {
    drawRect(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else {
    drawTriangle(e);
  }
};

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //adding click event to all tool option
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

colorBtns.forEach(btn => {
  btn.addEventListener("click", () => { //adding click event to all color button
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");
    selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
  });
});

colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clearing whole canvas
  setCanvasBackground();
});

saveImg.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
