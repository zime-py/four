//****use of strict operetor
// "use strict";
// function one()
//  {
//     return 'hello world',
// }
// document.getElementById("one").innerHTML = one();



//****use of spread oparetor
// var richcountry=['usa','canada'];
// var poorcountry=['bd','pak'];
// var allcountry;

// function one()
//  {
//     return allcountry=[...richcountry,'bd','pak'];
// }
// document.getElementById("one").innerHTML = one();


//*** push method

// let richcountry=['usa','canada'];
// let poorcountry=['bd','pak','inia'];
// let allcountry;

// function one()
// {
// 	return allcountry=richcountry.push(poorcountry);
    
// }
// document.getElementById("one").innerHTML = one();


//rest parameter
//example_1

// function one(...number)
// {
// 	return number+5;
    
// }
// document.getElementById("one").innerHTML = one(1,2,3,4,5,6);


//example_2
// function one(...number){

// 	return number; 
// }
// document.getElementById("one").innerHTML = one(1+2+2+2);


//example_3(if need to define any parameter before rest parameter)

// function one(a,b,...number)
// {
// 	return a+b+number;
// 	//return b;
// 	//return number;
// }
// document.getElementById("one").innerHTML = one('mahmud',2,3+4+5);



//***dynamic function 

// var cool=function one(x){
// 	return x;
// }
// document.getElementById("one").innerHTML = cool('mahmud');


//*** variables in es6
//exampe_1 (variable re-assign using var keyord)
// function one(){
// 	var name='mahmud'; //first assigne name parameter value='mahmud'
// 	name='hossain';    //re-assign name parameter value='hossain'
// 	return name;
// }
// document.getElementById("one").innerHTML = one();


//exampe_2 (variable re-declire using var keyord)
// function one(){
// 	var name='mahmud'; //first declired name parameter
// 	var name=12345;    //re-declired name parameter 
// 	return name;
// }
// document.getElementById("one").innerHTML = one();


//exampe_1 (variable declire using let keyord) not work this function
// function one(){
// 	let name='mahmud'; //first declired name parameter
// 	let name=12345;    //re-declired name parameter 
// 	return name;
// }
// document.getElementById("one").innerHTML = one();


//exampe_2 (variable re-assigned using let keyord) it work
// function one(){
//  	let name='mahmud'; //first assigne name parameter value='mahmud'
// 	name='hossain';    //re-assign name parameter value='hossain'
//  	return name;
//  }
//  document.getElementById("one").innerHTML = one();



//exampe_1 (variable re-declire using const keyord) not wor
// function one(){
//  	const name='mahmud'; //first declired name parameter value='mahmud'
// 	const name=12345;    //re-declired name parameter value='hossain'
//  	return name;
//  }
//  document.getElementById("one").innerHTML = one();


 //exampe_2 (variable re-assiged using const keyord) not worked
// function one(){
//  	const name='mahmud'; //first assigne name parameter value='mahmud'
// 	 name='hossain';    //re-assign name parameter value='hossain'
//  	return name;
//  }
//  document.getElementById("one").innerHTML = one();


//*** variable scope
//local variable scope
// function one(){
//  	const name='mahmud'; 
 	
//  }
//  return name;
//  document.getElementById("one").innerHTML = one();

 //global variable scope
 // var name='mahmud';
 // function one(x)
 // {

 // return name;
 // }
 // document.getElementById("one").innerHTML = one();


 //****whoiting variable, orthat age value assign kora hoy then variable declire kora hoy 
 // function one(x)
 // {
 // name='mahmud' //first assign a paramerer value
 // return name;
 // var name;    // last declire a parameter
 // }
 // document.getElementById("one").innerHTML = one();


//*** forloop
// function one(){
// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// return text
// }
// document.getElementById('one').innerHTML=one();

// function one()
// {
// var text = "";
// var i;
// for (i = 0; i < 5; i++) {
//   text += i + "<br>";
// }

// return text;
// }
// document.getElementById("one").innerHTML = one();

// function one()
// {
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i, len, text;
// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//   text += cars[i] + "<br>";
// }
// return text;
// }

// document.getElementById("one").innerHTML = one();



//*** return function 

//example_ one function reurn to another funcion 
// function two()
// {
//  return 'hello';

// }
// function one()
// {
// 	return two();
// }
//  document.getElementById('one').innerHTML=one();


//*** annynumus function , same as dynamic function 

//example_1,ithout parameter and value
// let hi=function()
// {
// 	return 'hello lamyaa';
// }
// document.getElementById("one").innerHTML=hi();

//example_2, with parameter and value
// let hi=function(x)
// {
// 	return x;
// }
// document.getElementById("one").innerHTML=hi('mahmud');

//annymonus with rest parameter function 
// let hi=function(...x)
// {
// 	return x;
// }
// document.getElementById("one").innerHTML=hi(1,2,3,4,5,6,7,8,9);

//*** anonamaus function 

// //example_1, without parameter
// var arrow=()=>{

// 	return 'hello mahmud';
// }
// document.getElementById("one").innerHTML=arrow();

//example_2, with parameter
// var arrow=(x)=>{

// 	return x;
// }
// document.getElementById("one").innerHTML=arrow('hello hossain');

//example_2, with rest parameter
// var arrow=(...x)=>{

// 	return x;
// }
// document.getElementById("one").innerHTML=arrow(1,2,3,4,5,6,7,8);

//*** simple array
//example_1, declire array using array braket
// function one(){

// 	var cool=[1,2,'mahmud',4,5];
// 	return cool[2];  //for index nuber 
// 	//return cool;  //all value from array
// }
// document.getElementById("one").innerHTML=one();

//example_2 , declire array using array constructor, but not work
// function one(){
// 	var cool= new Array[1,2,3,4,5,6,7,8,9];
// 	return cool;
// }
// document.getElementById("one").innerHTML=one();

//example_3 , multidimentional array

// function one()
// {

// 	var x=['a','b','c','d'];
// 	var y=['e','f','g','h'];
// 	var z=['i','j','k','l'];

// 	var total=[x,y,z];

// 	return total;

// }
// document.getElementById("one").innerHTML=one();

//example_4, complex index base value search
// function one()
// {

// 	var x=['a','b','c','d'];
// 	var y=['e','f','g','h'];
// 	var z=['i','j','k','lll'];

// 	var total=[x,y,z];

// 	return total[2][3];

// }
// document.getElementById("one").innerHTML=one();


//*** map function 
//example_1, bt work
// function one(){

// 	var cool= new Map();

// 	cool.set('key1','one');
// 	cool.set('key2','two');
// 	cool.set('key3','three');
// 	var z=cool.values();
// 	return z;
// }
// document.getElementById("one").innerHTML=one();
// class lol{

// constructor(a,b){
// 	this.a=a
// 	this.b=b
// }

// add(){

// 	var result=this.a+this.b;
// 	console.log(result);
// }
// }
// obj=new lol(1,1);
// obj.add();


// class pol{

// 	static add(){
// 		console.log(2+3);
// 	}
// }
// pol.add();



// class baba{

// one(){

// 	console.log('i am baba1')
// }

// two(){

// 	console.log('i am baba222222222222222222222222222222222222222')
// }

// }

// class son extends baba{

// three(){
// 	super.two();
// }

// 	one(){

// 	console.log('i am son1')

// }
// }
// //obj=new baba;
// obj=new son;
// obj.one();
// obj.two();
// obj.three();

//*** set

// var cool=new Set();

// cool.add('a');
// cool.add('b');
// cool.add('a');
// cool.add('c');
// cool.add('d');
// //cool.clear();
// //cool.delete('c');
// console.log(cool.values());