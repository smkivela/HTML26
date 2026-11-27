

class Person {
 constructor (nimi) {

  this.nimi = nimi;
 }

 introduce() {
  console.log(`Hei! Minun nimeni on ${this.nimi}.`)
 }

}


class Student extends Person {
 constructor(nimi, course) {
  super(nimi);
  this.course = course;
 }


 introduce () {
  super.introduce();
  console.log(`Opiskelen kurssia ${this.course}.`)
 }


 study() {
  console.log(`${this.nimi} opiskelee kurssia ${this.course}.`);
 }
}


class Teacher extends Person {
  constructor (nimi, subject) {
    super(nimi);
    this.subject = subject;
  }

  introduce () {
    super.introduce();
    console.log(`Opetan ainetta ${this.subject}.`)
  }

  teach() {
    console.log(`${this.nimi} opettaa ainetta ${this.subject}.`)
  }
}


const henkilo1 = new Person("Viuhti");
const henkilo2 = new Student("Raimo", "Javascript");
const henkilo3 = new Teacher("Soili", "Matematiikka");

henkilo1.introduce();
henkilo2.introduce();
henkilo3.introduce();

henkilo2.study();
henkilo3.teach();
