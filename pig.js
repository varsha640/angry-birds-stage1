class Pig {
    constructor(x,y){
    
    var options = {
        restitution:0.5,
        friction : 0.5,
        density :1.0
    }
    
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(earth,this.body)
    }
    
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
     rotate(this.body.angle)
     rectMode(CENTER)
     fill ("pink")
     rect(0,0,this.width,this.height)
    pop()
    }
    
    
    }