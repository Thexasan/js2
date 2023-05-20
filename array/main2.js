// function get(arr){
//     let res = arr.shift()
//     return res
// }
// console.log(get([1,2,3]))

//2
// function make(a,b){
//    let arr=[]

// }
// console.log(make(1,2))

//3
// function rev(rest){
//     return rest.reverse()
// }
// console.log(rev([1,2,3,4]))

//4
// function incr(arr){
//     let a = arr.map((e)=>{
//         return e+1;
//     })
//     return a
// }
// console.log(incr([0,1,2,3]))

//5
// function get(...arr){
//     let res=arr.pop()
//     return res.pop()
// }
// console.log(get([1,2,3,4,3,8]))

//6
// function array(arr){
//     return arr.join("")
// }
// console.log(array([1, 2, 3, 4, 5, 6]) )

//7
// function get(arr,b){
// return arr.includes(b)
// }
// console.log(get([1,2,3,4,5],5))

//8
// function find(arr,str){
//     return  arr.includes(str)?arr.indexOf(str):false
// }
// console.log(find(["hi", "edabit", "fgh", "abc"], "fgh"))

//9
// function coc(arr1,arr2){
//     return arr1.concat(arr2)
// }
// console.log(coc([1,2,3],[4,5,6]))

//10
// function toNumber(arr){
//    return arr.map((e)=>{
//     return parseFloat(e)
//    })
// }
// console.log(toNumber(['9.4','4.2']))

//11
// function pasre(arr){
//     return arr.map((e)=>e.toString())
// }
// console.log(pasre([1, 2, "a", "b"]) )

//12
// function res(arr){
//     return arr.reduce((a,b)=>a+b)
// }
// console.log(res([1,2,3,4,5]))

//13
// function art(a,b,arr){
//     return arr.filter(num => num > a&& num<b)
// }
// console.log(art(3,8,[1,5,95,0,4,7]))

//14
// function type(arr){
//     return arr.map((e)=>{
//         return typeof(e)
//     })
// }
// console.log(type([1,2,'sty',true]))

//15
// function word(arr){
//     return arr.map((e)=>{
//         return e.length
//     },[])
// }
// console.log(word(['hello','world']))

//16
// function check(arr){
//     return arr.reduce((a,b)=>Math.sqrt(a)==Math.cbrt(b))
// }
// console.log(check([4,3]))

//17
// function get(arr){
//     return arr.map((e)=>{
//         return -e
//     })
// }
// console.log(get([1,2,3,4,5,-9]))

//20
// function foe(str,arr){
//     return arr.reduce((a,b)=>{
//         if(a.includes(str) && b.includes(str)){
//             return false 
//         }else{
//             return true
//         }
//     })
// }
// console.log(foe('r',['rok','rgae']))

//21
// function sumFive(arr) { 
//     return arr.filter(element => element > 5).reduce((a, b) => a + b, 0); 
//  } 
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))

//22
// function fitl(arr){
//     return arr.filter((e)=>{
//         return typeof(e)=='number'
//     })
// }
// console.log(fitl([1,2,3,4,'a','b',4]))

//23-
// function even(arr){
//    return arr.filter((e)=>{
//     return e%2==0?even:odd
//    }).reduce((a,b)=>a+b,0)
// }
// console.log(even([1]))

//24
// function range(a,b){
//     let res = []
//     for (let i = a+1; i < b; i++) {
//         res.push(i)   
//     }
//     return res
// }
// console.log(range(2,4))

//hw====================================
