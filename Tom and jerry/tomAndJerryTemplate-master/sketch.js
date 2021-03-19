var cat, catsit, catrun, catstand, catsee, catgroup, catGroup;
var mouse, mousegift, mouseteasing, mousesee, mousehappy, mouseGroup;
var backgroundimg


function preload() {
 catsit=loadImage("images/cat1.png")
 catrun=loadImage("images/cat2.png")    
 catstand=loadImage("images/cat3.png")
 catsee=loadImage('images/cat4.png')

backgroundimg=loadImage("images/garden.png")

 mousegift=loadImage("images/mouse1.png")
 mouseteasing=loadImage("images/mouse3.png")
 mousesee=loadImage("images/mouse4.png")
 mousehappy=loadImage("images/mouse2.png")


}

function setup(){
      createCanvas(600,600);
    cat=createSprite(600, 600, 20, 20)
    cat.addImage(catstand)
    cat.scale=0.2

     mouse=createSprite(100, 400, 10, 10)
    mouse.addImage(mousehappy)
    mouse.scale=0.2

}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide
    cat.x=mouseX
    cat.y=mouseY

    if(mouse.isTouching(cat)){
        cat.addImage(catsee)
        mouse.addImage(mouseteasing)
    }
    else{
cat.addImage(catstand)
mouse.addImage(mousehappy)


    }
     



    drawSprites();
}


function keyPressed(){

 


}
