// Assignment # 21-25 //

//1. Write a program that takes two user inputs for first and last name 

/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullNme = firstName +" "+ lastName;
alert("Hello "+fullNme+"!"); */

//2. Write a program to take a user input about his favorite mobile phone model

/* var mobile = prompt("Enter your favourite mobile phone model");
var len = mobile.length;
document.write("My favourite phone is: "+mobile+"<br>");
document.write("Length of string: "+ len); */

//3. Write a program to find the index of letter “n” 

/* var word = "Pakistani";
var find = word.indexOf("n");
document.write("String: "+word+"<br>");
document.write("Index of 'n': "+find); */

//4. Write a program to find the last index of letter “l”

/* var word = "Hello World";
var find = word.lastIndexOf("l");
document.write("String: "+word+"<br>");
document.write("Last index of 'l': "+find); */

//5. Write a program to find the character at 3rd index in the word “Pakistani” 

/* var word = "Pakistani";
var find = word[3];
document.write("String: "+word+"<br>");
document.write("Character at Index 3 : "+find); */

//6. Repeat Q1 using string concat() method.

/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(' ',lastName);
alert("Hello "+fullName+"!"); */

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad”

/* var word = "Hyderabad";
var replace = word.replace("Hyder", "Islam");
document.write("City: "+ word+"<br>");
document.write("After Replacement: "+replace); */

//8. Write a program to replace all occurrences 

/* var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
document.write("Message: "+ message+"<br>");
document.write("After Replacement: "+replace); */

//9. Write a program that converts a string “472” to a number 472

/* var str = "472";
var num = parseInt(str);
document.write("Value: "+str+"<br>");
document.write("Type: "+ typeof(str)+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof(num)); */

//10. Write a program that takes user input. Convert and how the input in capital letters

/* var word = prompt("Enter a word");
var capital = word.toUpperCase();
document.write("User Input: "+ word+"<br>");
document.write("Upper Case: "+ capital); */

//11. Write a program that takes user input. Convert and show the input in title case

/* var word = prompt("Enter a word");
var title = word[0].toUpperCase();
var replace = word.replace("f", title);
document.write("User Input: "+ word+"<br>");
document.write("Title Case: "+ replace); */

//12. Write a program that converts the variable num to string.

/* var num = 35.36;
var str = num.toString();
document.write("Number: "+ num+"<br>");
var rem = str.replace(".","");
document.write("Result: "+ rem+"<br>"); */

//13. Write a program to take user input and store username in a variable

/* var username = prompt("enter a username");
if(username.includes("@")||username.includes(",")||username.includes(".")||username.includes("!")){
    alert("Please enter a valid username");
}
else{
    alert("username is valid");
} */

//14. Write a program to enable “search by user input” in an array.

/* var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?");
var str1 = search.toLowerCase();
for(i=0; i< items.length; i++){
    if(items[i] == str1){
        document.write(items[i] + " is available at index "+i+" in our bakery"+'<br/>');    
    }    
}
if(!items.includes(str1) || !str1.includes(str1) ){
    document.write("We are sorry. "+search + " is not available in our bakery"+'<br/>');
} */


//15. Write a program to take password as an input from user. 

/* var pass = prompt("Enter your Password");
document.write("Entered Password: "+pass+"<br>");
if(pass.length<6)
{
    document.write("Password length can not be less than 6"+"<br>");
}
else if(pass[0]>= "0" && pass[0]<= "9" ){
    document.write("Password can not start with a number"+"<br>");
}
else{
    document.write("Password is valid"+"<br>");
} */

//16. Write a program to convert the following string to an array using string split method.

/* var university = "University of Karachi";
for(i = 0 ; i < university.length; i++){
document.write(university[i]+"<br>");
}  */

//17. Write a program to display the last character of a user input.

/* var word = prompt("Enter a word");
var len = word.length;
var last = word.charAt(len-1);
document.write("User Input: "+word+"<br>");
document.write("Last character of input: "+ last); */

//18. You have a string “The quick brown fox jumps over the lazy dog”

/* var str = "The quick brown fox jumps over the lazy dog";
var str2 = str.toLowerCase();
var count = str2.match(/the/g);
var result = count.length;
document.write("Text: "+str+"<br>");
document.write("There are "+ result + " occurence(s) of the word 'the'"); */


// Assignment # 26-30 //


//1. Write a program that takes a positive integer

/* var num = +prompt("Enter number");
document.write("Number: "+num+"<br>");
document.write("Round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("Ceil value: "+Math.ceil(num)+"<br>"); */

//2. Write a program that takes a negative floating point

/* var num = +prompt("Enter floating negative point");
document.write("Number: "+num+"<br>");
document.write("Round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("Ceil value: "+Math.ceil(num)+"<br>"); */

//3. Write a program that displays the absolute value of a number

/* var num = prompt("Enter a number");
if(num[0]== "-"){
    var abs = num.slice(1);
    document.write("The absolute value of "+num +" is "+abs);
} else{
    document.write("The absolute value of "+num +" is "+num);
} */

//4. Write a program that simulates a dice using random()

/* var num = Math.random()*6;
var random = Math.ceil(num);
document.write("Random dice value: "+random); */

//5. Write a program that simulates a coin toss using random()

/* var num = Math.random()*2;
var toss = Math.ceil(num);
document.write(toss+"<br>");
 if(toss === 1)
{
  document.write("Random coin value: Tails");
} else{
  document.write("Random coin value: Heads");
}  */

//6. Write a program that shows a random number between 1 and 100 in your browser.

/* var num = Math.random()*100;
var random = Math.ceil(num);
document.write("Random number between 1 to 100: "+random); */

//7. Write a program that asks the user about his weight.

/* var weight = prompt("Enter your weight in kilograms");
var num = parseFloat(weight);
document.write("The weight of user is "+num+" kilograms"); */

//8. Write a program that stores a random secret number

/* var random = Math.random() * 10;
var secret = Math.ceil(random);
var guess = +prompt("Enter  number between 1 and 10");
if(guess === secret){
    document.write("Congratutions!");
} else{
    document.write("Try again");
} */


// Assignment # 31-34 //

//1. Write a program that displays current date and time in your browser.

/* var d = new Date();
document.write(d); */

//2. Write a program that alerts the current month in words.

/* var months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var d = new Date();
var month = months[d.getMonth()];
document.write("Current month: "+month);  */

//3. Write a program that alerts the first 3 letters of the current day

/* var days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var d = new Date();
var n = days[d.getDay()-1];
var day = n.slice(0,3);
document.write("Today is "+day); */

//4. Write a program that displays a message “It’s Fun day”

/* var days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var d = new Date();
var n = days[d.getDay()-1];
if(n == "Sataurday" || n == "Sunday" ){
    document.write("It's Fun day");
} */

//5. Write a program that shows the message “First fifteen days of the month

/* var d = new Date();
var n = d.getDate();
if(n>16){
    document.write("Last days of the month");
}
else if(n<=16){
    document.write("First fifteen days of the month");
} */

//6.Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns

/* var old = new Date("Jan 1, 1970");
var oldmili = old.getTime();
var oldmin = old.getMinutes();
var today = new Date();
var todaymili = today.getTime();
var todaymin = old.getMinutes();
var mili = todaymili - oldmili;
var min = todaymin - oldmili;
document.write("Current Date: "+today+"<br>");
document.write("Elapsed milliseconds since Jan 1, 1970: "+mili);
document.write("Elapsed minutes since Jan 1, 1970: "+min); */

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

/* var d = new Date();
var hours = d.getHours();
if(hours < 12){
    alert("It's AM");
} else if(hours >= 12){
    alert("It's PM");
} */

//8. Write a program that creates a Date object for the last day of the last month of 2020

/* var date = new Date();
date.setMonth(11);
date.setDate(31);
date.setFullYear(2020);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
document.write("Later date: "+date); */

//9. Create a date object of the starting date of this Ramadan

/* var ramadan1 = new Date("Jun 18, 2015");  //Ramadan of 2015
var ramadan2 = new Date("Apr 24, 2020");    //Ramadan of 2020
var time = ramadan2.getTime() - ramadan1.getTime(); 
var days = time / (1000 * 3600 * 24);
document.write(days +" days have passed since 1st Ramadan,2015 till 2020"); */


//10. Write a program that displays in your browser the seconds that elapsed

/* var ref_date = new Date("Dec 05, 2015 22:50:16");
var begin_date = new Date("Jan 01, 2015");
var milli = ref_date.getTime() - begin_date.getTime();
var sec = milli/1000;
document.write("On reference date "+ref_date+", "+sec+" seconds had passed since beginning of 2015"); */

//11. Create a Date object for the current date and time.

/* var current = new Date();
document.write("Current date: "+ current+"<br>");
var hours = current.setHours(current.getHours()-1);
document.write("1 hour ago it was "+ current); */

//12. Write a program that creates a date object

/* var today = new Date();
var current_year = today.getFullYear();
var past_years = current_year - 100;
var past = new Date();
past.setFullYear(past_years);
document.write("Current Date: "+today+"<br>");
document.write("100 years back, it was "+past); */

//13. Write a program to ask the user about his age.

/* var age = +prompt("Enter your age");
var current = new Date();
var current_year = current.getFullYear();
var birth_year = current_year - age;
document.write("your age is "+age+"<br>");
document.write("Your birth year is "+birth_year); */

//14. Write a program to generate your K-Electric bill

/* var customer = "ABC Customer";
var months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var d = new Date();
var month = months[d.getMonth()];
var no_of_units = 410;
var charges_per_unit= 16;
var late_payment = 350;
var net_amaount = no_of_units * charges_per_unit;
var gross_amount = net_amaount + late_payment;
document.write("<h1>K-Electric Bill</h1>");
document.write("<br>"+"<br>");
document.write("Customer Name: "+ customer+"<br>");
document.write("Month: "+month+"<br>");
document.write("Number of units: "+no_of_units+"<br>");
document.write("Charges per unit: "+charges_per_unit+"<br>");
document.write("<br>");
document.write("Net amount payable (Within due date): "+net_amaount+"<br>");
document.write("Late payment surcharge: "+late_payment+"<br>");
document.write("Gross amount payable (After due date): "+gross_amount); */


// Assignment # 35-38 //

//1. Write a function that displays current date & time in your browser.

/* function date(){
    var d = new Date();
    document.write(d);
}
date(); */

//2. Write a function that takes first & last name and then it greets the user using his full name.

/* function greet(first_name,last_name){
    var name = first_name + " "+ last_name;
    document.write("Hello "+name);
}
greet("Farwa","Abidi"); */

//3. Write a function that adds two numbers (input by user)

/* function addition(){
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var sum = num1 + num2;
    return sum;
}
alert("Sum is "+ addition()); */

//4. Calculator:

/* function Calculator(num1,num2,operator){
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var operator = prompt("Enter operation");
    if(operator == "+"){
        result = num1 + num2;
        alert("Result: " +result);
        return result;
     } else if(operator == "-"){
         result = num1 - num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "*"){
         result = num1 * num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "/"){
         result = num1 / num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "%"){
         result = num1 % num2;
         alert("Result: " +result);
         return result;
      }
}
Calculator(); */

//5. Write a function that squares its argument.

/* function square(num){
    var sq = num**2;
    return sq;
}
var x = +prompt("Enter a number")
alert("Square of "+x+" is "+square(x)); */

//6. Write a function that computes factorial of a number.

/* function factorial(num) 
{ 
  if (num === 0){
  return 1;
 }
 else{
  return num * factorial(num-1);
 }        
}
var x = +prompt("Enter a number");
alert("Factorial of "+x+" is "+factorial(x));
 */

 //7. Write a function that take start and end number as inputs

 /* function counting(start,end){
     for(i=start; i<=end; i++){
         document.write(i+"<br>");
     }
 }
 var num1 = +prompt("Enter starting number");
 var num2 = +prompt("Enter ending number");
document.write("<h1>Counting</h1>"+"<br>");
document.write(counting(num1,num2)); */

//8. Write a nested function that computes hypotenuse

/* function hypotenuse(base,perp) {
    function square(x) {
         return x*x;
         }
        return Math.sqrt(square(base) + square(perp));
 }
var b = +prompt("Enter base");
var p = +prompt("Enter perpendicular");
alert("Hypotenuse is "+ hypotenuse(b,p)) */

//9. Write a function that calculates the area of a rectangle.

/* function area(width=2,height=5){
    var a = width*height;
    return a;
}
function area2(width,height){
    var a = width*height;
    return a;
}
document.write("Area with Arguments as value"+"<br>");
document.write("Area of rectangle "+ area()+"<br>");
document.write("Area with Arguments as variables"+"<br>");
document.write("Area of rectangle "+ area2(5,9)); */

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?

/* function palindrome(word){
    var reverse = word.split('').reverse().join('');
    if(word == reverse){
        alert("It's a palindrome");
        return reverse
    } else{
        alert("It's not a palindrome");
    }
}
var w = prompt("Enter a word");
palindrome(w); */

//11. Write a JavaScript function that accepts a string

 /* function capital(str) 
{
    str = str.split(" ");
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
var str1 ="the quick brown fox";
document.write("EXAMPLE STRING : "+"'"+str1+"'"+"<br>");
document.write("EXPECTED OUTPUT "+"'"+capital(str1)+"'"+"<br>"); */ 

//12. Write a JavaScript function that accepts a string as a parameter and find the longest word

/* function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for ( i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var str2 = "Web Development Tutorial";
document.write("EXAMPLE STRING : "+"'"+str2+"'"+"<br>");
document.write("EXPECTED OUTPUT "+"'"+longestWord(str2)+"'"+"<br>"); */

//13. Write a JavaScript function that accepts two arguments

/* function countLetter(str,letter){
    var re = new RegExp(letter, 'g')
    var count = str.match(re);
    var result = count.length;
    return result
}
var str2 = "JSResourceS.com";
var let = "o";
document.write(countLetter(str2,let)); */

//14. The Geometrizer

/* function calcCircumference(radius){
    var pi = 3.14
    circumference = 2 * pi * radius;
    return circumference;
}

function calcArea(radius){
    var pi = 3.14
    area = pi * radius**2;
    return area; 
}
var r = +prompt("Enter radius of circle");
document.write("The circumference is "+calcCircumference(r)+"<br>");
document.write("The area is "+calcArea(r)); */




