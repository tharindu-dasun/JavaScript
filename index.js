console.log("Hello");
window.alert("Success !")

let firstName = "tharindu";
// let age = 22 ;
// let drive = true;
//
// console.log(firstName)
// console.log(age)
// console.log(drive)
//
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "Age " + age;
// document.getElementById("p3").innerHTML = "Drive " + drive;

// Arithmatic expression

// let students = 20;
//
// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
// students = students % 1;
//
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students %= 3;
//
// let result = 5 + 5 * (3+4);
// console.log(result);

//User Input

// let userName = window.prompt("Your Name ?");
// console.log(userName);

// let userName;
//
// document.getElementById("btn").onclick = function (){
//     userName = document.getElementById("my").value;
//     console.log(userName);
//     document.getElementById("myLabel").innerHTML = "Hello "+userName;
// }

//Type Conversion

// let age = window.prompt("How old are u?")
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
//
// console.log("Happy " + age + " Birthday !")

// let x = Number("2.55");
// let y = String("2.55");
// let z = Boolean("AAA");
//
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//Const

// const height = 50;
// let width;
//
// width = window.prompt("Enter width :");
// let area = height * width;
// console.log("Area : " + area);

//hypotenuse

// document.getElementById("btn").onclick = function (){
//     let a = document.getElementById("sideA").value;
//     a = Number(a);
//     let b = document.getElementById("sideB").value;
//     b = Number(b);
//
//     let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2 ));
//
//     document.getElementById("cLable").innerHTML = "C : " + c;
// }

//Countdown
//
// let count = 0;
//
// document.getElementById('decrease').onclick = function () {
//     count-=1;
//     document.getElementById("count").innerHTML = count;
// }
// document.getElementById('reset').onclick = function () {
//     count =0;
//     document.getElementById("count").innerHTML = count;
// }
// document.getElementById('increase').onclick = function () {
//     count+=1;
//     document.getElementById("count").innerHTML = count;
// }

//Raandom

// let x;
// let y;
// let z;
//
// document.getElementById("roll").onclick = function () {
//     x = Math.floor(Math.random()*6)+1;
//     y = Math.floor(Math.random()*6)+1;
//     z = Math.floor(Math.random()*6)+1;
//
//     document.getElementById("xx").innerHTML = x;
//     document.getElementById("yy").innerHTML = y;
//     document.getElementById("zz").innerHTML = z;
// }

let fullName = "tharindu dasun";
let firstname ;
let lastname ;

firstname = fullName.slice(0,fullName.indexOf(""));
lastname = fullName.slice(0,fullName.indexOf(""));

console.log(firstname);
console.log(lastname);