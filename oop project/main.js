//object literal

// const Person = {
//   //object literal
//   first_name: "Nikola",
//   last_name: "Nikolic",
//   phone: "0657890098",
//   getNameAndPhone: function () {
//     console.log(`${this.first_name} - ${this.phone}`);
//   },
// }; //kada se radi objektivno orjentisani nazivi klasa treba da se nazivaju velikim slovima

// const Person2 = {
//   //object literal
//   first_name: "Ivan",
//   last_name: "Ivanovic",
//   phone: "06335245",
//   getNameAndPhone: function () {
//     console.log(`${this.first_name} - ${this.phone}`);
//   },
// };

// Person.getNameAndPhone();
// Person2.getNameAndPhone();

//komplikuje se kad hocemo da pisemo vise objekta, zato se koristimo object konstruktorom

//konstruktor objekat
// function Person(first_name, last_name, phone) {
//   this.frist_name = first_name;
//   this.last_name = last_name;
//   this.phone = phone;

//   this.getNameAndPhone = function () {
//     console.log(`${first_name} - ${phone}`);
//   };
// }

// let person1 = new Person("Niko", "Nikolic", "06731231");
// let person2 = new Person("Ivan", "Ivanovic", "06731231");

// person1.getNameAndPhone();
// person2.getNameAndPhone();

//Create Object Metod
// const Osoba = {
//   first_name: "Niko",
//   getNameAndPhone: function () {
//     console.log(`${this.first_name} - ${this.phone}`);
//   },
// };

// let niko = Object.create(Osoba);

// niko.phone = "02313123";

// niko.getNameAndPhone();

// let ivan = Object.create(Osoba);
// ivan.phone = "111121231";
// ivan.first_name = "Ivan";

// ivan.getNameAndPhone();

// Pravljenje klase =

class Person {
  //pisemo specificnu rec construktor kada radimo sa klasom

  constructor(first_name, last_name, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }
  getNameAndPhone() {
    console.log(`${this.first_name} - ${this.phone}`);
  }
} // klasa kalup ili sablon koriscene klase

let person1 = new Person("Niko", "Nikolic", "06987987");
let person2 = new Person("Ivan", "Ivanovic", "068089098");

person1.getNameAndPhone();
person2.getNameAndPhone();
