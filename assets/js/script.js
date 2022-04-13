
//Container to display today's date
var actualTime = $('#actualTime');

//Input to enter an event
var scheduleAnEvent = $('.enterEvent');

//Image to click and save my event
var saveEvent = $('.saveImage');





// Do es numero del dia, MMMM mes, YYYY ano, dddd dia completo
//Function to display today's date
function displayTime (){
    var date = moment().format('MMMM Do YYYY, h:mm a');
    actualTime.append('<span>'+ date+'</span>');
}

displayTime();


function eventHandler(){
    var event = localStorage.setItem('eventSchedule', scheduleAnEvent.val() );
    localStorage.getItem('eventSchedule', event);
}

var clickEventHandler = function (event){
    event.target.getAttribute('save-data');
}

//Click on image to save event
saveEvent.on('click', function (){
    eventHandler();
    clickEventHandler();
})

