var deadline = '2017-1-31';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    
    function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total<=0){
          clearInterval(timeinterval);
        }
    }
    
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
}

function setDaysLeft(id, idPorcentaje, endtime){
    var element = document.getElementById(id);
    var porcentajeText = document.getElementById(idPorcentaje);
    
    var t = getTimeRemaining(endtime);
    var daysLeft = Math.floor(((90-t.days)*100)/90);
    element.setAttribute("aria-valuenow", daysLeft);
    
    var daysSpan = porcentajeText.querySelector('.counter');
    daysSpan.innerHTML = daysLeft;
    
}

