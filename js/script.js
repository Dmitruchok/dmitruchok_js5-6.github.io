  var forTime,
  str,
  buttonStart,
  buttonSave,
  buttonPaused,
  buttonStop,
  timer,
  timersSave,
  nextSaveTime;

timer = document.createElement( 'form' );
timer.classList.add('timer');
document.body.appendChild(timer);

forTime = document.createElement( 'div' );
forTime.id = 'for_time';
timer.appendChild(forTime);

buttonStart = document.createElement( 'input' );
buttonStart.type = 'button';
buttonStart.value = 'Start';
buttonStart.id = 'count_time';
timer.appendChild(buttonStart);

buttonSave = document.createElement( 'input' );
buttonSave.type = 'button';
buttonSave.value = 'Split';
buttonSave.id = 'time_save';
timer.appendChild(buttonSave);

buttonStop = document.createElement( 'input' );
buttonStop.type = 'button';
buttonStop.value = 'Reset';
buttonStop.id = 'reset_time';
timer.appendChild(buttonStop);

timersSave = document.createElement( 'div' );
timersSave.classList.add('all_split');
timer.appendChild(timersSave);

count_time.addEventListener( 'click', startTime);
time_save.addEventListener( 'click', save );
reset_time.addEventListener( 'click', resetTime );


var this_date = 0,
  i = 0,
  str,
  timerId,
  go = false,
  start_time = for_time.innerHTML = ( '00:00:00.000' );


function startTime() {
  this_date = new Date();
  if (go == false ) {timerId = setInterval(function() {
    var startDate = new Date();
      var new_date = startDate.getTime() - this_date.getTime();
      var msec = new_date%1000;
      if ( msec<10 ) {
         msec = '00' + msec }
      else if ( msec<=100 ){
        msec = '0' + msec
      };
      var sec = Math.floor( new_date/1000 )%60;
      var min = Math.floor( new_date/60000 )%60;
      var hours = Math.floor( new_date/3600000 )%24;
      if ( sec<10 ) { sec = '0' + sec };
      if  (min<10 ) { min = '0' + min };
      if ( hours<10 ) { hours = '0' + hours };
      str = hours + ":" + min+ ":" + sec + ":" + msec;
      for_time.innerHTML = str;
      buttonStart.value = 'Stop';
    }, 1);
    go = true;
  } else {
      nextSaveTime = document.createElement( 'p' );
      timersSave.appendChild( nextSaveTime );
      nextSaveTime.innerHTML = ++i + ' '+ 'Stop' + ':' + str;
      clearInterval( timerId );
      for_time.innerHTML = start_time;
      buttonStart.value = 'Start';
      go = false;
    }
  };


function save() {
  if ( go == true) {
    nextSaveTime = document.createElement( 'p' );
    timersSave.appendChild( nextSaveTime );
    nextSaveTime.innerHTML = ++i + ' ' + 'Split' + ':' + str;
    return i;
  } else {
    timersSave.innerHTML = '';
  };
};



function resetTime() {
  go = true;
  clearInterval( timerId );
  buttonStart.value = 'Start';
  startTime();
  i = 0;
  timersSave.innerHTML = '';
};
