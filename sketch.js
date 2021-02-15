const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
var  MuskRadius= 20;

function setup() {
  createCanvas(windowWidth,windowHeight);
 teslaEngine=Engine.create()
 spaceX= teslaEngine.world
 
 Elone = Bodies.circle(width/2,height/2,MuskRadius,{restitution:1})
 World.add(spaceX,Elone)
ground=Bodies.rectangle(width/2,height-60,width,20,{isStatic:true})
World.add(spaceX,ground)
console.log(Elone)
}

function draw() {
  background(0);  
 Engine.update(teslaEngine)
 ellipseMode(RADIUS)
 ellipse(Elone.position.x,Elone.position.y,MuskRadius,MuskRadius) 
 rectMode(CENTER)
rect(ground.position.x,ground.position.y,width,20)

}