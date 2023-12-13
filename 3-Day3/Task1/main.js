class polygon{
    parameter;
    area;
    constructor(){
        //l/(2tan(180/n))
        if(this.constructor.name=='polygon')
            throw new Error("you can't make an instance of polygon ")
    }
    toString(){
        return `parameter = ${this.parameter} , area = ${this.area}`
    }
}
class triangle extends polygon{
    constructor(width,height){
        super();
        this.parameter= 3*width;
        this.area=0.5*width*height;
    }
    // toString(){
    //     super.toString()
    // }
}
class circle extends polygon{
    constructor(radius){
        super();
        this.parameter = 2 * Math.PI * radius;
        this.area = Math.PI * radius * radius;
    }
    // toString(){
    //     super.toString()
    // }
}
class rectangular extends polygon{
    constructor(width,height){
        super();
        this.parameter = 2*(width+height);
        this.area = width*height;
    }
    // toString(){
    //     super.toString()
    // }
}
class square extends rectangular{
    constructor(width){
        super(width,width);
    }
    // toString(){
    //     super.toString()
    // }
}

// let p = new polygon();

let tr = new triangle(5,3);
let cr = new circle(5);
let rc = new rectangular(4,6);
let sq = new square(4);

console.log(`${tr}`);
console.log(cr.toString());
console.log(rc.toString());
console.log(sq.toString());