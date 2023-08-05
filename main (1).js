let minutes;
let seconds;

function studyBreak(x){
  minutes = x;
  seconds= "00";
  var inter = setInterval(function(){
    var el = document.getElementById("timer");
    if(seconds == 0 && minutes == 0){
      clearInterval(inter);
      el.innerText ="00:00";

    }else if (seconds==0){
      minutes=minutes-1;
      seconds= 59;
      el.innerText=`${minutes}:${seconds}`;

    }else if (seconds>0){
      seconds=seconds-1;
      el.innerText=`${minutes} ${seconds}`;
    }
  },1000)
}