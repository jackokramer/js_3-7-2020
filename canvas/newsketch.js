let canvasElement = document.getElementById('my-canvas')
let canvasContext = canvasElement.getContext("2d"); 

let gravityAcel = 1;
let ball1;
let ballArr = [];

function setup(){
    createCanvas(720,480);
    ball1 = new Ball(width/2, 0);
}

function draw(){
    bacgkround(25);
    ball1.move();
    ball1.display();
}

function Ball(xPos, yPos){
    this.x = xPos;
    this.y = yPos;
    this.diameter = 50;
    this.speed = 0;
    this.move = function(){
        this.y +=this.speed;
        if(this.y >=(height-this.diameter/2)){
            this.y = height - this,diameter/2;
            this.speed += gravityAcel;
        }
    }
    this.display= function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    } 
}

// Not working