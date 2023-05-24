// let obj = {
//     name:{
//         a:{
//             b:4,
//             c:5,
//             d:7
//         }
//     }
// }

//1 way
// // let {name:{a:{b,c,d}}} = obj
// // console.log(b,c,d);

//2way
// let {name}= obj
// let {a} = name
// let {b,c,d} = a
// console.log(name,a,b,c,d)

//1
// function get(){
//     let obj = {
//         up:13,
//         down:12,
//     }
//     return obj.up - obj.down
// }
// console.log(get())

//2
// function empt(obj){
    
//     return Object.entries(obj).length===0
// }
// console.log(empt({a:1}))

//3
// function get(...arr){
//     let sum = 0
//    arr.forEach((e)=>{
//        return sum+=e.score
//     })
//     return sum
// }
// console.log(get(
//     {
//         tile:'N',
//         score:1,
//     },
//     {
//         tile:'A',
//         score:5,
//     },
//     {
//         tile:'Z',
//         score:4,
//     },
//     {
//         tile:'N',
//         score:1,
//     },
// ))

//4
// function add(obj,key,value){
//    obj[key] = value
//    return obj
// }
// console.log(add({'prutus':500},'Hasan',400))
