class redZone{
 constructor(x,y,width,height){

    var redZoneOptions ={
        isStaic: true
    }
 
    this.height = height;
    this.width = width;

    this.body = Bodies.rectangle(x,y,width,height,redZoneOptions)
  World.add(World, redZone);
}
    display(){
    push();
    fill("red");
    var pos = this.body.position
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height)
    pop();
    }
}
