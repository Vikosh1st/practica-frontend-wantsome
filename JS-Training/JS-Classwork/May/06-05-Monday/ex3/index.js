// triunghi.constructor;                 // Triangle(a, b, c)    
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triunghi';
  }
  
  const shape = {
    type: '',
    getType: function(){
      return this.type;
    }
  }
  
  
  Triangle.prototype = shape;
  Triangle.prototype.constructor = Triangle;
  let triunghi = new Triangle(2,3,4);
  Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
  }
  console.log(triunghi);
  console.log(shape.isPrototypeOf(triunghi));
  console.log(triunghi.getType());
  console.log(triunghi.getPerimeter());