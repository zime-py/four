//1. use of strict 
// "use strict";
// function person(){

// 	const name;
// 	return name;

// };
// var x=person()
// console.log(x);
// document.getElementById('five').innerHTML=x;


//2.spared opretor
// let porcountry=['bangladesh','india','pack'];
// let richcountry=['usa','china','canda'];
// let allcountry=[...porcountry, ...richcountry];
// var x=allcountry;
// console.log(x);
// document.getElementById('five').innerHTML=x


//3.push operator 
//it is same as speared operator
// let porcountry=['bangladesh','india','pack'];
// let richcountry=['usa','china','canda'];
// richcountry.push(porcountry);
// var x=richcountry;
// console.log(x);
// document.getElementById('five').innerHTML=x



//4.Rest paramater ,work like as *args or argument parametr
// function person(...name){
// 	return name;
// }
// var x=person('mahmud','hossain','nammu','lamyaa',12345)
// console.log(x);


//5. dynamic function
 // var x=function (name){
 // 	return name;
 // };
 // var sos=x
 // console.log(x('love'));


 //6.difference btween var,let and const keyword
 //By using ver keyword ,reassingn and redeclire both are possible
 // function person(){
 // 	var x=100;
 // 	var x=500; //redeclier
 // 	x=200000;  //re-assign
 // 	return x;
 // };
 // console.log(person());
 // document.getElementById('five').innerHTML=person();

 //By using let keyword, reassign posible but redecliar not possible
//  function person(){
//  	let x=100;
//  	//let x=100000000;   //not possible to redecliar
//  	 x=50000;  //possible to re-assign
//  	return x;
//  };
// console.log(person());
// document.getElementById('five').innerHTML=person();

//By using const keyword, con not possible re assign and re declier
// function person(){
// 	//const x=1000;
// 	//const x=20000000000;  //re declier not possible
// 	x=500000000000000000;  //re assign not possible
// 	return x;
// };
// console.log(person());
// document.getElementById('five').innerHTML=person();


//7. variable scope, global and local varible
//local variable scope,not access from ouside
// function person(){
// 	var name='mahmud';   //result show undefine
// };
// var x=person();
// console.log(x);
// document.getElementById('five').innerHTML=x;
//global variable scope
// var name='mahmud';
// function person(){	
// 	return name;
// };
// console.log(person());


//8. variable hoisting
//in this system value assigned first then variable declire
// name='mahmud';
// console.log(name);
// var name;


//9.simple for loop
// var i;
// var sum=0;
// for (i=1;i<=10;i++)
// {
// 	console.log(i);
// }
//using for loop
// var i;
// var sum=0;
// function number(){

// 	for (i=1;i<=15;i++)
// 	{
// 		console.log(i);
// 	};
// };
// number();

// var i;
// for (i=1;i<=10;i++)
// {
// 	console.log('good');
// }


//10.for of loop
//it mainly use to extact array data
// var name=['mahmd','hosssain','lamyaa','nowsin'];
// for(var nameid of name){
// 	console.log(nameid);
// };

// var name=['mahmud','hossain','lamyaa','nowsin','lima'];
// function person(){
// 	for (nameid of name){
// 		console.log(nameid);
// 	}
// };
// person();



//11.object
// var person={name:'mahmud',city:'raj',roll:1234};
// console.log(person); //call all object propertics
// console.log(person.name);  //call only name propertics
// console.log(person.roll);  //call only roll propertics

//nested object propertics access
var person={

		name:'mahmd',
		roll:1234,

		city:present={
		zela:'rajshhai',
		thana:'motihar',

		home:first={
		mirzapur:'purbopara'} , 
	}


};

console.log(person['city']['zela']);