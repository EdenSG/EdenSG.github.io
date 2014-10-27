var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var run = true;

function Box() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.width = 1;
    this.height = 1;
}
var boxes = [];
var totalBoxes = 20000;

for (var i = 0; i < totalBoxes; i++) {
    boxes[i] = new Box();
    boxes[i].color = randomColor(0, 255, 0, 255, 0, 255, .01);
}

function update() {
    boxes.forEach(function(box, i) {
        box.x += randomNumber(-6, 5);
        box.y += randomNumber(-6, 5);
    });
}

function draw() {
    // context.clearRect(0, 0, canvas.width, canvas.height);

    boxes.forEach(function(box, i) {
        context.fillStyle = box.color;
        context.fillRect(box.x, box.y, box.width, box.height);
    });
}

function loop() {
    update();
    draw();
    if (run) {
        requestAnimationFrame(loop);
    };
}
loop();


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha) {
    var r = randomNumber(rmin, rmax);
    var g = randomNumber(gmin, gmax);
    var b = randomNumber(bmin, bmax);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

function toggleRunning() {
    if (run) {
    	run = false
    } else {
    	run = true
    }
    loop();
}
