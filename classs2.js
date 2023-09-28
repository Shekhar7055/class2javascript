//Encapsulatio----> capsule
// The wrapping of data and function into a single unit (class) is known as Encapsulation.
//DATA----> Data can not be accesed outside unit only those function are wrapped in the class can
// example ---------

function Person (_name, _age){
    let name = _name   // by using let function it is an private property but not exceed
    this.age = _age

    this.getName = function(){
        return name;
    }
}

let p = new Person("Shekhar" , "25");
p.getName();
p.name = "Kamlesh";
// console.log(p);
console.log(p.getName())


