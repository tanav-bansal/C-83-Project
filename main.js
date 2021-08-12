var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
var width = screen.width;
new_width = screen.width - 70;
var new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_positionX = e.touches[0].clientX - canvas.offsetLeft;
    current_positionY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + " y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_positionX + " y = " + current_positionY);
    ctx.lineTo(current_positionX, current_positionY);
    ctx.stroke();

    last_position_of_X = current_positionX;
    last_position_of_Y = current_positionY;
}

function clear_area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}