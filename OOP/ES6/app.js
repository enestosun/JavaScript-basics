//   Syntacctic Sugar

//  Class  kullanımı


// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
// }

// const emp1 = new Employee("Enes",24,3000);

// console.log(emp1);


// class Employee {

//     constructor(name,age,salary){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }

//     showInfos(){
//         console.log("İsim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
//     }
// }



// const emp1 =new Employee("Enes",24,3000);

// console.log(emp1);
// emp1.showInfos();













//   Statik Metodlar


// class Matematik {

//     // cube(x){
//     //     console.log(x*x*x);
//     // }
//     static cube(x){
//         console.log(x*x*x);
//     }
// }


// const math = new Matematik();
// console.log(math);
// math.cube(3);




// Matematik.cube(3);













//     Kalıtım   -  Inheritance






class Person{          //  Superclass , Baseclass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yas: " + this.age);
    }
}

class Employee extends Person{      //    Derivedclass , Subclass , childClass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary=salary;
    }
    showInfos(){      // Overriding
        console.log("İsim: " + this.name + " Yas: " + this.age + " Maas: "+ this.salary);
    }
}

const emp= new Employee("Enes",24,3000);
emp.showInfos();
console.log(emp);