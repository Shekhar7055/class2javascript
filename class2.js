//2. polymorphisam -> 'Poly' means 'many' and 'morph' means 'forms' 
// same method sound in each class in different forms

class Animal{
    sound(){
        console.log("Animal Sounds");
    }
}

class Dog{
    sound(){
        console.log("Dog barks");
    }
}

class Cat{
    sound(){
        console.log("Cat Meow");
    }
}

let a = new Animal();
let d = new Dog();
let c = new Cat();

a.sound();
d.sound();
c.sound();

// console.log(a);
// console.log(d);
// console.log(c);

