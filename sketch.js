let tamanho = 80;

function setup() {
    let canvas = createCanvas(400, 200);

    canvas.parent("p5-container");
}

function draw() {
    // Fundo
    background(230);

    // Texto
    textAlign(CENTER);
    textSize(20);
    fill(40);

    text("Clique no quadro!", width / 2, 30);

    // Círculo que acompanha o mouse
    fill(80);
    circle(mouseX, mouseY, tamanho);
}

function mousePressed() {
    // Aumenta o tamanho do círculo quando clicar
    tamanho += 20;

    // Volta ao tamanho inicial
    if (tamanho > 180) {
        tamanho = 80;
    }
}

