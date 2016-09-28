var forTime,
  buttonStart,
  buttonSave,
  buttonPaused,
  buttonStop,
  timer,
  timersSave,
  nextSaveTime;

timer = document.createElement( 'div' );
timer.classList.add('timer');
document.body.appendChild(timer);

forTime = document.createElement( 'div' );
forTime.id = 'for_time';
timer.appendChild(forTime);

buttonStart = document.createElement( 'button' );
buttonStart.innerHTML = 'Start';
buttonStart.id = 'count_time';
timer.appendChild(buttonStart);

buttonSave = document.createElement( 'button' );
buttonSave.innerHTML = 'Split';
buttonSave.id = 'time_save';
timer.appendChild(buttonSave);

buttonStop = document.createElement( 'button' );
buttonStop.innerHTML = 'Reset';
buttonStop.id = 'reset_time';
timer.appendChild(buttonStop);

timersSave = document.createElement( 'div' );
timersSave.classList.add('all_split');
timer.appendChild(timersSave);

count_time.addEventListener( 'click', startTime);
time_save.addEventListener( 'click', save );
reset_time.addEventListener( 'click', resetTime );


var this_date = new Date(),
  str,
  timerId,
  go = false,
  start_time = for_time.innerHTML = ( '00:00:00.000' );

function startTime() {
  if (go == false ) {timerId = setInterval(function() {
      var new_date = new Date() - this_date;
      var milisec = new_date%1000;
      if ( milisec<10 ) {
         milisec = '00' + milisec }
      else if (milisec<=100){
        milisec = '0' + milisec
      };
      var sec = Math.floor( new_date/1000 )%60;
      var min = Math.floor( new_date/60000 )%60;
      var hours = Math.floor( new_date/3600000 )%24;

      if ( sec<10 ) { sec = '0' + sec };
      if  (min<10 ) { min = '0' + min };
      if ( hours<10 ) { hours = '0' + hours };
      str = hours + ":" + min+ ":" + sec + ":" + milisec;
      for_time.innerHTML=str;
      buttonStart.innerHTML = 'Stop';
    }, 1);
      go=true;
    } else if (go == true){
      clearInterval( timerId );
      buttonStart.innerHTML = 'Start';
      for_time.innerHTML = ( '00:00:00.000' );
      nextSaveTime = document.createElement( 'p' );
      timersSave.appendChild(nextSaveTime);
      nextSaveTime.innerHTML ='Stop' + ':' + str;
    };
};

function save() {
  nextSaveTime = document.createElement( 'p' );
  timersSave.appendChild(nextSaveTime);
  nextSaveTime.innerHTML ='Split' + ':' + str;
};

function resetTime() {
  clearInterval( timerId );
  go = false;
  this_date = new Date();
  for_time.innerHTML = start_time ;
  timersSave.innerHTML = '';
  buttonStart.innerHTML = 'Start';
};
