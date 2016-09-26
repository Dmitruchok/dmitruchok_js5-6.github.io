/*count_time.addEventListener( 'click', start_count );
clear.addEventListener( 'click', stop_count );
count_pause.addEventListener( 'click', pause );

var count = 0,
  timerId,
  go = false,
  start_time = for_time.innerHTML = ( '00:00:00' ),
  start_milisec = for_milisec.innerHTML = ( '000' );
function start_count() {
  if (go == false ) {
    timerId = setInterval(function(){
      count++;
      var milisec = (count*4)%1000;

      var sec = Math.floor( count*4/1000 )%60;
      var min = Math.floor( count*4/60000 )%60;
      var hours = Math.floor( count*4/3600000 )%24;
      if ( milisec<10 ) {
         milisec = '00' + milisec }
      else if (milisec<100){
        milisec = '0' + milisec
      };
      if ( sec<10 ) { sec = '0' + sec };
      if  (min<10 ) { min = '0' + min };
      if ( hours<10 ) { hours = '0' + hours };
      var str = hours + ":" + min+ ":" + sec;
      for_time.innerHTML=str;
      for_milisec.innerHTML = milisec;
    }, 1);
      go=true;
    }
}

function pause() {
  clearInterval( timerId );
  go = false;
}


function stop_count() {
  clearInterval( timerId );
  go = false;
  count = 0;
  for_time.innerHTML = start_time ;
  for_milisec.innerHTML = start_milisec;
};*/

count_time.addEventListener( 'click', start_count );
clear.addEventListener( 'click', stop_count );
count_pause.addEventListener( 'click', pause );
var this_date = new Date(),
  timerId,
  go = false,
  start_time = for_time.innerHTML = ( '00:00:00' ),
  start_milisec = for_milisec.innerHTML = ( '000' );
function start_count() {
  if (go == false ) {
    timerId = setInterval(function(){
      var new_date = new Date() - this_date;
      var milisec = new_date%1000;
      var sec = Math.floor( new_date/1000 )%60;
      var min = Math.floor( new_date/60000 )%60;
      var hours = Math.floor( new_date/3600000 )%24;
      if ( milisec<10 ) {
         milisec = '00' + milisec }
      else if (milisec<100){
        milisec = '0' + milisec
      };
      if ( sec<10 ) { sec = '0' + sec };
      if  (min<10 ) { min = '0' + min };
      if ( hours<10 ) { hours = '0' + hours };
      var str = hours + ":" + min+ ":" + sec;
      for_time.innerHTML=str;
      for_milisec.innerHTML = milisec;
    }, 10);
      go=true;
    }
}

function pause() {
  clearInterval( timerId );
  go = false;
}


function stop_count() {
  clearInterval( timerId );
  go = false;
  count = 0;
  for_time.innerHTML = start_time ;
  for_milisec.innerHTML = start_milisec;
};
