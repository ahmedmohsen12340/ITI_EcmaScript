//problem 1

// let x=5,y=10;
// console.log(x,y);
// [y,x]=[x,y]
// console.log(x,y);

//problem 2

// function MaxMin(...parameter){
//     let max = parameter[0],min=parameter[0];
//     parameter.forEach(num=>{
//         if(num>max)
//             max=num;
//         if(num<min)
//             min=num;
//     })
//     return {min:min,max:max}
// }

// let arr=[1,230,3,4,50,10];
// console.log(MaxMin(...arr))
// console.log(MaxMin(...arr).min)
// console.log(MaxMin(...arr).max)

//problem 3.a

// arr1=['a','n','u'];
// let cond =arr1.every(value=> typeof value ==='string');
// console.log(cond);

//problem 3.b

// arr2=['k','n','u'];

// let cond2 =arr2.some(value=> value.startsWith('a'));
// console.log(cond2);

//problem 3.c

// arr1=['bsa','sss','ulc','ahi'];
// let cond3 =arr1.filter(value=> value.startsWith('b')||value.startsWith('s'));
// console.log(cond3);

//problem 3.d+3.e

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
let cond4 =fruits.map(value=> "I like "+value);
console.log(cond4);

cond4.forEach(value=>console.log(value));