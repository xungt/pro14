var PLAY =1
var END = 0
var GAMESTATE=1
var score=0
var sword , swordimage,enemygroup,enemite,gameoverimg
 var fruit,enemy,r,fruit1,fruit2,fruit3,fruit4,fruitgroup
function preload(){
gameoversound = loadSound("gameover.mp3")
swordimage = loadImage("sword.png")
 enemite = loadAnimation("alien1.png","alien2.png")
 gameoverimg = loadImage("gameover.png")
 fruit1 = loadImage("fruit1.png")
 fruit2 = loadImage("fruit2.png")
 fruit3 = loadImage("fruit3.png")
 fruit4 = loadImage("fruit4.png")
}
function setup(){
createCanvas( 100,200)
 sword = createSprite(30,120,50,50)
sword.addImage(swordimage)
fruitgroup=new Group()
enemygroup=new Group()


}
function draw(){
background("pink")
sword.y = World.mouseY
sword.x = World.mouseX
fruits()
Enemy()

if(sword.isTouching(fruitgroup)){
fruitgroup.destroyEach()
score=score+2

}
if(sword.isTouching(enemygroup)){
GAMESTATE=0
}
if(GAMESTATE===0){
fruitgroup.destroyEach()
enemygroup.destroyEach()
sword.destroy()
var gameovering = createSprite(50,100)
gameovering.addImage(gameoverimg)
gameoversound.play()



}
text("score:"+score,30,50)
drawSprites()
}

function fruits(){
if(World.frameCount%80===0){
fruit=createSprite(random(10,90),random(10,190),50,50)
r = round(random(random(1,4)))
if(r===1){
fruit.addImage(fruit1)
}
if(r===2){
fruit.addImage(fruit2)
}
if(r===3){
fruit.addImage(fruit3)
}
if(r===4){
fruit.addImage(fruit4)

}
fruit.setlifetime = 100
fruitgroup.add(fruit)
}




}

function Enemy(){
if(World.frameCount%200===0){
enemy=createSprite(random(10,90),random(10,190),50,50)
enemy.addAnimation("enemyanimation",enemite)
monster.setLifetime = 50
enemygroup.add(enemy)
}
}