class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.1,
            density:0.4
          }
          this.body=Bodies.circle(x,y,radius,options)
          this.x=x
          this.y=y
          this.radius=radius
          World.add(world,this.body)

    }
     display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop()
     }
}