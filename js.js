/*
document.write("This is an external JavaScript");
//upper text is an external js code.
document.getElementById('para').innerHTML="Welcome all of you!";
/*  This 3rd line code will be put on (Id) which is written in the body tag #id. We will just 
 target that #id and the code will automatically be putted there.  
 */

/*
var a1 = 25;
var a11 = 35;
var a2 = "Saber Khan; your marks are 75."
document.write("<br>",a1+a11,"<br>");
document.write(a1,a11,"<br>")
// here , comma is user for concatenate means to join two variables we use concatenate like in excel.
document.write(a2,"<br>")
*/

/*
document.write("hello world");
console.log("Your program works successfully.")
*/
/* console code is used for debug purpose to check the errors by adding or executing any code or 
data on database by using console.log feature which is inside the chrome or any other browser.
*/

// NOw we will discuss about alert and prompt function.
/*
var age= prompt("Enter your age ");   // prompt & alert functions are used for alert or showing any warning 
document.write("Your age is ", age);  // but prompt function also gives the output which alert you will enter while alert function can't do this. 
*/

/*
var name= alert("Are you above 18+ years old?"); // alert function is just used to give any specific warning like age/Cockies/privacy etc 
document.write("Yes i am above 18+");  // and can also that for user but it can't execute variable in document.write. 
*/

//  simple mathematics formulas...
// Arithmatic operators .....
/*
document.write("69 + 75 = ",69 + 75 ,"<br>");
document.write("69 - 75 = ",69 - 75 ,"<br>");
document.write("69 * 75 = ",69 * 75 ,"<br>");
document.write("69 / 75 = ",69 / 75 ,"<br>");
document.write("69 % 75 = ",69 % 75 ,"<br>");
*/

// simple foodCost program that how to divide the bill of food equally among all peoples.
/*
var foodCost = 985.65;
var no_people = 6;
document.write("Each person will pay ", (foodCost/no_people).toFixed(2),".");
*/
// we can also solve that program with prompt function....
/*
var foodCost = prompt("Enter Total amount of foodCost = ");
var no_people = prompt("Enter total number of people = ");
document.write("Each Person has to Pay = ", (foodCost/no_people).toFixed(2));
*/

//Mathematical Operations......
/*
document.write("2 ^ 6 = ",Math.pow(2,6) ,"<br>");
document.write("abs(-26) = ",Math.abs(26) ,"<br>");
document.write("sqrt(1250) = ",Math.sqrt (1250) ,"<br>");
document.write("round(26.65) = ",Math.round(26.65) ,"<br>");
document.write("ceil(26.65) = ",Math.ceil(26.65) ,"<br>");  // round off a number to its nearest integer.
document.write("pi = ",Math.PI ,"<br>");
document.write("floor((26.65)) = ",Math.floor((26.65)) ,"<br>"); // floor also round off a number but it drops/falls or removes all the digits after point (.)
document.write("sin(0) = ",Math.sin(0) ,"<br>");
document.write("cos(0) = ",Math.cos(0) ,"<br>");
*/

// Strings functions..........

var Str1 = "MuhammadSaberKhanLearningSkills"; 
document.write(Str1, "<br>");
document.write(Str1.length, "<br>");
document.write(Str1.indexOf("Saber"), "<br>");
document.write(Str1.slice(6,11), "<br>");
document.write(Str1.substr(10,21), "<br>");
document.write(Str1.toLowerCase(), "<br>");
document.write(Str1.toUpperCase(), "<br>");
document.write(Str1.replace("Saber","Ayoub"), "<br>");


// Relational Operators:  ==, !=, >, <, =>, <=
// Logical Operators:  && , ||
// by using if else statement......
/*
var age = prompt("What is Your age");   

 if (age>3 && age<12)
 {
 	document.write("You are going to school");
 	console.log("You have successfully compiled Your program");
 }

else if (age>=12 && age<=20) 
{
	document.write("You are going to College");
	console.log("You have successfully compiled Your program");
}

else if (age>20 && age<50) 
{
	document.write("You are going to University");
	console.log("You have successfully compiled Your program");
}

else if (age>=50 && age<=70) 
{
	document.write("You are interesting in research");
	console.log("You have successfully compiled Your program");
}

 else if (age>70 && age<=100) 
 {
 	document.write("Personal work");
 	console.log("You have successfully compiled Your program");
 }
 
 else if (age>=101 || age<3) 
 {
 	document.write("Not doing anything");
 	console.log("You have successfully compiled Your program");
 }
*/


// switch statement......
/*
var employ_name = prompt("Give me details of employees press 1-20?");
 switch(employ_name)
 {
case "1":
         document.write("Saber");
         break; 

case "2":    
         document.write("Omar");
         break; 

case "3":
         document.write("Shahid");
         break; 

case "4":
         document.write("Daud");
         break; 

case "5":
         document.write("Ayoub");
         break;

case "6":
        document.write("Imran");
        break; 

case "7":
        document.write("Nasir");
        break; 

case "8":
        document.write("Hashim");
        break; 

case "9":
        document.write("Yosuf");
        break; 

case "10":
        document.write("Usman");
        break;
        
case "11":
        document.write("Azhar");
        break; 

case "12":
        document.write("Azeem");
        break;

   case "13":     
        document.write("Noman");
        break; 

case "14":
        document.write("Aslam");    
        break; 

case "15":
        document.write("Abdullah");
        break;
    
    case "16":
        document.write("Adnan");
        break; 

case "17":
        document.write("Ramazan");
        break; 

case "18":
        document.write("Wasim");
        break; 

case "19":
        document.write("Rashid");
        break; 

case "20":
        document.write("Sami");   
        break; 
 }
 */

 // loops starts from here.....
/*
 // while loop
var a=1;
while(a<=50)
{
    document.write("<wbr>",a,"<br>");
    a++;  // increment operator
}
*/
/*
//do while loop
var i=50;
do
{
    document.write(i, "<br>");
    i--;  //decrement operator
}
while(i>=1);
*/

//do while loop by increment operator
/*
var i=50;
do
{
    document.write(i, "<br>");
    i++;  //increment operator
}
while(i<=100);
*/

// for loop....
/*
for(age=5; age<=50; age++)
{
    document.write(age,"<br>");
}
*/
// from both ways we can solve for loop
/*
var age=5;
for( ; age<=50; age++)
{
    document.write(age,"<br>");
}
*/

// by using arrays.....
/*
var books=["English","Urdu","Computer Science","Biology","Physics","Mathematics"]
{
    document.write(books[2],"<br>"); // all books will be targeted with index no which starts from 0 to so on.
    document.write(books[5],"<br>",books[0],"<br>"); 
    document.write(books[3],"<br>");
}
*/


// Using functions.....
// function saber()
// {
//     document.write("<br>","We are calling saber");
//     console.log("Program successfully has been executed")
// }
// saber();