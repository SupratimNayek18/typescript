export class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let student1 = new Student("supratim", 23);
console.log(student1.name);
