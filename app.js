let min = 0;
let sec = 0;
let msec = 0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
let interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
     else if(sec >= 60){
         min++;
         minHeading.innerHTML = min;
         sec = 0;
     }

}


//start function
let start = document.querySelector('#start');
start.addEventListener('click',() => {
    interval = setInterval(timer,10)
    start.disabled = true;
})

//stop function

let stop = document.querySelector('#stop');
stop.addEventListener('click',() => {
    clearInterval(interval);
    start.disabled = false;
})

//Reset function

let reset = document.querySelector('#reset');
reset.addEventListener('click',() => {

 const heading = document.querySelector('.heading');
 heading.textContent = `Last Time Out: ${minHeading.innerHTML} : ${secHeading.innerHTML} : ${msecHeading.innerHTML}`; 
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    clearInterval(interval);
    start.disabled = false;
})