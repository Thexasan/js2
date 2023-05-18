//1
// function age(n){
//     return n*365
// }
// console.log(age(65))

//2
// function les(a,b){
//     if(a+b<100){
//         return true
//     }else{
//       return  false
//     }
// }
// console.log(les(90,15))

//3
// function isPowerOfTwo(n) {
//     if (n=== 0) {
//       return false;
//     }
//     while (n!==1) {
//       if (n % 2 !== 0) {
//         return false;
//       }
//       n = n / 2;
//     }

//     return true;
//   }
// console.log(isPowerOfTwo(1))

//4
// function div(n)
// {
//     if(n%5==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(div(35))

//5
// function div(n,m){
//     if(n%m==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(div(85,4))

//6
// function three(n){
//     let cnt = 0
//     let res = 1
//     for(let i = n;i>0;i=Math.floor(i/10)){
//         cnt=i%10
//         res *=cnt
//     }
//     if(res>99){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(three(234))

//7

// function aut(n) {
//     let qw = n * n;
//     while (n > 0) {
//       if (n % 10 !== qw % 10) {
//         return false;
//       }
//       n = Math.floor(n / 10);
//       qw = Math.floor(qw / 10);
//     }
//     return true;
//   }
//   console.log(aut(1))

//8
// function last(a,b,c){
//     if(a*b%10==c%10){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(last(25,21,122))

//9
// function degree(n) {
//   if (n == 1) {
//     return 0;
//   }
//   if (n %5 == 0) {
//     return 1 +degree(n/5);
//   }else{
//     return -1
//   }
// }
// console.log(degree(49));
//10
function retFunc(func,b){
    return function rep(c,d=b){
        return d==0?c:rep(func(c),--d)
    }
}


function addOne(number)
{
    return number + 10
}

const repChild=retFunc(addOne,5)
console.log(repChild(10))