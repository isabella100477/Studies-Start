/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName; 

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
DATA TYPES
1. Number data types are used to represent positive or negative numbers.
*/
var myNum = 40;
var myNum = 23;
// decimals work too and so does + or -
var myNum = 33.5;
var myNum = 3-8;

/*
2. The string data type is used to represent a sequence or order of characters.
 You use single or double qoutes to make them.
 */
var myString = 'Boredom at its finest';
var myString = "I am bored!";

/*
3. The boolean data type is used to hold the values true and false.
*/
var myBoolean = true
var myBoolean = false

/*
4. The array data type is used to store many values in a single variable. It has a numeric ordering, and it starts from 0. The first value would be arr[0]
*/
var myArray = ["I", "am", "hungry"];

isabella(myArray[0]);

/*
5. The Function array date type is a callable object that executes a block of code. 
You can asign functions to variables.
*/
var myFunction = function(){
return "30 minutes left.";
}

/*
6. Undefined data types have one value aka undefined. If you declare a variable but it doesn't have a value its undefined as its value.
*/
var iamUndefined; //you see it has no "=" it isn't defined.

/* 
7. NaN data types are members of a numeric data type that is a value that isnt able to be represented.
*/
alert("lol hahahha lmao" / 9);

/*
8. Infinity and negative infinity data types
*/
schoolwillbeoverSoon(70 / 0);

/*
9. The difference between primitive and non-primitive data types is Primitive types are already defined.
*/

//OPERATORS
/* 
1. asingment operators are operators that use "=" they asign a value to a variable 
*/
var bored = school; //im using the "=" sign to asign

/*
2. Arithmetic operators are operators are operators that use the four basic math operations -, +, /, *. subtraction, addition, division, and multiplication. 
*/
var a = i;
var b = we;
var c= a + b; //could be + - or / too
//dont know if im doing this right

/*
3. Comparison operators are operators that use > , < , >= , =<
they are used to compare two things.
*/
var c = 1;
var b = 2;
var l = (c > b);

/*
4. Logical operators are operators that use "AND" or "OR"
*/

var a = he;
var b = we;
var c = "a" AND "b";

// STRING MANIPULATION
/*
1. with operators (+)
this operator colides two values.
*/
var a = i am
var b = unhappy
var c = "a" + "b";

/*
2. The string method operators such as split join reverse do different things. for example the join, joins two values. reverse reverses them and split splits them.
*/
var a = we
var b = hate
var c = ("a", "b") //this is the join one.

//CONTROL FLOW
//1. the if control tells you that if this happens then this will happen.
var grade = 9
if (grade < 7){
grade = 'B';
} 
//2. the else if control tells you that if true itll perform the function.
var grade = 8
else if (grade < 7){
grade = 'B';
} //this is not true so it wont perform this.

//3. the else control is used to specify that a specific block of code is being executed, if the same condition is false.
var grade = 9
else (grade < 7){
grade = 'B'; //this is false
}

