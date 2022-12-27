function sayHi(name) {
  console.log(`hello ${name}`);
}

/* sayHi('jack')
let john ='john';
let paul = 'paul'
module.exports.john = john;
module.exports.bob = 'bob' */
/* let b = 'jack',  nom= 'j'

let obj = {
  
};
obj = {b,nom}
console.log(obj) */

//console.log(module);

const person ={
  firstname:"John",
  lastName: "Reese",
  age: 41,
  fullname: function(){
    return this.firstname +" "+ this.lastName
  },
  get infoAge(){
    return this.age
  }
}

console.log(person.infoAge);
console.log(person.fullname())
