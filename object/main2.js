// function get(){
//     let obj = {
//         up:13,
//         down:12,
//     }
//     return obj.up - obj.down
// }
// console.log(get())

//2
// function volume(obj){
//     return Object.values(obj).reduce((a,b)=>{
//         return a*b
//     })
// }
// console.log(volume({w:2,l:5,h:2}))

//3
// function fif(n){
//     let obj={
//         need:n*0.5,
//         want:n*0.3,
//         sav:n*0.2
//     }
//     return obj
// }
// console.log(fif(50000))

//4
// function rel(str){
//     let obj = {
//         name:str,
//     }
//     if(obj.name =='Darth'){
//         return 'Luke,I am your Father'
//     }else if(obj.name == 'Leia'){
//         return 'Luke,I am your Sister'
//     }else if(obj.name == 'Han'){
//         return 'Luke,I am your brother in law'
//     }
// }
// console.log(rel('Leia'))

//5
// function city(obj){
//     return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
// }
// console.log(city({ name: "Paris", population: "2,140,526", continent: "Europe"} ))

//6
// function total(obj){
//     return Object.entries(obj).length
// }
// console.log(total({ a: "moron" }))

//7
// function side(n){
//     let obj = {
//         1: 'circle',
//         2: 'semo-circle',
//         3: 'triangle',
//         4: 'squre',
//         5: 'pentagon',
//         6: 'hexagon',
//         7: 'octagon',
//         8: 'ok',
//     }
//     return obj[n]
// }console.log(side(2))

//8
// function is(n,obj){
//     return obj.min <= n && obj.max>n
// }
// console.log(is(4,{min:6,max:10}))

//9
// function name(obj){
//     return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
// }
// console.log(name({ 1: "Mommy", 2: "please", 3: "help" } ))

//10
// function gas(obj,str){
//     return Object.keys(obj).includes(str)
// }
// console.log(gas({ a: 44, b: 45, c: 46 }, "d"))

//11
// function ink(obj){
//     if(obj["cyan"]> obj["magenta"] && obj["cyan"]>obj["yellow"] && obj["magenta"]>obj["yellow"]){
//         return obj["yellow"]

//     }else if(obj["cyan"])
// }
// console.log(ink({"cyan": 23,"magenta": 12,"yellow": 10}))

//12
// function empt(obj){

//     return Object.entries(obj).length===0
// }
// console.log(empt({a:1}))

//13
// function get(...arr){
//     let sum = 0
//    arr.forEach((e)=>{
//        return sum+=e.score
//     })
//     return sum
// }
// console.log(get({tile:'N',score:1,},{tile:'A',score:5,},{ tile:'Z',score:4,},{tile:'N', score:1,},))

//14
// function add(obj,name,key){
//     obj[key] = name
//     return obj
// }
// console.log(add({},'hasas',4))

//15
// function gener(n,str){
//     let obj = {
//         0:'me',
//         1:{m:'son',f:'daugther'},
//         2:{m:'grandson',f:'gradau'},
//         3:{m:'gr gr son',f:'gr gr douter'}
//     }
//     return obj[n][str]
// }
// console.log(gener(1,'f'))

//16
// function toArr(obj){
//     return Object.entries(obj)
// }
// console.log(toArr({}))

//17
// function key(obj){
//     return [Object.keys(obj),Object.values(obj)]
// }


// let key = obj => [Object.keys(obj), Object.values(obj)];
// console.log(key({ a: 1, c: 2, b: 5, d: 4 })); //2variant


//18
// function get(...arr){
//     let sum = 0
//      arr.forEach((e)=>{
//      sum+=e.budget
//     })
//     return sum
// }
// console.log(get({ name: "John",  age: 21, budget: 29000 }, { name: "Steve",  age: 32, budget: 32000 }, { name: "Martin",  age: 16, budget: 1600 }))

//19
// function fre(obj){
//     let a = Object.values(obj)
//     let sum = 0
//     a.forEach(e => sum+=e)
//     return sum>=50
// }
// console.log(fre({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) )

//20

// function mapping(arr) {
//     let obj = {};
//     arr.forEach(e => {
//         obj[e] = e.toUpperCase();
//     })
//     return obj;
// }
// console.log(map(['p','s']))

//21
// function afetr(obj,n){
//     let a = Object.entries(obj)
//     let newObj = {}
//     a.forEach(e => newObj[e[0]]=e[1]+n)
//     return newObj
// }
// console.log(afetr({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33, "Julian" : 13},1))

//23
// function rem(obj,str){
//     const newObj = {...obj}
//     delete newObj[str]
//     return newObj
// }
// console.log(rem({ piano: 300, tv: 100, skate: 50 }, "skate"))

//24
// function mostExpensiveItem(obj) {
//    let items = Object.entries(obj)
//    let maxPrice = 0 
//    let maxPriceItem = ''
//    for(let i = 0; i <items.length;i++){
//     if(items[i][1]> maxPrice){
//         maxPrice=items[i][1]
//         maxPriceItem = items[i][0]
//     }
//    }
//    return maxPriceItem
// }
// console.log(mostExpensiveItem({ tv: 30, skate: 200, stereo: 50, }));

//25
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


// function test(obj){
//     return Object.fromEntries(Object.entries(obj).map((e)=> e.reverse()))
// }
// console.log(test({a:10,b:20,c:30}))
