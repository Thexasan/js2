// function perimetr(n){
//     return 4*n
// }
// console.log(
//     perimetr(7)
// );

// function area(n){
//     return a*a
// }
// console.log(area(8));

// function aver(a,b){
//     return (a+b)/2
// }
// console.log(aver(7,9));

// function even(n){
//     if(n%2==0){
//         return 3
//     }else{
//         return 4
//     }
// }
// console.log(even(7))

// function calc(n){
//     return 17*n**2-6*n+13
// }
// console.log(calc(2))

// function long(a,b,c){
//     let d = a*3600
//     let v = b*60
//     let x = c*1
//     if(d>v && d>x){
//         return a
//     }else if(v>d && v>x){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(long(1,59,3598))

// function same(n){
//     let a = Math.floor(n/100)
//     let b = Math.floor(n/10)%10
//     let c = n%10
//     if(a==b || b==c ||a==c){
//         return true
//     }else{
//        return false
//     }
// }
// console.log(same(213))

// function largest(n){
//     let a = Math.floor(n/10)//1
//     let b = n%10//4
//     let c = b*10+a
//     if(n>c){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(largest(53))

// function lop(n){
//     let cnt = 0
//     for(let i=1;i<=n;i++){
//         cnt+=i
//     }
//     return cnt
// }
// console.log(lop(4))

// function dif(a,b,c){
//     if (a==b && b==c && a==c){
//         return 0;
//     }else if(a!=b && b==c && a!=c && c==b){
//         return 1
//     }else if(a==c && b!=a && b!=c){
//         return 2
//     }else{
//         return 3
//     }
// }
// console.log(dif(89,1,89))

// function even(a,b){
//     let cnt = 0
//    for(let i = a;i<=b;i++){
//     if(i%2==0){
//         cnt+=i
//     }
//    }
//     return cnt
// }
// console.log(even(-18,-14))

// //12
// function sum(n,m){
//     let cnt = 0
//     for(let i=1;i<=n;i++){
//      cnt+=Math.pow(i,m)
//     }
//     return cnt
// }
// console.log(sum(5,3))

//13
// function max(n){
//     let kalon =0
//     let cnt = 0
//     for(let i=n;i>0;i=Math.floor(i/10)){
//         cnt=i%10
//         if(cnt>kalon){
//             kalon=cnt
//         }
//     }
//     return kalon
// }
// console.log(max(897))

//14
// function sym(n){
//     let cnt = 0
//     let res=0
//     for(let i = n;i>0;i=Math.floor(i/10)){
//         cnt=i%10
//         res=res*10+cnt
//     }
//     if(n==res){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(sym(7227))

//15
// function add(num) {
//     if (num < 10) { // если число состоит из одной цифры, вернуть его
//       return num;
//     } else { // иначе - рекурсивно складывать все цифры в числе
//       let sum = 0;
//       while (num > 0) { // пока есть цифры в числе
//         sum += num % 10; // добавляем к сумме последнюю цифру
//         num = Math.floor(num / 10); // удаляем последнюю цифру из числа
//       }
//       return add(sum); // рекурсивно выполняем функцию для новой суммы
//     }
//   }
  
//   console.log(add(38)); // выводит 2)

