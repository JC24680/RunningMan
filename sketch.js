var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player, player_running, player_collided;
var ground, invisibleGround, backgroundImage;

var smokeGroup, smokeImage;
var enemiesGroup, enemies1, enemies2, enemies3, enemies4, enemies5, enemies6;

var score = 0;

var gameOver, restart;


function preload() {
  player_running = loadAnimation("Images/player/player1.png", "Images/player/player2.png");
  BgImg = loadImage("Images/BG.png")


  runningBase = loadImage("Images/RunningBase.png")

  smokeImage = loadImage("Images/cloud.png");

  enemies1 = loadImage("Images/enemies/enemy1.png");
  enemies2 = loadImage("Images/enemies/enemy2.png");
  enemies3 = loadImage("Images/enemies/enemy3.png");
  enemies4 = loadImage("Images/enemies/enemy4.png");
  enemies5 = loadImage("Images/enemies/enemy5.png");


  gameOverImg = loadImage("Images/gameOver.png");
  restartImg = loadImage("Images/restart.png");
}

function setup() {
  createCanvas(1000, 600);

  
  

  player = createSprite(10, 570, 20, 50);
  player.addAnimation("running", player_running);
  player.scale = 0.5;
  player.debug = true
  player.setCollider("rectangle", 0, 0, 100, 240)


  ground = createSprite(200, 420, 1000, 20);
  ground.addImage("rG", runningBase )
  ground.scale = 1.2

  
  

  obstaclesGroup = new Group();


}

function draw() {
  background(BgImg)


  if(keyDown("space")){
    player.velocityY = -20;
  }
  player.velocityY = player.velocityY + 0.8

  player.collide(ground);
  spawnObstacles();

  drawSprites()
}



function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(1000, 545, 10, 40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6);
    obstacle.scale = 0.5;

    //generate random obstacles
    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1: obstacle.addImage(enemies1);
        break;
      case 2: obstacle.addImage(enemies2);
        break;
      case 3:
        obstacle.addImage(enemies3);
        break;
      case 4:
        obstacle.addImage(enemies4);
        break;
      case 5:
        obstacle.addImage(enemies5);
        break;
      default: break;
    }

    //assign scale and lifetime to the obstacle           

    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}