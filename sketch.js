// ============================================
// MINHA CRIAÇÃO AUTORAL EM P5.JS
// Animação inspirada nas cores do Brasil
// ============================================

let tamanho = 110;

let estrelas = [];


// ============================================
// CONFIGURAÇÃO
// ============================================

function setup() {

    let canvas = createCanvas(600, 350);

    // Coloca o canvas dentro do HTML
    canvas.parent("p5-container");


    // Cria as estrelas
    for (let i = 0; i < 35; i++) {

        estrelas.push({

            x: random(width),

            y: random(height),

            tamanho: random(2, 6),

            velocidade: random(0.4, 1.5)

        });

    }

}


// ============================================
// DESENHO
// ============================================

function draw() {

    // Verde do Brasil
    background(0, 156, 59);


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

    ellipse(
        width / 2,
        height / 2,
        tamanho,
        tamanho
    );


    // Faixa branca
    fill(255);

    push();

    translate(width / 2, height / 2);

    rotate(0.12);

    rectMode(CENTER);

    rect(
        0,
        0,
        tamanho + 35,
        18
    );

    pop();


    // Estrelas
    fill(255);

    for (let estrela of estrelas) {

        ellipse(
            estrela.x,
            estrela.y,
            estrela.tamanho,
            estrela.tamanho
        );


        // Movimento
        estrela.y += estrela.velocidade;


        // Volta para cima
        if (estrela.y > height) {

            estrela.y = 0;

            estrela.x = random(width);

        }

    }


    // Texto
    fill(255);

    textAlign(CENTER);

    textSize(22);

    text(
        "BRASIL",
        width / 2,
        height - 18
    );

}


// ============================================
// INTERAÇÃO
// Clique para aumentar a bandeira
// ============================================

function mousePressed() {

    // Verifica se o clique foi dentro do canvas
    if (
        mouseX >= 0 &&
        mouseX <= width &&
        mouseY >= 0 &&
        mouseY <= height
    ) {

        tamanho += 20;


        // Volta ao tamanho inicial
        if (tamanho > 220) {

            tamanho = 110;

        }

    }

}
