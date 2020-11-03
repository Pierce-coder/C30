class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    console.log (this.body);
    this.visiblity = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      //do nothig
      //remove the pig
      World.remove(world, this.body);
      push();// save the cavas images
      this.visiblity = this.visiblity-5;
    tint(255, this.visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();// brigs back the cavans images
    }
  }

};