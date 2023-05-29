// function days(month,year){
//     return new Date(year,month,0).getDate()
// }
// console.log(days(2,2018))

//2
// function is(day,month,year){
//    let a =  new Date(year,month-1,day)
//    return a.getFullYear()== year && a.getMonth()== month-1 && a.getDate()==day
// }
// console.log(is(8,3,2020))

//3
// function convert(str){
//     let month = new Date(str).getMonth()+1
//     let day = new Date(str).getDate()
//     let year = new Date(str).getFullYear()
//     return [month,day,year]
// }
// console.log(convert('Jan 9,2019'))

//4
// function d(date1,date2){
//     return (date2-date1)/24/60/60/1000
// }
// console.log(d(new Date('June 14,2019'),new Date('June 20,2019')))

//5
// function get(date){
//   let date21= new Date(2021,0)
//   return (date21-new Date(date))/24/60/60/1000
// }
// console.log(get('12/28/2020'))

//8
// function forn(date){
//     let month = ''
//     let day = ''
//     let h = ''
//     let m = new Date(date).getMonth()
//     let d = new Date(date).getDate()
//     let y = new Date(date).getFullYear()
//     let min = new Date(date).getMinutes()
//     let hour=new Date(date).getHours()
//     let sec=new Date(date).getSeconds()
//     if(m<=9){
//         month+='0'+m
//     }
//     if(d<=9){
//         day = '0'+d
//     }
//     if(hour<=9){
//         h = '0'+hour
//     }
//     return [y,month,day,h,min,sec].join('')
// }
// console.log(forn(new Date(2020,6,4,8,0,0)))

//18
// function how(year){
//     let cnt13 = 0
//     for(let i = 0;i<12;i++)
//     {
//         let date = new Date(year,i,13)
//         if(date.getDay()==5)
//         {
//             cnt13++
//         }
//     }
//     return cnt13
// }
// console.log(how(2020))

//20
// function after(days,n){
//     let dayOfWeek=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
//     let res =[]
//     for(let i = 0 ;i<days.length;i++){
//         let dayInd = dayOfWeek.indexOf(days[i])
//         let af = (dayInd+n)%7
//         res.push(dayOfWeek[af])
//     }
//     return res;
// }
// console.log(after(['Tuesday','Monday'],4))

