let start =document.querySelector(".start")
let sec = document.querySelector(".seconds")
let min = document.querySelector(".minutes")
let hr = document.querySelector(".hours")



let s =   0
 let m =   0
let h =   0
let interval ;
function startWatch(){

interval = setInterval(function(){
    start.disabled = true
s++


if(s == 60){
    s=0 ;
    m++
}

else if(m == 60){
    m=0
    h++
}


if(s > 9 ){
    sec.innerHTML = s
}
else{

    sec.innerHTML = "0" + s 
}

if(m > 9){
min.innerHTML = m
}

else{
    min.innerHTML = "0" +  m
    
}

if(h > 9){
    hr.innerHTML = h
}

else{
    
    hr.innerHTML =  "0" +h
}



},
1000
)



}



function stopWatch(){
    start.disabled = false

    clearInterval(interval)
}


function resetWatch(){
   
    start.disabled = false
  s = 0
  m = 0
h = 0
sec.innerHTML = "0" + s
min.innerHTML = "0" + m
hr.innerHTML = "0" + h


clearTimeout(interval)


}





























// let sec = document.querySelector(".seconds")
// let min = document.querySelector(".minutes")
// let hour = document.querySelector(".hours")

// let start = document.querySelector(".start")


// // strat button 

// let interval ;
// let second = 0
// let minute = 0
// let hr  = 0


// function startWatch(){
//     // console.log("start");


// start.disabled = true;


    
//     interval =  setInterval(function(){

// second +=1

// if(second ==10){
    
//     second = 0;
//     minute += 1
  
    
    
// }
// else if( minute == 2){
//     minute = 0 
//     hr += 1
// }


// // if()


// sec.innerHTML = second 
// min.innerHTML = minute
// hour.innerHTML = hr



//     },1000)







// }


// // stop button 



// function stopWatch(){
// start.disabled = false;

// clearInterval(interval)

// }



// //  reset button 


// function resetWatch(){
// }


































// // let practice = document.querySelector(".prac")


// // let a = 0
// // setInterval(function(){
// //     if(a >3){
// //         practice.innerHTML += "ok"

// //     }else{
// // a+=1

// //         practice.innerHTML += 'bilal <br>'
// //     }

// // } , 500)





