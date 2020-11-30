class Plinko
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            restitution:1,
            friction:0
            
            }
        
        
        this.r=5;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display()
    {
            var pos=this.body.position;  
            var angle = this.body.angle;      
            push()
            translate(pos.x, pos.y);
            rotate(angle);
            rotate(this.body.angle)
            fill("white");
            ellipseMode(CENTER);
            ellipseMode(RADIUS);
            ellipse(0,0,this.r, this.r);
            pop()
            
    }
}
