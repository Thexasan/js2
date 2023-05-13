//1
// function num(a,b){
//     return a+b
// }
// console.log(num(2,3));

//2
// function max(a,b,c){
//     if(a>b && a>c){
//         return a
//     }else if(b>a &&b>c){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(max(4,5,7))

//3
// function next(n){
//     return (n+2)-(n%2)
// }
// console.log(next(5))

//4
// function sum(a,b){
//     let cnt = 0
//     for(let i =a;i<=b;i++){
//         cnt+=i
//     }
//     return cnt
// }
// console.log(sum(3,5))

//5
// function third(n){
//     let a = Math.floor(n/100)
//     let b = Math.floor(n/10)%10
//     let c = n%10
//     return a+b+c
// }
// console.log(third(323))

//6
// let loop = (a,b)=>{
//     for (let i = a; i <= b; i++) {
//         if (i % 2 === 0) {
//          return i;
//         }
//       }
// }
// console.log(loop(1,10))

//7
// function sqr(a,b){
//     for(let i =a;i<=b;i++){
//         if(Math.sqrt(i)%1==0){
//             console.log(i)
//             return i
//         }
//     }
// }
// console.log(sqr(3,10))

//8
// function hypot(a,b){
//     return Math.hypot(a,b)
// }
// console.log(hypot(3,5))

//9
// function fac(n){
//     if(n==0){
//         return 1
//     }
//     return n*fac(n-1)
// }
// console.log(fac(5))

//10
// function polin(n){
//     let res=0
//     for(let i = n;i>0;i=Math.floor(i/10)){
//         let cnt = i%10
//         res = (res*10)+cnt
//     }
//     if(n==res){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(polin(1212))

//11
// function countDigit(d, x) {
//     let count = 0;
//     while (x > 0) {
//       if (x % 10 === d) {
//         count++;
//       }
//       x = Math.floor(x / 10);
//     }
//     return count;
// }
//  console.log(countDigit(5,123455678)
