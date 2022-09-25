var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Player, Player_Running;
var Huggy, Huggy_Wuggy, HuggyG ;
var BoxGroups, Box1, Box2, Box3,Box1Img, Box2Img, Box3Img, Box1G, Box2G, Box3;
var BackgroundImg, Background;
var score=0;

function preload(){

Box1Img = loadImage("Box1.png");
Box2Img = loadImage("Box2.png");
Box3Img= loadImage("Box3.png");

BackgroundImg = loadImage ("Escenario.jpg");

Player_Running = loadAnimation("Player1.png", "Player2.png");

Huggy_Wuggy = loadImage("Huggy1.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);

Background = createSprite(width/2,400);
Background.addImage(BackgroundImg);
Background.velocityX= -5;

Player = createSprite(70,150);
Player.addAnimation("Running",Player_Running);
Player.scale=1;

Box1G=new Group();
Box2G=new Group();
Box3G=new Group();
HuggyG=new Group();

}

function draw() {
    background(0);
    drawSprites();

    if(Background.x < 400 ){
    Background.x = width/2;
      }

      edges = createEdgeSprites();
      Player.collide(edges);

      Player.y = World.mouseY;

   

    if (Box1G.isTouching(Player)) {
        Box1G.destroyEach();
        score=score + 50;
        }

      else if (Box2G.isTouching(Player)) {
        Box2G.destroyEach();
        score=score + 100;
        }

        else if (Box3G.isTouching(Player)) {
            Box3G.destroyEach();
            score=score + 100;
        }
        
      else{ if(HuggyG.isTouching(Player))  {
          gameState=END;

        Box1G.destroyEach();
        Box2G.destroyEach();
        Box3G.destroyEach();
        HuggyG.destroyEach();
        
        
        Box1G.setVelocityYEach(0);
        Box2G.setVelocityYEach(0);
        Box3G.setVelocityYEach(0);
        HuggyG.setVelocityYEach(0);
        Player.velocity=0;


        }
          }
          
            createBox1();
            createBox2();
            createBox3();
            createHuggy();


          textSize(20);
          fill(255);
          text("Puntos: "+ score,width-150,30);

          function createBox1() {
            if (World.frameCount % 200 == 0) { 
            
              var Box1 = createSprite(width+20,height-300,40,10)
              Box1.y = Math.round(random(100,600 ))
              Box1.scale=1;
              Box1.addImage(Box1Img)
              Box1.velocityX = -5;
              Box1.lifetime = 800;
              Box1G.add(Box1);
            }
          }
          
          function createBox2() {
            if (World.frameCount % 320 == 0) {
        
             var Box2 = createSprite(width+20,height-300,40,10)
             Box2.y = Math.round(random(100,600 ))
             Box2.scale=1;
             Box2.addImage(Box2Img)
             Box2.velocityX = -5;
             Box2.lifetime = 800;
             Box2G.add(Box2);
          }
          }
          
          function createBox3() {
            if (World.frameCount % 410 == 0) {
          
            var Box3 = createSprite(width+20,height-300,40,10)
             Box3.y = Math.round(random(100,600 ))
             Box3.scale=1;
             Box3.addImage(Box3Img)
             Box3.velocityX  = -5;
             Box3.lifetime = 800;
             Box3G.add(Box3);
            }
          }
          
          function createHuggy(){
            if (World.frameCount % 530 == 0) {
            
            var Huggy = createSprite(width+20,height-300,40,10)
            Huggy.y = Math.round(random(100,600 ))
            Huggy.addImage(Huggy_Wuggy);
            Huggy.scale=2;
            Huggy.velocityX = -4;
            Huggy.lifetime = 800;
            HuggyG.add(Huggy);
            }
          }
}