

function preload()
{
    //load animatio
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundimg= loadImage("ground2.png");

}

function setup()
{
    createCanvas(600,200)
    
    //create a trex sprite (x,y,width,height)
    trex = createSprite(50,160,20,50);
    trex.scale=0.5;
    //adding animation
    trex.addAnimation("trexanimation",trex_running);
    //creating boundaries 
    edges=createEdgeSprites();
    //creating ground
    ground= createSprite(300,180,600,30);
    //adding ground picture
    ground.addImage("groundimage",  groundimg)
    ground.x=300;

    //creating invisible ground
    invisibleground= createSprite(300,200,600,10);
    invisibleground.visible= false  
  

}

function draw()
{
    background("white");
    //infinte ground 

    if(ground.x<0)
    {
      ground.x=300;
    }

    //to jump trex
    if(keyDown("space") && trex.y>100){
      trex.velocityY= -5;
    }

    console.log(trex.y);

    //to add gravity in trex
    trex.velocityY=trex.velocityY + 0.5 
    //trex.collide(edges[3]);
    //to collide trex with invisible ground 
    trex.collide(invisibleground);

    // to move ground in reverse order
    ground.velocityX= -2
    drawSprites();

}