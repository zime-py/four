//var name='mahmd';

// function test(){

// 	var name='hossain';
// 	return name;

// }
// document.getElementById('test').innerHTML=test();
// console.log(name)
// test();

 
// function test(){

// 	var name='mahmudddd';
// }
// console.log(name);

// var multi=function(x,y){
// 	return x*y;
// }
// console.log(multi(2,2));

//*** arrow function with multi agrment 
// var pol =(x,y) => {

	
// 	return x*y;
// }
// console.log(pol(2,2));

// *** arrow function with single argument 

// var pol=(x)=>  x*2;

// console.log(pol(5));

// var pol=(id,name)=>{

// return id,name ;
// }
// console.log(pol(10,'hossain'));


// let pol=(id,name)=>({id:id, name:name})
// console.log(pol(5,'mahmud'));

// *** how to add default parameter value in function 

// let pol=(id,name)=>{

// 	id ? id =id:id=5;
// 	name ? name = name:name='mahmud';
// console.log(id,name);
// }
// pol(100);

// example arroy function
// let pol=(id=5,name='hossain')=>{

// 	console.log(id,name)

// }
// pol(100,'mahmud hossain');


//** s of bactics in templates
// var name='hossain';
// var age=1111111;
// //console.log('i am '+name+' my age is '+age)
// console.log(`i am  ${name} and my age is, ${age}`)


//***
// 	var name='mahmud';
// 	var age=123;
// let pol={
// name,
// age
// }
// console.log(pol);

//spered/rest operetor

// let pol=(...add)=>{console.log(add)}
// pol(1,2,3,4,5,6,7,8,9)



//*** array data structure
// var user=['mahmud',26,12345]
// // let[name,age,roll]=user;
// // console.log(name,age,roll);

//*** data structure from function 
// let user={
// 	id:3,
// 	name:'hossain',
// 	roll:123
// }
// let {id,name,roll}=user;
// console.log(id,name,roll);


//***data distruture from nested function
// let user={
// 	id:3,
// 	name:'hossain',
// 	roll:123,
// 	address:{
// 		city:'dhaka',
// 		color:'red',
// 		enviro:{
// 			clean:true
// 		}
// 	}
// }
// let {id,name,roll,address : {city,color,enviro:{clean}}} = user;
// console.log(id,name,roll,city,color,clean);


//*** template string 
const first_name='mahmud';
const last_name='hossain';
const age=26;
const city='rajshahi';

let bio=()=>{
	return `my first_name is ${first_name.toUpperCase()} and my last_name is ${last_name.toLowerCase()}, 
	i am ${age-6} yars old and i live in  ${city}`;


}
console.log(bio());
document.getElementById('test').innerHTML=bio();