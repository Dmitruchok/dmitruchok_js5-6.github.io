count_time.addEventListener( 'click', start_count );


var count = 0,
  timerId,
  go = false;
function start_count() {
  if (go == false ) {
    timerId = setInterval(function(){
      count++;
      var milisec = count%1000;
      for_milisec.innerHTML = milisec;
      var sec = Math.floor( count/1000 )%60;
      if (sec<10) {sec = "0"+sec;}
      var min = Math.floor(count/60000)%60;
      var hours = Math.floor(count/360000)%24;
      var str = hours+":"+min+":"+sec;
      for_time.innerHTML=str;
    }, 1);
      go=true;
    }
};
/*start.addEventListener("click",start_click);
pause.addEventListener("click",pause_click);
stp.addEventListener("click",stp_click);

var obj={
  s: "start",
  p: "pause",
  st: "stop"
}
var count=0, timerId, go=false;
function start_click(){
  for_text.innerHTML="start_click";
  if (go==false){
  timerId = setInterval(function() {
  count++;
  var msek=count%100;
  var sek=Math.floor(count/100)%60;
  if (sek<10) {sek = "0"+sek;}
  var min = Math.floor(count/6000)%60;
  var hours = Math.floor(count/360000)%24;;
  var str = hours+":"+min+":"+sek+":"+msek;
  for_count.innerHTML=str;
  }, 1);
  go=true;
}
}
function pause_click(){
  clearInterval(timerId);
  go=false;
  for_text.innerHTML="pause_click";
}

function stp_click(){
  clearInterval(timerId);
  go=false;
  count = 0;
  for_count.innerHTML=count;
  for_text.innerHTML="stp_click";
}*/
