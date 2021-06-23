class Tree{

    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
           
        }
        this.image=loadImage("images/tree.png");
        this.body=Bodies.rectangle(x,y,100,100,options);
       
        World.add(world,this.body);
    }
    
    display(){

        var pos=this.body.position;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image,0,0,400,600);
        pop();
    }
    
}