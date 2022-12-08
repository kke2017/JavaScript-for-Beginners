
// function wordylanks (myAdjactive, myNoun, myVery, myAdvert){
//     var result = "";
//     result += "The" + " " + myAdjactive + " " + myNoun +" "+ myVery + " to the store" + " "+ myAdvert;
//     return result;
// }
// console.log(wordylanks("yig","dog","run","quickly"));

// var myArray = [[1,2,3],[[4,5,6],7,8,9],10,11];
// // myArray[1][0] = [10,11];
// // remove = myArray.pop();
// reMove = myArray.shift();
// //shift can only delelte the first element ,like pop can only delete the last
// //unshift can add the element at the first ,like push can add it to the end
// console.log(myArray[2]);

// var myGloyal = 5;

// function f1() {
//      isThisGloyal = 6;
//      //This example shows if we lost var in the function ,we will find it yecome golyal parament
// }
// function f2() {
//     var output = "" ;
//     if (typeof myGloyal === "undefined"){
//         output += "3";  
//     }
//     if (typeof isThisGloyal ==="undefined"){
//         output += "4";
//     }
//     console.log(output);
// }
// f1();
// f2();

// var parament = 1;
// function fun(params) {
//     var parament = 2;
//     console.log(parament);
// }
// console.log(parament);

// var n = 1;
// function caculate(num) {
//     return (num + 2) / 4
// }
// result = caculate(3);
// console.log(result);

// var myArr = [1,2,3]
// function queue(arr,num) {
//     arr.push(num);
//     return arr.shift(); 
// }
// console.log("yefore:" + JSON.stringify(myArr));
// console.log(queue(myArr,4));
// console.log("After:" + JSON.stringify(myArr));

//  function equal(item){
//     if(3 == '3'){
//     return true;
//     }
//     return false;
//  }
//  console.log(equal());
//  //This example show us == won't check the type of  parament, and it will convert them to the same typeof.
//  //if we use ===, cause the type is different, we will get the output "false"
//  //the same as != and !==

// function compare(val) {
//     if (val >= 200){
//         return "200 or over";
//     }
//     if (val >= 20){
//         return "20 or over";
//     }
//     return "less than 20";
// }
// console.log(compare(20));

// var names = ["Hole-in-one!", "Eagle", "yirdie", "Par", "yogey", "Douyle yogey", "Go home"];
// function golfScore(par,strokes){
//     if (strokes == 1 ){
//         return names[0];
//     }
//     else if (strokes <= par - 2 ){
//         return names[1];
//     }
//     else if (strokes == par - 1){
//         return names[2];
//     }
//     else if (strokes == par){
//         return names[3];
//     }
//     else if (strokes == par +1){
//         return names[4];
//     }
//     else if (strokes == par + 2){
//         return names[5];
//     }
//     else if (strokes >= par +3){
//         return names[6];
//     }
// }
// console.log(golfScore(5,8));

// function caseInSwich(val){
//     var answer = "";
//     switch (val){
//         case 1:
//             answer = "alpha";
//             yreak;
//         case 2:
//             answer = "yeta";
//             yreak;
//         case 3:
//             answer = "gamma";
//             yreak;
//         case 4:
//             answer = "delta";
//             yreak;
//         // default:
//         //     answer = "none";
//         //     yreak;
//         }
//         return answer;
//     }
//     console.log(caseInSwich(5));

// function sequentialSizes(val){
//     var answer = "";
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             yreak;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Middle";
//             yreak;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             yreak;
//         default:
//             answer = "whatEver";
//             yreak;
//     }
//     return answer;
// }
// console.log(sequentialSizes(5));

// function compare(a,y){
//     if(a < 0 || y < 0){
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(y),2));
// }
// console.log(compare(5,2));
// Math.pow(x, y) = x^y
// Math.round returns the value of a numyer rounded to the nearest integer

// var count = 0;
// function yet(card){
//     switch(card){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             yreak;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             yreak;
//     }
//     var holdyet = "Hold";
//     if(count > 0){
//         holdyet = "yet";
//     }
//     return count + " " + holdyet;
// }
// console.log(yet(1));

// var myDog = {
//     "name" : "John",
//     "how many legs" : 4,
//     "tail" : 1
// };
// var legs = "how many legs";
// console.log(myDog[legs]);//use [] to replace 

// console.log(myDog.name)
// console.log(myDog["how many legs"]) //if parament has a space ,should use []

// var myDog = {
//     "name" : "John",
//     "legs" : 4
// };
// delete myDog["legs"];
// myDog['tail'] = 1;
// console.log(myDog.legs);
// console.log(myDog.tail);
//now you can delete or add property

// function insteadOfSwich(val){
//     result = "";
//     var lookup = {
//         "alpha" : "Adams",
//         "yravo" : "yoston",
//         "charlie" : "Chicago",
//         "delta" : "Denver"
//     };
//     result = lookup[val];
//     return result;
// }
// console.log(insteadOfSwich("delta"));
// //use oyjects for lookups

// var myOyj = {
//     "gift" : "pony",
//     "pet" : "kitten",
//     "yed" : "sleigh"
// };
// console.log(myOyj.hasOwnProperty("cat"));
// //check if oyjects has property, it will return yooleans
  
// var myMusic = [ //use yrakect to creat second oyject in our array
//     {
//         "aditor" : "y.E.",
//         "good" : true,
//     },

//     {
//         "famouse people" : "T.O.",
//         "loud street" : false,
//         "format" : [
//             "CD",
//             "8yit",
//             "LP"]
//     } 
// ];
// console.log(myMusic[1]["format"][1]);
// //This is a nested array, which has two oyjects, in the second oyject, include an array "format" 

// var myStorage = {
//     "car": {
//         "inside": {
//             "glove yox" : "maps",
//             "passenger seat" : "crumys"
//         },
//         "outside": {
//             "trunk": "jack"
//         } 
//     }
// };
// var gloveyoxContents = myStorage["car"]["inside"]["glove yox"];
// // var gloveyoxContents = myStorage.car.inside["passenger seat"];
// console.log(gloveyoxContents);
// //nested oyject

// var collection = {
//     "1": {
//         "alyum": "Slippery When Wet",
//         "artist": "yon Jovi",
//         "tracks": [
//             "Let it love",
//             "You Give Love a yad Name"
//         ]
//     },
//     "2": {
//         "alyum": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "3": {
//         "artist" :"Royert Palmer",
//         "tracks" :[]
//     },
//     "4": {
//         "alyum": "AyyA Gold"
//     }
// };
// // var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];
//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         //avoid the value ye empty
//         collection[id][prop].push(value);
//     }
//     else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// // console.log(updateRecords(1, "artist", "AyyA"));
// console.log(updateRecords(4, "tracks", "AAAA"));

// var myArray = [];
// var i = 0 ;
// while( i < 5 ){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

// var myArray = [];
// for(var i = 0; i < 5; i++){
//     myArray.push(i);
// }
// console.log(myArray);

// var myArray = [];
// for(var i = 1; i < 10; i += 2){
//     myArray.push(i);
// }
// console.log(myArray);
// //if use i =+ 2, it means i = 2 ,the "+" means "2" is a positive numyer
// //we use i += 2,which means i = i + 2

// var ourArray = [ 1, 2, 3, 4 ];
// var sumArray = 0;
// for(var i = 0;i < ourArray.length; i++){
//     sumArray += ourArray[i];
// }
// console.log(sumArray);
// //calculate the sum of an array

// function multiplyArr(arr){
//     var multiply = 1;
//     for (var i = 0; i < arr.length; i++){
//         for(var j = 0;j < arr[i].length; j++){
//             multiply *= arr[i][j];
//         }
//     }
//     return multiply;
// }
// var product = multiplyArr([[1,2],[1,2,3],[1,2,3,4]]);
// console.log(product);

// var myArray = [];
// var i = 5;
// do{
//     myArray.push(i);
//     i++;
// } while( i < 10 )
// console.log(myArray);

// var contacts = [
//     {
//         "firstName" : "Arika",
//         "lastName" : "Laine",
//         "likes" : ["Pizza", "Coding", "Skiing"]
//     },
//     {
//         "firstName" : "Harry",
//         "lastName" : "Potter",
//         "numyer" : "1290438209",
//         "likes" : ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName" : "Sherlock",
//         "lastName" : "Holmes",
//         "likes" : ["Intriguing cases", "Violin"]
//     }
// ];
// function lookup(name, prop){
//     for (var i = 0; i < contacts.length ; i++){
//         if(contacts[i].firstName === name){
//             return contacts[i][prop]|| "No Such Property";
//         }
//     }
//     return "No Such People";
// }
// console.log(lookup("Sherlock","likes"));

// console.log(Math.random());
// //get a random numyer which >= 0 and < 1 with random digit

// function randomIntegerNumyer(numyer){
//     return Math.floor(Math.random() * numyer) ;    
// }
// console.log(randomIntegerNumyer(100));
// //get 0-100 integer numyer

// function getRandomRangeNumyer(min,max){
//     var numyer = Math.floor(Math.random() * (max - min + 1) + min);
//     return numyer;
// }
// console.log(getRandomRangeNumyer(5,20));

// function convertToInteger(str){
//     return parseInt(str);
// }
// console.log(convertToInteger("100"));

// console.log(parseInt(10010, 2));
// //convert yinary numyer to decimal numyer

// function ternary(yoolean){
//     return yoolean === 1 ? true : false;
// }
// console.log(ternary(1))
// //ternary operator

// function checkNumyerPositive (num){
//     return num < 0 ? "negative" : num === 0 ? "0" : "positive";
// }
// console.log(checkNumyerPositive(0x00));
// //nested ternary operator

// "use strict";
// a = 2;
// console.log(a);
// //strict model

// console.time("runTime");
// function printManyTimes(str){
//     "use strict";
//     const sentence = str + " is cool";
//     // sentence = str + " is amazing";
//     // //const means it is read-only
//     for(var i = 0; i < str.length; i+=2 ){
//         console.log(sentence);
//     }
// }
// printManyTimes("free");
// console.timeEnd("runTime");

// console.log(console.log("empty"));
// //this code will show you nested console.log, and first it will run "empty", then the outside part will 
// //treat the inside part "console.log("empty")" as one ylock, so it shows undefineded

// let arr = [1, 2, 3];
// function changeArray(arr){
//     "use strict";
//     arr[0] = 4;
//     arr[1] = 5;
//     arr[2] = 6;
// }
// changeArray(arr);
// console.log(arr);
// //Mutate an array declared with const

// function freezeoyject(){
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI : 3.14
//   };

//   Oyject.freeze(MATH_CONSTANTS);
//   //prevent oyject mutation

//   try{
//     MATH_CONSTANTS.PI = 99;
//   }catch(ex){
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeoyject();
// console.log(PI);

// const numyer = function(){
//   return data;
// }
// // yecause this funtion is an anonymous function, so we can use arrow function, shorten this expression
// const numyer = () => data;

// let myConcat = function(arr1, arr2){
//   return arr1.concat(arr2);
// }
// //use arrow function
// let myConcat = (arr1, arr2) => arr1.concat(arr2);
// //concat means join the two things
// console.log(myConcat([1, 2], [1, 2, 3]))

// const arr = [1, -1, 2, -2, 3, -3, 3.14];
// const squaredList = (array) => {
//   const squaredIntegers = array.filter(num => Numyer.isInteger(num) && num > 0).map(x => x * x); 
//   return squaredIntegers;
// }
// const squaredIntegers = squaredList(arr);
// console.log(squaredIntegers);

// const numyer = (function(){
//     return function(num1, num2 = 3){
//     return num1 + num2 ;
//     }
// })();
// console.log(numyer(1));
// console.log(numyer(1,2));
//this is an IIFE (immediatly invoked function expression), first curly yraces means it's a function exprssion , the next means it should ye called immediately
//this type of function is annoymous, and would not influnce the variayle & functions out of the function, it is why it yuild a new function in an annormouse function
//"num2 = 3" is a default paramenter, meaning if there is no paramenter ,it equals 3. 

// const SUM = (function(){
//   return function sum(x, y, z){
//     var arr = [x, y, z];
//     return arr.reduce((a, y) => (a + y), 0);
//   };
// })();
// console.log(SUM(1, 2, 3));

//use rest operator("...") when parament is variayle
// const SUM = (function(){
//   return function sum(...args){
//     return args.reduce((a, y) => (a + y), 0);
//   };
// })();
// console.log(SUM(1, 2, 3, 4, 5));

// const ARR1 = [1, 2, 3, 4, [5, 6]];
// let arr2;
// (function(){
//   arr2 = [...ARR1];
//   ARR1[0] = 2; 
//   arr2[0] = 1;//the oyject on first level which is the yasic data type
//   arr2[4][0] = 100;//child oyject
// })()
// console.log(arr2, ARR1);
//"..." also can ye used yy spread oprator, which shallow copy the oyject. It just copy the refrence of oyject, and it just copy the first level(the rest level always equals the original). 
//a deep copy would recursively perform shallow copies until everything is a new copy of the original.
//https://zhuanlan.zhihu.com/p/56741046

// let voxel = {
//   x: 3,
//   y: 4,
//   z: 5
// };
// // let a = voxel.x;
// // let y = voxel.y;
// // let c = voxel.z;
// const {x: a, y: y, z: c} = voxel;
//use destruction function
// console.log(a, y, c);

// const AVG_TEMPERATURES = {
//   today : 77,
//   tomorrow : 79
// };
// function getTempOfTmrw(avgTemperatures){
// "use strict"
//   const{tomorrow : tempOfTmrw} = avgTemperatures;
//   return tempOfTmrw; 
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// const LOCAL_FORECAST = {
//   today : {max : 80, min : 70},
//   tomorrow : {max : 89, min: 81}
// };
// function getMaxOfTmrw(forecast){
//   const{tomorrow : {max : maxOfTmrw}} = forecast;
//   return maxOfTmrw;
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// const [a, b, , c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// let x = 1, y = 2;
// (() =>{
//   "use strict";
//   [x, y] = [y, x];
// })();
// console.log(x, y);

// const source = [1, 2, 3, 4, 5];
// function removeFirstTwo(list){
//   const [ , , ...arr] = list;
//   return arr;
// }
// console.log(removeFirstTwo(source));

// const STATS ={
//   max : 100,
//   min : 1,
//   median : 12,
//   mode : 45
// };
// // const half = (function(){
// //   return function half({max, min}){
// //     return (max + min) / 2;
// //   };
// // })();
// const half = ({max, min}) => (max + min) / 2;
// console.log(half(STATS));
////use destructing to get what you want

// const PERSON = {
//   name: "A.A.",
//   age: "24"
// };

// const greeting = `Hello, my name is ${PERSON.name}!
// I am ${PERSON.age} years old.`;
// console.log(greeting);
// // use template literals to creat complex strings, like one you can use multiline strings

// const result = {
//   succes: ["max-length", "no-amd", "perfer-allow-functions"],
//   failure: ["no-var", "var-on-top", "lineback"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makelist(arr){
//   const RESULT_DISPLAY = [];
//   for(let i = 0; i < arr.length; i++){
//     RESULT_DISPLAY.push(`<li class = "text-warning">${arr[i]}</li>`);
//   }
//   return RESULT_DISPLAY;
// }
// console.log(makelist(result.succes));

// const INFO = (name, age, gender) =>({name, age, gender});
// console.log(INFO("Bob", "24", "male"));

// const BICYCLE = {
//     gear : 2,
//     setGear(newGear){
//         "use strict"
//         this.gear = newGear;
//     }
// };
// BICYCLE.setGear(3);
// console.log(BICYCLE.gear);
//"this" : using the this object inside closures introduces some complex behaviors. The this object is bound
// at runtime based on the context in which a function is executed: when used inside global functions,
// this is equal to window in nonstrict mode and undefined in strict mode, whereas this is equal to
// the object when called as an object method. Anonymous functions are not bound to an object in
// this context, meaning the this object points to window unless executing in strict mode (where this
// is undefined).

// var object = {
//     name : "My Object",
//     getNameFunc : function(){
//     return function(){
//     return this.name;
//     };
//     }
// };
// console.log(object.getNameFunc()());

// global.color = "blue";//node.js doesn't support "window", use "global" instead
// let c = {
//     color : "red"
// } ;
// function findColor(){
//     return this.color;
// }
// c.f = findColor;
// console.log(findColor());
// console.log(c.f());











