
//input & color
let picker = document.getElementById('sizePicker');
let grid = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');


//Max amount
document.getElementById("inputHeight").max = "20";
document.getElementById("inputWidth").max = "20";


//Grid
picker.addEventListener('submit', function(event) {
        //Input measurements for the grid.
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let grid = document.getElementById('pixelCanvas');

  event.preventDefault();
       //Run the Grid
  makeGrid(height, width)
});

function makeGrid(height, width) {
  grid.innerHTML = (null);
  //making the grid with proper measurements.
  for (var i = 0; i < height; i++) {
    let row = grid.insertRow(i);
    for (var q = 0; q < width; q++) {
      let cell = row.insertCell(q)
      //color the cells
      cell.addEventListener('click', function(ed) {
        cell.style.backgroundColor = color.value;
      })
    }
  }
}
