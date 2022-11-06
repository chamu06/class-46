var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombiegroup //step 1
var police, policeImg, policegroup
var bullet, bulletImg, bulletgroup
function preload() {
  zombieImg = loadImage("assets/zombie.png")//step 2
  policeImg = loadImage("assets/police2.png")
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bulletImg = loadImage("assets/bullet.png")
  bgImg = loadImage("assets/bg.png")

}

function setup() {


  createCanvas(500,700);

  //adding the background image
  bg = createSprite(250, 320, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 0.7

edges=createEdgeSprites()
  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)

  zombiegroup = new Group() // step 3
 policegroup = new Group()
 bulletgroup = new Group()
}

function draw() {
  background(0);
player.collide(edges)



  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30
  }
  if (keyDown("LEFT_ARROW")) {
    player.x = player.x - 30

  }
  if (keyDown("RIGHT_ARROW")) {
    player.x = player.x + 30

  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {

    player.addImage(shooter_shooting)
    shootingbullet()

  }

  //player goes back to original standing image once we stop pressing the space bar
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }
  zombieenemy() //step 5
  policeenemy()
  drawSprites();

}

//step 4
function zombieenemy() {
  if (frameCount % 200 === 0) {
    zombie = createSprite(100, 100, 200, 200)
    zombie.addImage(zombieImg)
    zombie.scale = 0.1
    zombie.x = random(100, 450)
    zombie.velocityY = 2
    zombiegroup.add(zombie)
  }
}
function shootingbullet() { 
    bullet= createSprite(100, player.y, 200, 200)
    bullet.addImage(bulletImg)
    bullet.scale = 0.1
    bullet.x = player.x
    bullet.velocityY = -2
    bulletgroup.add(bullet)
  }

function policeenemy(){
  if(frameCount % 400 === 0){
 police = createSprite(100,100,200,200)
 police.addImage(policeImg)   
 police.scale = 0.2
 police.x = random(100,450)
 police.velocityY = 3
 policegroup.add(police)

  }
}