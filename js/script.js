count_time.addEventListener( 'click', start_count );
clear.addEventListener( 'click', stop_count );
count_pause.addEventListener( 'click', pause );

var count = 0,
  timerId,
  go = false,
  start_time = for_time.innerHTML = ('00:00:00'),
  start_milisec = for_milisec.innerHTML = ('00');
function start_count() {

  if (go == false ) {
    timerId = setInterval(function(){
      count++;
      var milisec = count%1000;
      for_milisec.innerHTML = milisec;
      var sec = Math.floor(count/1000)%60;
      if (sec<10) {sec = "0"+sec;}
      var min = Math.floor(count/60000)%60;
      if (min<10) {min = "0"+min;}
      var hours = Math.floor(count/3600000)%24;
      if (hours<10) {hours = "0"+hours;}
      var str = hours+":"+min+":"+sec;
      for_time.innerHTML=str;
    }, 1);
      go=true;
    }
}

function pause() {
  clearInterval(timerId);
  go = false;
}


function stop_count() {
  clearInterval(timerId);
  go = false;
  count = 0;
  for_time.innerHTML = start_time ;
  for_milisec.innerHTML = start_milisec;
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
