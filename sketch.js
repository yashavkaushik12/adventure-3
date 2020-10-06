var player, player_img;
var spikes;
var water;
var lava;
var block, block_img;

function preload(){
  block_img = loadImage("images/block.png");
  player_img = loadImage("images/c.png");

}

function setup(){
  canvas = createCanvas(800, 486);

  block = createSprite(33.5, 27);
  block.addImage(block_img);
  block = createSprite(33.5, 81);
  block.addImage(block_img);
  block = createSprite(33.5, 135);
  block.addImage(block_img);
  block = createSprite(33.5, 189);
  block.addImage(block_img);
  block = createSprite(33.5, 243);
  block.addImage(block_img);
  block = createSprite(33.5, 297);
  block.addImage(block_img);
  block = createSprite(33.5, 351);
  block.addImage(block_img);
  block = createSprite(33.5, 405);
  block.addImage(block_img);
  block = createSprite(33.5, 459);
  block.addImage(block_img);
  block = createSprite(100.5, 27);
  block.addImage(block_img);
  block = createSprite(100.5, 81);
  block.addImage(block_img);
  block = createSprite(100.5, 135);
  block.addImage(block_img);
  block = createSprite(100.5, 189);
  block.addImage(block_img);
  block = createSprite(100.5, 243);
  block.addImage(block_img);
  block = createSprite(100.5, 297);
  block.addImage(block_img);
  block = createSprite(100.5, 351);
  block.addImage(block_img);
  block = createSprite(100.5, 405);
  block.addImage(block_img);
  block = createSprite(100.5, 459);
  block.addImage(block_img);
  block = createSprite(167.5, 459);
  block.addImage(block_img);
  block = createSprite(234.5, 459);
  block.addImage(block_img);
  block = createSprite(301.5, 459);
  block.addImage(block_img);
  block = createSprite(368.5, 459);
  block.addImage(block_img);
  block = createSprite(435.5, 459);
  block.addImage(block_img);
  block = createSprite(502.5, 459);
  block.addImage(block_img);
  block = createSprite(569.5, 459);
  block.addImage(block_img);
  block = createSprite(636.5, 459);
  block.addImage(block_img);
  block = createSprite(703.5, 459);
  block.addImage(block_img);
  block = createSprite(770.5, 459);
  block.addImage(block_img);
  block = createSprite(234.5, 405);
  block.addImage(block_img);
  block = createSprite(301.5, 405);
  block.addImage(block_img);
  block = createSprite(368.5, 405);
  block.addImage(block_img);
  block = createSprite(368.5, 405);
  block.addImage(block_img);
  block = createSprite(435.5, 405);
  block.addImage(block_img);
  block = createSprite(502.5, 405);
  block.addImage(block_img);
  block = createSprite(569.5, 405);
  block.addImage(block_img);
  block = createSprite(636.5, 405);
  block.addImage(block_img);
  block = createSprite(703.5, 405);
  block.addImage(block_img);
  block = createSprite(770.5, 405);
  block.addImage(block_img);
  block = createSprite(167.5, 405);
  block.addImage(block_img);
  block = createSprite(368.5, 27);
  block.addImage(block_img);
  block = createSprite(435.5, 27);
  block.addImage(block_img);
  block = createSprite(502.5, 27);
  block.addImage(block_img);
  block = createSprite(569.5, 27);
  block.addImage(block_img);
  block = createSprite(636.5, 27);
  block.addImage(block_img);
  block = createSprite(703.5, 27);
  block.addImage(block_img);
  block = createSprite(770.5, 27);
  block.addImage(block_img);
  block = createSprite(368.5, 81);
  block.addImage(block_img);
  block = createSprite(435.5, 81);
  block.addImage(block_img);
  block = createSprite(502.5, 81);
  block.addImage(block_img);
  block = createSprite(569.5, 81);
  block.addImage(block_img);
  block = createSprite(636.5, 81);
  block.addImage(block_img);
  block = createSprite(703.5, 81);
  block.addImage(block_img);
  block = createSprite(770.5, 81);
  block.addImage(block_img);
  block = createSprite(368.5, 135);
  block.addImage(block_img);
  block = createSprite(435.5, 135);
  block.addImage(block_img);
  block = createSprite(502.5, 135);
  block.addImage(block_img);
  block = createSprite(569.5, 135);
  block.addImage(block_img);
  block = createSprite(636.5, 135);
  block.addImage(block_img);
  block = createSprite(703.5, 135);
  block.addImage(block_img);
  block = createSprite(770.5, 135);
  block.addImage(block_img);
  block = createSprite(368.5, 189);
  block.addImage(block_img);
  block = createSprite(435.5, 189);
  block.addImage(block_img);
  block = createSprite(502.5, 189);
  block.addImage(block_img);
  block = createSprite(569.5, 189);
  block.addImage(block_img);
  block = createSprite(636.5, 189);
  block.addImage(block_img);
  block = createSprite(703.5, 189);
  block.addImage(block_img);
  block = createSprite(770.5, 189);
  block.addImage(block_img);

  player = createSprite(200, 347);
  player.addImage("player", player_img);
  player.scale = 0.2;
}

function draw() {
  background("white");


  if (keycode = 37) {
    player.x = player.x  -5;  
  }

  drawSprites();
}