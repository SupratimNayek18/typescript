"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("../classes/Student");
var fname = "Supratim";
// fname = 10; //shows error (type safety)
console.log(fname);
var student = new Student_1.Student("supratim", 23);
console.log(student.age);
