// Tamanho inicial do círculo
let tamanho = 80;

function setup() {
    // Cria o quadro
    let canvas = createCanvas(500, 250);

    // Coloca o quadro dentro da div
    canvas.parent("p5-container");
}

function draw() {
    // Fundo
    background(245);

    // Texto
    textAlign(CENTER);
    textSize(20);
    fill(50);

    text("Clique no círculo!", width / 2, 30);

    // Círculo seguindo o mouse
    fill(100);
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
