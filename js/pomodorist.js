
var secondsOnes = 0;
var secondsTens = 0;
var minutesOnes = 0;
var minutesTens = 0;
var timerOn = false;
var timerJustStarted = true;



    
function countDown25()
    {
    if (timerOn === false) 
        {
        window.setInterval(subtractOne, 1000);
        }
    minutesTens = 2;
    minutesOnes = 5;
    secondsTens = 0;
    secondsOnes = 0;
    document.getElementById('seconds-ones').innerHTML=secondsOnes;
    document.getElementById('seconds-tens').innerHTML=secondsTens;
    document.getElementById('minutes-ones').innerHTML=minutesOnes;
    document.getElementById('minutes-tens').innerHTML=minutesTens;
        
        
    timerOn = true;
    }
    
function countDown5()
    {
    if (timerOn === false)
        {
        window.setInterval(subtractOne, 1000);
        }
    minutesTens = 0;
    minutesOnes = 5;
    secondsTens = 0;
    secondsOnes = 0;
    document.getElementById('seconds-ones').innerHTML=secondsOnes;
    document.getElementById('seconds-tens').innerHTML=secondsTens;
    document.getElementById('minutes-ones').innerHTML=minutesOnes;
    document.getElementById('minutes-tens').innerHTML=minutesTens;

        
    timerOn = true;
    }

function subtractOne()
    {
    
    if (timerOn && minutesTens === 0 && minutesOnes === 0 && secondsTens === 0 && secondsOnes === 0)
    {
    window.alert("Time's up!");
    refresh();
    }
    
    else if (timerJustStarted && secondsTens === 0 && secondsOnes === 0 && minutesOnes === 0)
        {
        minutesOnes = 9;
        secondsTens = 5;
        secondsOnes = 9;
        minutesOnes--
        timerJustStarted = false;
        }
    else if (timerJustStarted && secondsTens === 0 && secondsOnes === 0 && minutesOnes !== 0)
        {
        secondsTens = 5;
        secondsOnes = 9;
        minutesOnes--
        timerJustStarted = false;
        }
    
    document.getElementById('seconds-ones').innerHTML=secondsOnes;
    document.getElementById('seconds-tens').innerHTML=secondsTens;
    document.getElementById('minutes-ones').innerHTML=minutesOnes;
    document.getElementById('minutes-tens').innerHTML=minutesTens;
    secondsToMinutes(); 
    secondsOnes--;
    }
    
function secondsToMinutes()
    {
    if (minutesOnes === 0 && secondsOnes === 0 && secondsTens === 0)
        {
        minutesTens--;
        minutesOnes = 10;
        }
    if (secondsTens === 0 && secondsOnes === 0)
        {
        minutesOnes--;
        secondsTens = 6;
        }
    if ( secondsOnes === 0)
        {
        secondsTens--;
        secondsOnes = 10;
        }
    }
   
function refresh()
    {
    location.reload()
    }
    
    
