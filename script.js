
// const {a: x = 3, b: y = 4} = { a: 5};

// console.log(x);
// console.log(y);

// const arr = [1,2];
// const [first = 3, second = 4, third = 5] = arr;

// console.log(first);
// console.log(second);
// console.log(third);

// let counter = 0;
// function inc(){
//     counter = counter + 1;
// }
// inc()
// inc()
// inc()
// // const arr = [1,2,3,4,5];
// // const result = arr.map(n =>{
// //     if(n%2 === 0){
// //         return n*2
// //     }
// // })

// // console.log(result);

// // async function asyncFunc() {
// //     try {
// //         const result = await Promise.reject('Error!');
// //         console.log(result);
// //     } catch(error){
// //         console.log("caught", error);
// //     }
// //     console.log("After try/catch");
// // }

// // asyncFunc();



// // let a;
// // console.log(a);

// // var g;
// // console.log(g);



function outer(){
    var a = 10;

    function inner(name){
        var b = 5;
        console.log(a + b);
        
    }
    var a = 20;
    return inner;
}

let innerFun = outer();
innerFun();