// Tamanho inicial do círculo
let tamanho = 80;

function setup() {
    // Cria o quadro do p5.js
    let canvas = createCanvas(400, 200);

    // Coloca o quadro dentro da div
    canvas.parent("p5-container");
}

function draw() {
    // Fundo do quadro
    background(230);

    // Texto
    textAlign(CENTER);
    textSize(20);
    fill(40);

    text("Clique no círculo!", width / 2, 30);

    // Círculo seguindo o mouse
    fill(80);
    circle(mouseX, mouseY, tamanho);
}

function mousePressed() {
    // Aumenta o círculo
    tamanho += 20;

    // Volta ao tamanho inicial
    if (tamanho > 180) {
        tamanho = 80;
    }
}
