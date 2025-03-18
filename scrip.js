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

//6 convert km in to miles 
// This exersisie is availabe in html file

//6 convert celciuse in to farenhite 
//  This excersise is availabe in html file

//7 Check a number it is positive , negative , zero 
 //  This exersise is availabe in html file
    // Using Math.sign() mthod
 
//7 Check a number it is positive , negative , zero 
//  This exersise is availabe in html file
// Using is else ststement

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

// Find the factorial of a number
// Using recursion method
 
var number = prompt("Please enter a number")
var fact = 1;
console.log(fact);
function factrrr(n){
    if (n>number){
        return;
    }
    var temp =fact;
    fact = fact * n;
    console.log(temp + " x " + n + "=" +fact);
    n++;
    factrrr(n);
}
factrrr (1);

console.log("The number of " + number + " factorial is = " +fact);

//13 Write a program to print a number that is given by user
 function table (number){
     for (var i = 1; i <=10;  i++) {
         var res = i*number;
         console.log(number+" x "+ i+ " = " + res  ) 
        
     }
 }
 table(5);   


// 14 To check Armstrom number
// In the case of an Armstrom numberog 3 dight, the sum of cubes of each 
// dight is equal to the number of it self.
// For example 153 is an armstrom number because
// 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3 = 153 
 var number = prompt("Please enter a number");
 var temp = number;
 var off = number.toString().length
 var sum = 0;
// while(temp > 0) {
//  1  console.log(temp)
    var digit = temp%10;
//  2  console.log(digit)
    sum += digit**off;
//  3  console.log(sum)
    temp = parseInt(temp/10);
//  4  console.log(temp)
//  5  console.log('------------')

 }
 if (sum == number){
     console.log(number+ " is armstrom number")
  }
 else{
     console.log(number + " is not armstrome number")
 }

//  1  console.log(temp)
//  2  console.log(digit)
//  3  console.log(sum)
//  4  console.log(temp)
//  5  console.log('------------')
//  Thease 5 console is for how the program work step by step

// 22 Find armstrome number between an interval

 var a = prompt(("Please enter first vaue"))
 var b = prompt(("Please enter second vaue"))
 for (let i =a ; i <=b; i++) {
   var temp = i;
   var numofdigit = i.toString().length
   sum = 0;
   while (temp > 0) {
    var digit = temp%10
    temp = parseInt(temp/10)
    sum += digit ** numofdigit
   }
   if(sum == i){
    console.log(i)
   }
 }

// 15 Check the last digit is same or not
 var a = prompt(("Please enter first number"));
 var b = prompt(("Please enter second number"));
 var c = prompt(("Please enter third number"));
 var res1 = a%10;
 var res2 = b%10;
 var res3 = c%10;
 if (res1 === res2 && res1 == res3){
   console.log ("Last number is equal.")
 }
 else {
   console.log("Last number is not equal.")
 }
// 16 Check Palindrom using 
// A string is a palindrome if it is read te same from forwarde to bakwarde 
// For example: dad and madam read same either forwarde or backward
// Array methode
 var string = prompt(("Please enter a word"));
 var stringArray = string.split('');
 var stringArrayRev = stringArray.reverse();
 var revstring = stringArrayRev.join('');
 if (string === revstring){
   console.log("The stringe is palindrome")
 }
 else {
   console.log("The stringe is not palindrome")
 }

// 16 For loop method
// There is also two method in for loop
// using if else statement (1)
 var string = prompt(("Please enter a word")) 
 var len = string.length;
 for (let i = 0; i < len/2; i++) {
    if (string[i] != string[len - 1 - 1]){
         console.log("It is not a palidrom")
    
    }
  

    else{
    
      console.log("It is a palidrom")
     
    }
 }


//  method using variable (2)
 var string = prompt(("Please enter a word")) 
 var len = string.length;
 var msg = "It is palindrom string"
 for (let i = 0; i < len/2; i++) {
    if (string[i] != string[len - 1 - 1]){
       
         msg = "It is palindrom string"
    }
    console.log(msg)
   
 }

// 17 Programe to check the number 
// of the occurrances of cheracter in a string using for loop
// For example : In my name wahaj a comes two time a is a occurrence character
 var string = prompt(("Please enter a word"));
 var letter = prompt(("Please enter a letter that you want to check"));
 var stringlen = string.length;
 var counter = 0;
 for (let i = 0; i <stringlen ;++i) {
     if(string[i] == letter){
          counter++;
         }
}
          console.log(string + " => " + letter + " => " + counter)

// 18 Check wheather the string start and end with certain character
 var string = prompt(("Please enter a word"))
 var teststart =string.startsWith('W')
 var testend =  string.endsWith('j')
 if (teststart == true && testend == true){
     console.log(string + " Start with W and ends with j")
 }
 else if (teststart == true && testend == false){
     console.log(string + " Start with W and not ends with j")
 }
 else if (teststart == false && testend == true){
     console.log(string + " not start with W but end with j")
 }
 else {
       console.log(string + " Both statement are wronge you are cooked")
 } 

// 19 Check weather a string contain substring 
  Example in this line : Check weather a string contain substring. 
 Check weather is substring
 var string = prompt(("Pleae enter sentence "));
 var sub     = "The";
 console.log(string)
 console.log(sub + " => " + "is substring")
 var test1   =  string.includes(sub);
 console.lg(test1);
 var test2   = string.indexOf(sub)
 console.log(test2)

// 20 To convert a first letter of a string in uppercase
 var string = prompt(("please enter a word"))
 var first = string.charAt(0)
// 1 console.log(first)
// 2 console.log(first.toUpperCase())
// 3 var rem = string.slice(1)
 3 console.log(rem)
 var capital = first.toUpperCase()  + rem
 console.log(capital)
// console .log 1,2 and 3 isfor testing perpouse how code work step by step


// 21 count numder of vowels in a string using redex
// Vowels charecter (A,E,I,O,U)
// redex is used to match ,test find the charecter
   var string = prompt("Enter a sentence")
   const reg =  /[aeiou]/gi;
   var chars = string.match(reg);
   console.log(chars.join(','))
   console.log(chars.lenght)

// 22 Find some of natural number using recuration
   function sum (num){
     if(num>0){
         return num + sum(num-1)
     }
      else{
          return num;
       }
   }
   var res = sum(5) // change the value as your desaire
   console.log(res);

// 23 Find the factor of a number
///To be the facter of a num the number should exactely be divided(with 0 reminder)
// Example : The facter of 12 is 1,2,3,4,6 and 12.
 var number = prompt("Please enter a number")
 for (let i = 1; i <=number ; i++) {
     if(number%i == 0)
     console.log(i)
    
 }


// 24 Simple calculator using switch case 
/ var number1 = prompt("Enter a first number")
 var number2 = prompt("Enter a second number")
 var oper = prompt("Please sleact one operation + , - , * , /")
 switch(oper){
     case "+" :
         var res = parseFloat(number1) + parseFloat(number2);
         console.log(number1 + " + " + number2 + " = " + res);
         break;
         case "-" :
         var res = parseFloat(number1) - parseFloat(number2);
         console.log(number1 + " - " + number2 + " = " + res);
         break;
         case "*" :
         var res = parseFloat(number1) * parseFloat(number2);
         console.log(number1 + " * " + number2 + " = " + res);
         break;
         case "/" :
         var res = parseFloat(number1) / parseFloat(number2);
         console.log(number1 + " / " + number2 + " = " + res);
         break;
         default:
             console.log("Invalid operator")
 }


// 25 To print a fibonacci squence
// The Fibonacci sequance is the integer sequnce where the first where the first two term are 0 or 1 
// After that the first term is deffine as the sum of previouse two terms 
// Example : 0,1,1,2,3,5,8,6,21
// var a = 0;
// var b = 1;
// for(let i = 0; i <= 10 ; i++) { // change the num 10 as your desaire 
// var temp = a + b ;
// a= b;
// b = temp;
// }
// You also made this program from while loop do while loop


// 26 Replace the character of a string
 var string = "Mr Red has red car and red bike"
 console.log(string)
 var change = string.replace('Red', 'Blue')
 console.log(change)

// Using regexp method
 var string = "Mr Red has red car and red bike"
 console.log(string)
 var reg = new RegExp('red', 'gi')
 var change = string.replace(reg, 'blue')
 console.log(change)

