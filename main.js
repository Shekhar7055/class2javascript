let myObj = {};
console.log(myObj);// empty object

let person ={
    name : "Shekhar",
    age : 26
}

console.log(person);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("group"));

function Person(_name,_age){
    
        this.name = _name,
        this.age = _age 

}
let p = new Person("Shekhar Singh Thapa",24)
console.log(p);