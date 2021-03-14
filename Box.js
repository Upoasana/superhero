class Box
{
    constructor(x,y)

    {
        var options=
        {

            'restitution':0.8,
            'friction':1.0,
           'density': .20
            
        }
        this.body=Bodies.rectangle(x,y,60,60,options)
        this.width=40;
        this.height=40;
        World.add(world,this.body);

                  
    }

    display()

    {  
        var angle=this.body.angle;

        var pos=this.body.position
        push ()
        translate (pos.x,pos.y)
        rotate (angle)

        rectMode(CENTER);
       
        fill ("red")
        rect(0,0,this.width,this.height)
        pop ();

    }

}