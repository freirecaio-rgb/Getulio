```javascript
// ========================================
// MINHA ANIMAÇÃO EM P5.JS
// Cores inspiradas na bandeira do Brasil
// ========================================

let tamanho = 50;
let estrelas = [];

function setup() {

    let canvas = createCanvas(500, 300);

    // Coloca o canvas dentro do elemento do HTML
    canvas.parent("p5-container");

    // Cria pequenos pontos para a animação
    for (let i = 0; i < 35; i++) {

        estrelas.push({
            x: random(width),
            y: random(height),
            tamanho: random(2, 5),
            velocidade: random(0.5, 2)
        });

    }

}

function draw() {

    // Fundo verde
    background(0, 107, 45);

    // Losango amarelo
    fill(255, 223, 0);
    noStroke();

    beginShape();

    vertex(width / 2, 35);
    vertex(width - 45, height / 2);
    vertex(width / 2, height - 35);
    vertex(45, height / 2);

    endShape(CLOSE);

    // Círculo azul
    fill(0, 39, 118);
    ellipse(width / 2, height / 2, 150, 150);

    // Pontos brancos em movimento
    fill(255);

    for (let estrela of estrelas) {

        ellipse(
            estrela.x,
            estrela.y,
            estrela.tamanho,
            estrela.tamanho
        );

        estrela.y += estrela.velocidade;

        if (estrela.y > height) {
            estrela.y = 0;
            estrela.x = random(width);
        }

    }

    // Texto
    fill(255);
    textAlign(CENTER);
    textSize(18);

    text(
        "Brasil e História",
        width / 2,
        height - 18
    );

}

// ========================================
// INTERAÇÃO
// Clique para aumentar o círculo azul
// ========================================

function mousePressed() {

    if (
        mouseX >= 0 &&
        mouseX <= width &&
        mouseY >= 0 &&
        mouseY <= height
    ) {

        tamanho += 15;

        // Limita o tamanho
        if (tamanho > 200) {
            tamanho = 50;
        }

    }

}
