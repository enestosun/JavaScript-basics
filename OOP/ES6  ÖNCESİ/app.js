// const emp1 = {
//     name:"Enes",
//     age:25,
//     showInfos:function(){
//         console.log("Bilgiler Gösterilior")
//     }
// }

// const emp2 = { 
//     name:"Mustafa",
//     age:22
// }

// emp1.salary = 4000;
// emp1.showInfos();

// console.log(emp1);



// function Employee(name,age,salary){    // Yapıcı   Fonksiyon
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log(this.name,this.age,this.salary);
//     }
// }


// const emp1 = new Employee("Enes",25,3000);
// const emp2 = new Employee("Ahmet",19,4000);



// console.log(emp1);


// function Employee(name,age){
//     this.name = name;
//     this.age = age;

    // this.showInfos = function(){
    //     console.log("İsim: " +this.name + " Yas: " +this.age);
    // }
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim: " +this.name + " Yas: " +this.age)
// }

// const emp1 = new Employee("Enes",23);
// const emp2 = new Employee("Ahmet",19);


// console.log(emp1);
// console.log(emp2);
// emp2.showInfos();















//     Object  Create



// const obj = {
//     test1: function(){
//         console.log("Test1")
//     },
//     test2:function(){
//         console.log("Test2");
//     }
// }



// console.log(obj);


// const emp = Object.create(obj);


// console.log(emp);






// function Person(){
//     this.test1= function(){
//         console.log("Test1");
//     }

// }
// Person.prototype.test1= function(){
//     console.log("Test1")
// }
// Person.prototype.test2= function(){
//     console.log("Test2")
// }

// const person = new Person();

// console.log(person)

// function Employee(name,age){
//     this.name=name,
//     this.age=age
// }


// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.test3 = function(){
//     console.log("Test3");
// };
// const emp1 = new Employee("Enes",24);
// console.log(emp1);
// emp1.test2();
// emp1.test3();


























//     Call  Apply  Bind      Fonksiyonları



// const obj1 = {
//     number1:10,
//     number2:20
// };

// const obj2 = {
//     number1:30,
//     number2:40,
    
// };


// function addNumbers(number3,number4){
//     console.log(this)
//     console.log(this.number1 + this.number2 + number3 + number4);
// }



// addNumbers(100,200);

// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);


// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);




//  Bind

// function getNumbersTotal(number3,number4){
//     return this.number1 + this.number2 + number3 + number4;
// };

// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);

// console.dir(copyFunc2);


// console.log(copyFunc1(100,200));
// console.log(copyFunc2(100,200));













//     KALITIM - INHERITANCE






function Person(name,age){
    this.name = name;
    this.age = age;
}


Person.prototype.showInfos = function (){
    console.log("İsim: " + this.name + " Yas: " + this.age);
}



// const person = new Person("Enes",24);
// console.log(person);


function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
const emp1 = new Employee("Enes",24,3000);

console.log(emp1);
emp1.showInfos();
emp1.toString();


















