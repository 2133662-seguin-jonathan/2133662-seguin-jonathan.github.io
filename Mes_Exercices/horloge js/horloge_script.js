function clock()
{

let actualDate = new Date();

let hour = actualDate.getHours();
let month = actualDate.getMonth()+1;
let day = actualDate.getDay()
let year = actualDate.getFullYear()
let date = actualDate.getDate();
let minute = actualDate.getMinutes();
let second = actualDate.getSeconds();
let dayText = "";
let timePart ="";
let monthText ="";
let dateText ="";
let hourText ="";
let minuteText ="";
let secondText ="";


let dayDisplay = document.getElementById("date_box");

// Savoir jour
switch (day)
{
    case 0:
        dayText="Dimache ";
        break;

    case 1:
        dayText="Lundi ";
        break;

    case 2:
        dayText="Mardi ";
        break;

    case 3:
        dayText="Mercredi ";
         break;

    case 4:
        dayText="Jeudi ";
        break;

    case 5:
        dayText="Vendredi ";
        break;

    case 6:
        dayText="Samedi ";
        break;
}
// Ajouter le 0 du mois
if (month < 10)
{
    monthText="0"+month;
}
else
{
    monthText=month;
}
// Ajouter le 0 du jour
if (date < 10)
{
    dateText="0"+date;
}
else
{
    dateText=date;
}

dayDisplay.innerHTML = dayText+year+"-"+monthText+"-"+dateText;


let hourDisplay = document.getElementById("hour_box");

// Savoir si AM ou PM
if (hour12==true)
{
if (hour < 12)
{
    timePart="AM";
}
else
{
    timePart="PM";
}
}
else
{
    timePart="";
}
// Ajouter le 0 pour heure
if (hour < 10)
{
    hourText="0"+hour;
}
else if (hour>12 && hour12 == true)
{
    hourText="0"+(hour-12);
}
else
{
    hourText=hour;
}
// Ajouter le 0 pour minute
if (minute < 10)
{
    minuteText="0"+minute;
}
else
{
    minuteText=minute;
}
// Ajouter le 0 pour seconde
if (second < 10)
{
    secondText="0"+second;
}
else
{
    secondText=second;
}

hourDisplay.innerHTML = hourText+" : "+minuteText+" : "+secondText+" "+timePart;


}

function ClickHour12()
{
    let clockButton=document.querySelector('.clock_button');
    clockButton.classList.toggle("colorYellow");
    hour12=!hour12;
}

function HiddenDay()
{
    let calendarButton=document.querySelector('.calendar_button');
    calendarButton.classList.toggle("colorYellow");
    let calendarText=document.querySelector('#date_box');
    calendarText.classList.toggle("hiddenDate");
}


let hour12=true;
clock();
setInterval(clock,1000);