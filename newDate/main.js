// function hal(date){
//     return date.getMonth() == 9 && date.getDate()==31?'bonfire to':'toffe'
// }
// console.log(hal(new Date('2013/10/31')))

//2
// function cent(year){
//     return year%100==0?Math.floor(year/100):Math.floor(year/100)+1
// }
// console.log(cent(2000))

//3
// function month(n){
//     let data = {
//         1:'january',
//         2:'f',
//         3:'m',
//         4:'A',
//         5:'may',
//         6:'j',
//         7:'jl',
//         8:'At',
//         9:'sep',
//         10:'oct',
//         11:'now',
//         12:'dec'
//     }
//     return data[n]
// }
// console.log(month(3))

//4
// function after(n,m){
//     return n +Math.floor(m/12)
// }
// console.log(after(2020,24))

//5
// function format(data){
//     return data.split('/').reverse().join('')
// }
// console.log(format('11/12/2019'))

//6
// function has(month,year){
//     return new Date(year,month-1,13).getDay()==5
// }
// console.log(has(3,2020))

//7
// function time(date){
//     return date.getMonth()==11 && date.getDate()==24
// }
// console.log(time(new Date(2013,11,24)))

//8
// function long(h,m,s){
//     let hour = h*3600
//     let minute = m*60
//     let sec = s*1
//     return hour>minute && hour>sec?h:minute>hour&& minute>sec?m:s
// }
// console.log(long(2,300,15000))

//9
// function get(data){
//     let a =  new Date(data).getDay()
//     return a==1?'Md':a==2?'ts':a==3?'wns':a==4?'thr':a==5?'frd':a==6?'sat':'sun'
// }
// console.log(get('9/04/2016'))

//10
// function get(data1,data2){
//    return (data2-data1)/24/60/60/1000
// }
// console.log(get( new Date('2020/4/20'), new Date('2023/4/24')))

