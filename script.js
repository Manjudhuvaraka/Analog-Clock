
const hour=document.querySelector('.hrs');
const second=document.querySelector('.sec');
const minute=document.querySelector('.min');

function runClock(){
    const time =new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;

    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);
    
}

runClock();
setInterval(runClock,1000);