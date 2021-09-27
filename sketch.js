const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, box ;

var backgroundImg;

var ground;

var log1, box1;

var slingshot;

var gameState = "onSling";

var score = 0;

var boy;


function preload(){
backgroundImg = loadImage('images/background.jpg');

boy = loadImage('images/boy.png');
boy2 = loadImage('images/boy2.png');

}



function setup(){
createCanvas(1400,700);

engine = Engine.create();
world = engine.world;

ground = new Ground(700, height, 1400, 20);

ball = new Ball(300,180,40);

hoop = new Hoop(1100, 670);








slingshot = new SlingShot(ball.body,{x:200, y:280});



score = 0

}


function draw(){
    background(backgroundImg);
    Engine.update(engine);

    fill("black");
    textSize(30)
    text("Score :" + score,1000,120);

    image(boy, 100, 240, 330,400)
    

    ground.display();
    ball.display();
    hoop.display();
    slingshot.display();
    
    
    }

    function mouseDragged(){
        //if (gameState!=="launched"){
            Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
        //}
    }
    
    
    function mouseReleased(){
        slingshot.fly();
        image(boy2, 100, 240, 330,400)
        gameState = "launched";
    }

    function keyPressed(){
        if(keyCode === 32 && ball.body.speed<1){
           ball.trajectory = []; 
           Matter.Body.setPosition(ball.body, {x:200 , y:50})
           slingshot.attach(ball.body);
           
        }
    
    }
    