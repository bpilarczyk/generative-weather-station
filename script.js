function setup() {
    createCanvas(screen.width, screen.height);

}

function draw() {
    if (mouseIsPressed) {
        fill(random(255));
    } else {
        fill(255);
    }

    circle(mouseX, mouseY, 80);

}