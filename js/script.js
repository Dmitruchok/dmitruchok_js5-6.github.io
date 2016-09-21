/*var count = 0,
  timerId,
  go = false,
  min = 0,
  sek = 0;
  milisec = 0;
  //start_time = for_time.innerHTML = ('00:00:00'),
  //start_milisec = for_milisec.innerHTML = ('00');
function start_count() {
  if (go == false ) {
    timerId = setInterval(function(){
      milisec++;
      if (milisec == 1000) {
        milisec = 0;
        sek++;
      }
if (sek==60) {
  sek = 0;
  min++;
}
var str = min+":"+sek+":"+milisec;
for_time.innerHTML=str;*/

/*function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milisec = date.getMilliseconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (milisec == 1000) milisec = "0" + milisec;
    for_time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milisec;
    setTimeout(startTime, 1000);
  }*/


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
