const colors = {
    TAKEDOWN_DEF: "#561689",
    TAKEDOWN_ACC: "#1876fb",
    STRIKING_ACC: "#FE4902",
    STRIKING_DEF: "#F7a52D",
}

function setup() {
    createCanvas(1500, 1500).parent('canvasHolder');
}

function drawQuadrant(x,y, sd, sa, ta, td, name) {
    strokeWeight(5);
    const mid = {
        x: x,
        y: y
    }
    textFont('Helvetica Neue');
    noStroke();
    textSize(22);
    fill(1,2);
    text(name, mid.x - 70,mid.y-180);

    beginShape(LINES);
    stroke(colors.STRIKING_ACC);
    vertex(mid.x+125, mid.y-125);
    vertex(mid.x+125, mid.y-75);
    vertex(mid.x+75, mid.y-125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.STRIKING_DEF);
    vertex(mid.x-125, mid.y-125);
    vertex(mid.x-125, mid.y-75);
    vertex(mid.x-75, mid.y-125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.TAKEDOWN_ACC);
    vertex(mid.x-125, mid.y+125);
    vertex(mid.x-125, mid.y+75);
    vertex(mid.x-75, mid.y+125);
    endShape(CLOSE);

    beginShape(LINES);
    stroke(colors.TAKEDOWN_DEF);
    vertex(mid.x+125, mid.y+125);
    vertex(mid.x+75, mid.y+125);
    vertex(mid.x+125, mid.y+75);
    endShape(CLOSE);

    stroke("#000");
    strokeWeight(10);
    point(mid.x,mid.y);

    textSize(12);
    noStroke();
    
    text("Striking Accuracy", mid.x+75,mid.y-150);
    text("Striking Defense", mid.x-125,mid.y-150);
    text("Takedown Accuracy", mid.x-125,mid.y+150);
    text("Takedown Defense", mid.x+75,mid.y+150);

    drawAxis(mid, sd, sa, ta, td);

}

function drawAxis(mid, sd, sa, ta, td) {
    let mid_vec = createVector(mid.x,mid.y);
    let td_vec = createVector(mid.x+125,mid.y+125);
    let ta_vec = createVector(mid.x-125,mid.y+125);
    let sa_vec = createVector(mid.x+125,mid.y-125);
    let sd_vec = createVector(mid.x-125,mid.y-125);

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
    drawQuadrant(300, 300 ,0.67, 0.50,0.45,0.85,"Khabib Nurmagomedov");
    drawQuadrant(680, 300 ,0.7, 0.90,0.15,0.35, "Conor McGregor");
    drawQuadrant(300, 680 ,0.89, 0.92,0.93,0.98,"Jon Jones");
    drawQuadrant(680, 680 ,0.54, 0.80,0.95,0.85, "Daniel Cormier");
}