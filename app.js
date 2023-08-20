// ==================codes by sarah sajid================

//homework ==> self invoking funcs
// (function show(){
//     alert("hi")
// })()

// class car {
//     color="black";
//     mirrors=2;
//     seats =5;
//     name ="civic"
//     engine(a,b){
//         console.log("i am engine");
//         return(a+b)
//     }
// }
// class SMIT{
//     auditorium= 1;
//     labs = 2;
//     AC(){
//         console.log("its working ");
//     }
// }

// let objCar = new car();
// let objSmit = new SMIT();

// // console.log(objCar.color);
// // console.log(objCar.mirrors);
// // console.log(objCar.engine(1,2));

// // console.log(objSmit.auditorium);
// // console.log(objSmit.labs);
// console.log(objSmit.AC());



//objects inside class
// class human{
//     objectHuman={
//         eyes:2,
//         hairsColor : "brown",
//         a:9,
//         talk(){
//             console.log("we can talk");
//         },
//         walk(){
//             console.log("we can walk");
//         }
//     }
// }

// let objHuman = new human();
// let obj_1_Human = new human();
// console.log(objHuman.objectHuman.eyes);
// console.log(objHuman.objectHuman.talk());


//constructors
// class car {
//     constructor(a,b){
//         console.log(a%b);
//     }
//     color="black";
//     mirrors=2;
//     seats =5;
//     name ="civic"
//     engine(a,b){
//         console.log("i am engine");
//         return(a+b)
//     }
// }
// let objCar = new car(8,9);
// let objCar1 = new car(1,3);
// let objCar2 = new car(7,9);
// let objCar3 = new car(8,5);

// ==================codes by farwa================


// /// Encapsulation (Hiding of Data)

// class Car {
//     constructor(color, model, year) {
//       this.color = color; //public
//       this._model = model;//private
//       this._year = year;
//       this._speed = 0;
      
//     }
//     // getInfo(){ //dont do like this!!
//     //     return this.color;
//     //     return this._model;
//     //     return this._year;
//     // }

//     getColor() {//getter
//       return this.color;//returns color
//     }
//     getModel() {
//       return this._model;//returns model
//     }
//     getYear() {
//       return this._year;
//     }
//     getSpeed() {
//       return this._speed;
//     }
  
//     accelerate() {
//       this._speed += 10;
//       console.log(`The ${this._year} ${this.color} ${this._model} is accelerating. Current speed: ${this._speed} mph.`);
//     }
  
//     brake() {
//       if (this._speed >= 10) {
//         this._speed -= 10;
//         console.log(`The ${this._year} ${this.color} ${this._model} is braking. Current speed: ${this._speed} mph.`);
//       } else {
//         console.log(`The ${this._year} ${this.color} ${this._model} is already stopped.`);
//       }
//     }
  
//     getStatus() {
//       return `The ${this._year} ${this.color} ${this._model} is currently traveling at ${this._speed} mph.`;
//     }
//   }
  
//   const myCar = new Car('black', 'Camry', 2022);
//   console.log(myCar.getStatus()); // Output: The 2022 Toyota Camry is currently traveling at 0 mph.
  
//   myCar.accelerate(); // Output: The 2022 Toyota Camry is accelerating. Current speed: 10 mph.
//   myCar.accelerate(); // Output: The 2022 Toyota Camry is accelerating. Current speed: 20 mph.
  
//   myCar.brake(); // Output: The 2022 Toyota Camry is braking. Current speed: 10 mph.
//   myCar.brake(); // Output: The 2022 Toyota Camry is braking. Current speed: 0 mph.
  
//   console.log(myCar.getStatus()); // Output: The 2022 Toyota Camry is currently traveling at 0 mph.