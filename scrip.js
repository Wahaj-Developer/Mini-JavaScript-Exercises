//1  Print hellow word in three method

 console.log("hellow world")
 alert("hellow world")
 document.write("hellow word")

 //2 adding two num
 let a = 5;
 let b = 6;
 var c = a+b;
 console.log(c)


 //3 adding two num from user side  just like a calculatoer

 let a = prompt("please enter first number");
 let b = prompt("please enter second number");
 var c = parseInt(a)+parseInt(b);
 console.log(c)

// 3 find the square root of a num 

 var a = prompt("Enter a num")
 var b = Math.sqrt(a)
  console.log(b)


//4  Find the area of a triangle (write triangle)

var beas = prompt("please enter the base value");
var height = prompt("please enter the height value");
var area  = (beas* height)/2
console.log(area)
// 4  Find the area of a regular triangle (any type of triangle)

var a = 10;
var b = 5;
var c = 10;
var s  = (a+b+c)/2;
var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp)
console.log(area)


//4  Find the area of a regular triangle (any type of triangle)
   value is get by user
var a = parseFloat(prompt("Enter the value of side a:"));
var b = parseFloat(prompt("Enter the value of side b:"));
var c = parseFloat(prompt("Enter the value of side c:"));
var s  = (a+b+c)/2;

var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp)
console.log(area)

//5 sawaping using temporary variable
//   giving a value to the b and b value to the a

var a = prompt("Please enter the a value")
var b = prompt("Please enter b the value")
 console.log(`This value is: ${a}, This value is ${b}`)
 var  temp;
temp = a;
 a = b;
b = temp;
console.log(`This value is: ${a}, This value is ${b}`)

//5 without temperary variable
var a = parseInt(prompt('Please enter the a value'))
var b = parseInt(prompt('Please enter b the value'))
 console.log(`This value is: ${a}, This value is ${b}`)

a = a+b;
b = a-b;
a = a-b;
console.log(`This value is: ${a}, This value is ${b}`)

//6 convert in to miles 
// user define function
function convert(){
    var kms = document.getElementById('data').value
    const facter = 0.62137
    var miles = kms  * facter
    document.getElementById('result').innerText = `${miles} miles`
}

//6 convert in to miles 
// user define function
function convert(){
    var c = document.getElementById('data').value
    var f = (c * 1.8) +32 ;
    document.getElementById('result').innerText = `${f} Fahrenheit`
}

//7 Check a number it is positive , negative , zero 

function check() {

    var value = document.getElementById('data').value;
    var result = Math.sign(value)
    document.getElementById('result').innerText = result;

}

//7 Check a number it is positive , negative , zero 

function check() {

    var value = document.getElementById('data').value;
    if(value > 0){
       result =`${value} is positive`;
    }
    else if(value < 0){
        result =`${value} is negative`;
    }
    else if (value == 0) {
        result =`${value} is zero`;
    }
    else{
        result =`${value} is not a number`;
    }
 
    document.getElementById('result').innerText = result;
}
