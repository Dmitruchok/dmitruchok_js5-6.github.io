var forTime, forMillisecond, buttonStart, buttonPaused, buttonStop, timer, timersSave;

timer = document.createElement( 'div' );
timer.classList.add('timer');
document.body.appendChild(timer);

forTime = document.createElement( 'div' );
forTime.id = 'for_time';
timer.appendChild(forTime);

forMillisecond = document.createElement( 'div' );
forMillisecond.id = 'for_milisec';
timer.appendChild(forMillisecond);

buttonStart = document.createElement( 'button' );
buttonStart.innerHTML = 'Start';
buttonStart.id = 'count_time';
timer.appendChild(buttonStart);

buttonPaused = document.createElement( 'button' );
buttonPaused.innerHTML = 'Pause';
buttonPaused.id = 'pause_time';
timer.appendChild(buttonPaused);

buttonStop = document.createElement( 'button' );
buttonStop.innerHTML = 'Stop';
buttonStop.id = 'count_stop';
timer.appendChild(buttonStop);

count_time.addEventListener( 'click', startCount );
pause_time.addEventListener( 'click', pauseTime);
count_stop.addEventListener( 'click', stopTime );


var this_date = new Date(),
  str,
  timerId,
  go = false,
  start_time = for_time.innerHTML = ( '00:00:00' ),
  start_milisec = for_milisec.innerHTML = ( '000' );

function startCount() {
  if (go == false ) {timerId = setInterval(function() {
      var new_date = new Date() - this_date;
      var milisec = new_date%1000;
      var sec = Math.floor( new_date/1000 )%60;
      var min = Math.floor( new_date/60000 )%60;
      var hours = Math.floor( new_date/3600000 )%24;
      if ( milisec<10 ) {
         milisec = '00' + milisec }
      else if (milisec<=100){
        milisec = '0' + milisec
      };
      if ( sec<10 ) { sec = '0' + sec };
      if  (min<10 ) { min = '0' + min };
      if ( hours<10 ) { hours = '0' + hours };
      str = hours + ":" + min+ ":" + sec;
      for_time.innerHTML=str;
      for_milisec.innerHTML = milisec;
    }, 1);
      go=true;
    }
};

function pauseTime() {
  go == true;
  clearInterval( timerId );
  timersSave = document.createElement( 'div' );
  timer.appendChild(timersSave)
  timersSave.innerHTML = str;
};


function stopTime() {
  clearInterval( timerId );
  go = false;
  this_date = new Date();
  for_time.innerHTML = start_time ;
  for_milisec.innerHTML = start_milisec;
};
