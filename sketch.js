let x = 70;
let y = 70;
let r = 255;
let g = 255;
let b = 255;
let a = 0;

function setup() {
    createCanvas(800, 800);
}

function drawQuadrant() {
    strokeWeight(5);
    stroke("#CE2939");
    beginShape(LINES);
    vertex(400, 200);
    vertex(450,200);
    vertex(450,200);
    vertex(450, 250);
    endShape(CLOSE);

    beginShape(LINES);
    vertex(200, 200);
    vertex(250,200);
    vertex(200,200);
    vertex(200, 250);
    endShape(CLOSE);

    beginShape(LINES);
    vertex(200, 400);
    vertex(200,450);
    vertex(200,450);
    vertex(250,450);
    endShape(CLOSE);

    beginShape(LINES);
    vertex(450, 400);
    vertex(450,450);
    vertex(450,450);
    vertex(400,450);
    endShape(CLOSE);

    strokeWeight(15);
    point(325,325);

    textSize(12);
    noStroke();
    fill(1,2);
    textFont('Helvetica Neue');
    text("Striking Accuracy", 380,190);
    text("Striking Defense", 180,190);
    text("Takedown Accuracy", 180,470);
    text("Takedown Defense", 400,470);

}

function drawAxis(sd, sa, ta, td) {
    stroke("#CE2939")
    strokeWeight(3);
    let mid = createVector(325,325);
    let td_vec = createVector(450,450);
    let ta_vec = createVector(200,450);
    let sa_vec = createVector(450,200);
    let sd_vec = createVector(200,200);

    let takedown_def = p5.Vector.lerp(mid, td_vec, td)
    let takedown_acc = p5.Vector.lerp(mid, ta_vec, ta)
    let striking_def = p5.Vector.lerp(mid, sd_vec, sd)
    let striking_acc = p5.Vector.lerp(mid, sa_vec, sa)
    // Takedown Defense
    beginShape(LINES);
    vertex(mid.x, mid.y);
    vertex(takedown_def.x,takedown_def.y);
    endShape(CLOSE);

    // Takedown Accuracy
    beginShape(LINES);
    vertex(mid.x, mid.y);
    vertex(takedown_acc.x,takedown_acc.y);
    endShape(CLOSE);

    // Striking Defense
    beginShape(LINES);
    vertex(mid.x, mid.y);
    vertex(striking_def.x,striking_def.y);
    endShape(CLOSE);

    // Striking Accuracy
    beginShape(LINES);
    vertex(mid.x, mid.y);
    vertex(striking_acc.x,striking_acc.y);
    endShape(CLOSE); 
}

function draw() {
    drawQuadrant();
    drawAxis(0.67,0.50,0.45,0.85);
}