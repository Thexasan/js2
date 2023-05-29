//1
// function oldest(obj){
//     let maxAge = 0;
//     let oldestPerson = '';
//     for (let name in obj) {
//       if (obj[name] > maxAge) {
//         maxAge = obj[name];
//         oldestPerson = name;
//       }
//     }
//     return oldestPerson;
// }
// console.log(oldest({ Emma: 71, Jack: 45, Amy: 15, Ben: 29 }))
// console.log(oldest({ Max: 9, Josh: 13, Sam: 48, Anne: 33 }));

//2
// function mapping(arr) {
//     let obj = {};
//     arr.forEach(e => {
//         obj[e] = e.toUpperCase();
//     })
//     return obj;
// }
// console.log(mapping(['p','s']))
// console.log(mapping(['a', 'b', 'c']));
// console.log(mapping(['a', 'v', 'y', 'z']));

// 3
// function isValid(day,month,year){
//    let a =  new Date(year,month-1,day)
//    return a.getFullYear()== year && a.getMonth()== month-1 && a.getDate()==day
// }
// console.log(isValid(35, 2, 2020));
// console.log(isValid(8,3,2020))
// console.log(isValid(31, 6, 1980));

//4
// function calculate(obj,n){
//     return Object.values(obj).reduce((a,b)=>a+b)-n
// }
// console.log(calculate({'basebol':20,skae:10},5))
// console.log(calculate({ skate: 10, painting: 20 }, 19));
// console.log(calculate({ skate: 200, painting: 200, shoes: 1 }, 400));


//5
// function total(...boxes){
//     let cnt = 0
//     boxes.forEach((e) =>{
//         let sum = e.reduce((a,b)=>a*b)
//         cnt+= sum
//     })
//     return cnt
// }
// console.log(total([4,2,4],[3,3,3], [1, 1, 2],[2, 1, 1]))
// console.log(total([2,2,2],[2,1,1]))


//6
// function minMax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return [min, max];
//   }
// console.log(minMax([1,2,3,4,5]))
// console.log(minMax([1]))


//7
// function duplicate(arr){
//     let duplicate = arr.filter((e,index)=>{
//         return arr.indexOf(e) != index && arr.lastIndexOf(e)==index
//     })
//     return duplicate.sort((a,b)=>a-b)
// }
// console.log(duplicate([1,2,3,4,5,3,5,1,6,2,1]))

//8
// function isuper(str, n) {
//     let sub = str.charAt(n)
//     return sub.toUpperCase() === sub;
//   }
  
// console.log(isuper('tasks Javascrtipt',6))

//9
// function numb(arr){
//     let cnt =0
//     for(let i = 0 ;i<arr.length;i++){
//         if(typeof(arr[i])=='number'){
//             cnt+=arr[i]
//         }
//     }
//     return cnt
// }
// console.log(numb([1,2,'3','6']))

//10
// function invert(obj)
// {
//     let newObj = {}
//     for(let key in obj){
//         // console.log(key)
//          newObj[obj[key]]= key
//         }
//         return newObj
// }
// console.log(invert({ "z": "q", "w": "f" }))
// console.log(invert({ "z": "q", "w": "d" }))

