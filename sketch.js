let x = 70;
let y = 70;
let r = 255;
let g = 255;
let b = 255;
let a = 0;

const colors = {
    TAKEDOWN_DEF: "#561689",
    TAKEDOWN_ACC: "#1876fb",
    STRIKING_ACC: "#FE4902",
    STRIKING_DEF: "#F7a52D",
}

function setup() {
    createCanvas(800, 800);
}

function drawQuadrant(mid, sd, sa, ta, td) {
    strokeWeight(5);
    
    beginShape(LINES);
    stroke(colors.STRIKING_ACC);
    vertex(mid+125, mid-125);
    vertex(mid+125, mid-75);
    vertex(mid+75, mid-125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.STRIKING_DEF);
    vertex(mid-125, mid-125);
    vertex(mid-125, mid-75);
    vertex(mid-75, mid-125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.TAKEDOWN_ACC);
    vertex(mid-125, mid+125);
    vertex(mid-125, mid+75);
    vertex(mid-75, mid+125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.TAKEDOWN_DEF);
    vertex(mid+125, mid+125);
    vertex(mid+75, mid+125);
    vertex(mid+125, mid+75);
    endShape(CLOSE);

    stroke("#000");
    strokeWeight(10);
    point(mid,mid);

    textSize(12);
    noStroke();
    fill(1,2);
    textFont('Helvetica Neue');
    text("Striking Accuracy", mid+75,mid-150);
    text("Striking Defense", mid-125,mid-150);
    text("Takedown Accuracy", mid-125,mid+150);
    text("Takedown Defense", mid+75,mid+150);

    drawAxis(mid, sd, sa, ta, td);

}

function drawAxis(mid, sd, sa, ta, td) {
    let mid_vec = createVector(mid,mid);
    let td_vec = createVector(mid+125,mid+125);
    let ta_vec = createVector(mid-125,mid+125);
    let sa_vec = createVector(mid+125,mid-125);
    let sd_vec = createVector(mid-125,mid-125);

    let takedown_def = p5.Vector.lerp(mid_vec, td_vec, td);
    let takedown_acc = p5.Vector.lerp(mid_vec, ta_vec, ta);
    let striking_def = p5.Vector.lerp(mid_vec, sd_vec, sd);
    let striking_acc = p5.Vector.lerp(mid_vec, sa_vec, sa);

    strokeWeight(3);

    // Takedown Defense
    beginShape(LINES);
    stroke(colors.TAKEDOWN_DEF);
    vertex(mid_vec.x, mid_vec.y);
    vertex(takedown_def.x,takedown_def.y);
    endShape(CLOSE);

    // Takedown Accuracy
    beginShape(LINES);
    stroke(colors.TAKEDOWN_ACC);
    vertex(mid_vec.x, mid_vec.y);
    vertex(takedown_acc.x,takedown_acc.y);
    endShape(CLOSE);

    // Striking Defense
    beginShape(LINES);
    stroke(colors.STRIKING_DEF);
    vertex(mid_vec.x, mid_vec.y);
    vertex(striking_def.x,striking_def.y);
    endShape(CLOSE);

    // Striking Accuracy
    beginShape(LINES);
    stroke(colors.STRIKING_ACC);
    vertex(mid_vec.x, mid_vec.y);
    vertex(striking_acc.x,striking_acc.y);
    endShape(CLOSE); 
}

function draw() {
    drawQuadrant(300,0.67, 0.50,0.45,0.85);
}