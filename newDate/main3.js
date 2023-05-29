//1
// function long(str){
//     let cnt = 0
//     let text = ''
//     let arr = str.split(' ')
//     arr.forEach(e => {
//         e.length
//         if(e.length>cnt){
//             cnt = e.length
//             text = e
//         }
//     })
//     return text   
// }
// console.log(long('hello there mate'))

//2
// function supr(arr){
//     let spl= arr.splice(' ')
//     let text = []
//     spl.filter(e =>{
//         if(e.slice(-3)=='man' && e.slice(-5)!='Woman'){
//             text.push(e)
//         }
//     })
//     return text
// }
// console.log(supr(["Batman", "Superman", "Spider-man", "Hulk", 
// "Wolverine", "Wonder-Woman"]))

//3
// function suare(n){
//     let arr = []
//     for(let i = 0 ; i <n;i++){
//         let arr2 = []
//     for(let j = 0;j<n;j++){
//         arr2.push(n)
//     }
//     arr.push(arr2)
//     }
//     return arr
// }
// console.log(suare(3))

//4
// function rem(arr){
//     let res =  arr.sort((a,b)=>a-b).shift()
//     return arr
// }
// console.log(rem([1,2,8,4,5]))

//5
// function isSpecialArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
//         return false;
//       }
//     }
//     return true;
//   }
// console.log(isSpecialArray([2,7,4,5,6,3,6]))

//6
// function flick(arr){
//     let fl=true
//     return arr.map((e)=>{
//        if(e=='flick'){
//         fl=!fl
//        }
//        return fl
//     })
// }
// console.log(flick(["edabit", "flick", "eda", "bit","flick"]))

//7
// function sum(arr){
//     let a = arr.sort((a,b)=>a-b).shift()
//     let b = arr.sort((a,b)=>a-b).shift()
//     return a+b
// }
// console.log(sum([19,34,2,5,89]))

//8
// function jaz(arr){
//  return  arr.map(e => {
//     if(e.includes(7)){
//         return e
//     }
//         return e.concat(7)
//     })
// }
// console.log(jaz(['G7','F','C']))

//9
// function cap(arr){
//     return arr.map((e)=>{
//       return e[0].toUpperCase()+e.slice(1)
//     })
// }
// console.log(cap(["mavis", "senaida", "letty"]))

//10
// function count(str){
//     let cnt = 0
//     let sum = 0
//     let Str = str.split('')
//     let a = Str.map(e =>{
//         if(typeof(e)=='string'){
//             cnt++
//         }
//         return cnt
//     })
//     return Str.map(e =>{
//         if(e=='number'){
//             sum++
//         }
//         return sum
//     })
// }
// console.log(count('Hello W2orld'))

//11
// function oldest(people){
// let maxAge = 0
// let oldPerson = ''
// for(let name in people){
//     if(people[name]>maxAge){
//         maxAge = people[name]
//         oldPerson = name
//     }
// }
// return oldPerson
// }
// console.log(oldest({ Emma: 71, Jack: 45, Amy: 15, Ben: 29 }))


//12
// function expensive(order,cost){
//     let obj = {}
//     for(let key in order){
//         if(order[key]>cost){
//             obj[key] = order[key]
//         }
//     }
//     return obj
// }
// console.log(expensive({ "a": 3000, "b": 200, "c": 1050 }, 1000))

//13
// function convert(obj){
//     for(let key in obj){
//         obj[key]= +obj[key]
//     }
 
//  return obj
// }
// console.log(convert({piano:'200'}))

//14
// function get(str){
//     let note = str.map((e)=>e.notes?Math.max(...e.notes):0)
//     return note
// }
// console.log(get([{ id: 1, name: "Jacek", notes: [5, 3, 4, 2, 5, 5]},
//     { id: 2, name: "Ewa", notes: [2, 3, 3, 3, 2, 4] },
//     { id: 3, name: "Zygmunt", notes: [2, 2, 4, 5, 3, 3]}
    // ]))


//15
// function get(arr){
//     let obj = {}
//     arr.forEach((e)=>{
//         obj[e] = (obj[e] ||0)+1
//     })
//     return obj
// }
// console.log(get(['A','A','A','B','A']))


//10
// function count(str){
//     let leter = 0
//     let dig = 0
//     for(let i = 0;i<str.length;i++){
//         if(isNaN(str[i])){
//             leter++
//         }else if(str[i] !=" "){
//             dig++
//         }
//     }
//     return {'Letters':leter,'Digits':dig}
// }
// console.log(count('Hello3 Wor78ld233'))