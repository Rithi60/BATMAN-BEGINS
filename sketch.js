var rainDrop1;

function preload(){
    
}

function setup(){
   createCanvas(600, 800);
    
   rainDrop1 = new Raindrop(200, 200, 24)
}

function draw(){
    rainDrop1.display();
}   

