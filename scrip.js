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

//8 Genrate a random number
//this is for floating number start its in didit but when condition complet it get in to point example: x*(100-1)+1 1    
//45.07438682462163
var x = Math.random()
console.log("Before calculation "+x);
x = x*(10-1)+1; // change the number acording to your need for example want random num from 1 to 100 write x*(100-1)+1
console.log("After calculation "+x)

//8 Genrate a random number
//this is for integer number start its in didit but when condition complet it get in to point example: x*(100-1)+1 1    45
var x = Math.random()
console.log("Before calculation "+x);
x = x*(1000-1)+1; // change the number acording to your need for example want random num from 1 to 1000 write x*(1000-1)+1
// and at the end the output come multiply it whith Math.floor>(x)
console.log("After calculation "+x)
console.log("After floor calculation calculation "+ Math.floor(x))


//8 Genrate a random number
var x = Math.random()
console.log("Before calculation "+x);
x = x*10000;            //This genrate random ottp that companies end for security purposes
console.log("After floor calculation calculation "+ Math.floor(x))


//9 Cheack the number if it is evend or odd
// Using if else statment
var x = 3
if (x%2 == 0){
        console.log("Even number "+x)
}
else{
    console.log("Odd number "+x)
}

//9 Cheack the number if it is evend or odd
// Using terminary operater
var x = 4
var res = x%2 == 0 ? "even" : "odd"
console.log(x+ " is "+ res+ " number")

//10 Check the number is prime or not
// A prime number is a positive integer that is only divisible by 1 and it self.Example:2,3,5,7,11
var number = parseInt(prompt("Please enter a number"));

if (number == 1) {
    console.log(number + " nither is prime nor composite")
}
 else if(number < 1){
    console.log(number +" is not a prime number")
}else{
    for(var i = 2; i<number; i++ ){
        if (number%i == 0 ){
        var res =   console.log(number +" is not a prime number")
        break;
    }
    else{
        var res =   console.log(number +" is a prime number")
    }
}
    console.log.apply(res)
}


// 11 Find the largest num between three num
var a = prompt("Please enter first number")
var b = prompt("Please enter second number number")
var c = prompt("Please enter third number")
var x = Math.max(a,b,c);
console.log(x + " is large number")

// 11 Find the largest num between three num
// User define

function check(p,q,r){
    if (p >= q && p >= r){
        return p;
    }
  else if (q >= p && q >= r){
        return q;
    }
    
   else{
        return r;
    }
      
}
var a = prompt("Please enter first number")
var b = prompt("Please enter second number number")
var c = prompt("Please enter third number")
var x =check(a,b,c);
console.log(x + " is large number")

//12 Find the factorial of a number
// This factorial of a number is the product of all number from 1 to that number
// Example: 1*2*3*4*5 = 120

var number = prompt("Please enter a number") 
var fact = 1;
if (number == 0){
    console.log("The factorial of "+ number +" is 1")
}
else if (number < 0){
    console.log("The factorial of negative number is not possible")
}
else {
    for (let i = 1;i<=number;  i++) {
             fact = fact * i;
    }
    console.log("The factorial of "+ number +" is " + fact)
}
