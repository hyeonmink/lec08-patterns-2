interface Shape {
    move();
}

class Rectangle implements Shape {
    move(){}
}

class Circle implements Shape {
    move() {}
}

class ComplexShape implements Shape {

    private shapes = [];

    add(shape){
        this.shapes.push(shape);
    }

    move() {
        this.shapes.forEach(shape => shape.move())
    }

}


let complex = new ComplexShape();
complex.add(new Rectangle());
complex.add(new Rectangle());
complex.add(new Circle());

let complex2 = new ComplexShape();
complex2.add(new Rectangle());
complex2.add(new Circle());
complex2.add(new Circle());

complex.add(complex2);

complex.add(new ComplexShape());

//move everything
complex.move();
