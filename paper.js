class Paper{
constructor(x,y,radius){
var options={
   ' isStatic ':false,
    'restitution':0.3,
    'friction':0.5,
    'density':0.2
}
this.body = Bodies.circle(x,y,radius);
World.add(world,this.body);
this.r=radius
}
display(){
    ellipseMode(RADIUS)
var pos=(this.body.position);
ellipse(pos.x,pos.y,40,40);

}


}