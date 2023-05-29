// function hello(str){
//     return `Hello ${str}!`
// }
// console.log(hello('Geraid'))

//2
// function has(str){
//     return str.includes(' ')
// }
// console.log(has('hello '))

//3
// function mult(str){
//     let arr = str.split(',')
//     let ct=1
//      arr.map(e =>ct*=+e)
//      return ct
// }
// console.log(mult('2,3'))

//4
// function numb(str)
// {
//     return str.split('-').length
// }
// console.log(numb('buf-fet-fgy'))

//5
// function subReddit(str){
//     let a = str.slice(25)
//     return a.slice(0,-1)
// }
// console.log(subReddit('https://www.reddit.com/r/relationship/'))

//6
// function isIsogram(str) {
//     let down = str.toLowerCase()
//     let filt  = down.split('').filter((elem,index,arr)=>{
//         return arr.indexOf(elem)==index
//     }) 
//     return filt.length == down.length
        
    
// }
//   console.log(isIsogram('Pasword'))

//7
// function replace(str)
// {
//     return str.replace('a',1).replace('e',2)
// }
// console.log(replace('karachi'))

//8
// function remove(str){    
//         return str.includes('a')? str.replaceAll('a','').replaceAll('b','').replaceAll('c',''):null
// }
// console.log(remove('This migth be a bit hard'))

//9
// function cap(str){
//     let space = str.replace(/[A-Z]/g, e => ' ' +e)
//     return space
// }
// console.log(cap('helloWorld'))

//10
// function join(n){
//     let s =''
//     for(let i =1;i<=n;i++){
//         s+=i + ''
//     }
//     return s.split('').join('-')
// }console.log(join(4))

//                      new date()

// console.log(new Date())

//2
// function cuurent(data1,data2){
//     return (data1-data2)/24/60/60/1000
// }
// console.log(cuurent(new Date(),new Date(1000)))

//3
// function day(year, month, day) {
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     let dayOfWeek = days[new Date(year,month,day).getDay()];
//     return dayOfWeek
//   }
//   console.log(day(2015, 0, 7));

//7
// function hout(dataNow,dataBefore){
//     let res = Math.floor((dataNow-dataBefore)/(1000*60*60))
//     return res
// }
// console.log(hout(new Date(),new Date(1988,2,1)))

// function diffInSeconds(now,startOfDay){
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     startOfDay = today
//     return Math.floor((now - startOfDay) / 1000);
// }
// console.log(diffInSeconds(new Date(),new Date()));

///                 array
// function name(arr){
//    return arr.includes(7)?'boom':'thre is no'
// }
// console.log(name([1,2,3,4,5]))

//2
// function res(Number){
//    return (Number%2 == 0)?[Number/2,Number/2]:[Math.floor(Number/2),Math.ceil(Number/2)]
// }
// console.log(res(11))

//3
// function numStr(arr){
//  return arr.filter((e)=>{
//     return !isNaN(e[0])
//  })
// }
// console.log(numStr(['1a','a','2b','b']))

//4
// function dupl(arr){
//     let duplicate = arr.filter((elem,ind)=>{
//         return arr.indexOf(elem) ==ind
//     })
//     return duplicate.sort((a, b) => a-b)
// }
// console.log(dupl([1,2,3,4,4,3,5,6]))

//5
// function filt(arr,n){
//     let res = arr.filter(e => e%n==0)
//     return res
// }
// console.log(filt([1,2,3,4,5,6,7,8,9,10],2))

//6
// function mas(arr){
// return arr.map(e => e.length)
// }
// console.log(mas(['cjcn','jhvg','bvyewt78']))


//last obj

//1
// function players(persons){
//     const currency = 10.20;
//     let richMens = []
//     for (let i = 0; i < persons.length; i++){
//         if(persons[i] .sum > 500){
//             richMens.push(persons[i]);
//         }
//     }
//     return richMens.reduce((a,b)=>a +b.sum,0)
// }
// console.log(players([
//     { name: "Romiz", sum: 1000, currency: "TJS" },
//     { name: "Messi", sum: 150, currency: "TJS" },
//     { name: "Ronaldo", sum: 230, currency: "TJS" },
//     { name: "Jony", sum: 1234, currency: "USD" },
//     { name: "Max", sum: 333, currency: "USD" },
//     { name: "John", sum: 780, currency: "USD" },
//     { name: "Doe", sum: 280, currency: "TJS" }
//   ]))