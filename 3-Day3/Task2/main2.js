//problem 2.a

let previous=1,previous2=0,genrated;
function* fibonacci(number){
    yield previous2;
    yield previous;
    for(let i =0;i<number-2;i++){
        genrated =previous+previous2;
        yield genrated
        previous2 = previous;
        previous = genrated;
    }
}
let n=0;
let gen = fibonacci(8)
while(n<9){
    console.log(gen.next())
    n++
}

//problem 2.b

// let previous=1,previous2=0,genrated;
// function* fibonacci(number){
//     yield previous2;
//     yield previous;
//     while(previous+previous2<=number){
//         genrated =previous+previous2;
//         yield genrated
//         previous2 = previous;
//         previous = genrated;
//     }
// }
// let n=0;
// let gen = fibonacci(8)
// while(n<9){
//     console.log(gen.next())
//     n++
// }
