
var trex ,trex_running;

function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,20,20);
 trex.addAnimation("trex",trex_running)
 trex.scale=0.4;


}

function draw(){
  background("white")
  var edges=createEdgeSprites()
console.log(trex_running)

if(keyDown("space")){
  trex.velocityY=-14;
}
trex.velocityY+=0.8

trex.collide(edges[3])
drawSprites();
}
