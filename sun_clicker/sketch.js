let sprites = []
let items = []
let items2 = []
let score = 0;
let ppc;

let img;
let button;
let button1;
let button2;
let sun = {
  x: 200,
  y: 200,
  width: 250
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 12; i++) {
    let item = new Item("potion", Math.random() * 5 )
    sprites.push(item)
    sprites.push(item)
  }
  for (let i = 0; i < 12; i++) {
    let item2 = new Item2("potion", Math.random() * 5 )
    sprites.push(item2)
    sprites.push(item2)
  }
}

function plusTwo() {
  score += 2
}
function plusFour() {
  score += 4
}
function doubleScore() {
    score = (score * 2)
}
function preload() {
  img = loadImage('happySun.png')
}

function draw() {
  background(202, 220, 250);
  if (!button && score == 100) {
    button = createButton('Score Goes up by Two');
    button.mousePressed(plusTwo);
  }
  if (!button1 && score == 300) {
    button1 = createButton('Score Goes up by Four');
    button1.mousePressed(plusFour);
  }
  if (!button2 && score == 500) {
    button2 = createButton('Double Your Score');
    button2.mousePressed(doubleScore);
  }
  sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })
  image(img, 45, 40, img.width / 3, img.height / 3);
  checkCollisions()
  fill("black")
  textSize(25)
  text("Score: " + score, 10, 30)
}

function mouseClicked() {
  if (dist(sun.x, sun.y, mouseX, mouseY) <= sun.width/2) {
    score++
  }
}
function checkCollisions() {
  for(let i = 0; i < items.length; i++) {
    let item = items[i]
  }
}