
//Container to display today's date
var actualTime = $('#actualTime');

// //Inputs to enter an event
var saveEvent1 = $('#event1');
var saveEvent2 = $('#event2');
var saveEvent3 = $('#event3');
var saveEvent4 = $('#event4');
var saveEvent5 = $('#event5');
var saveEvent6 = $('#event6');
var saveEvent7 = $('#event7');
var saveEvent8 = $('#event8');
var saveEvent9 = $('#event9');
var saveEvent10 = $('#event10');



//Image to click and save my event
var img1 = $('#img1');
var img2 = $('#img2');
var img3 = $('#img3');
var img4 = $('#img4');
var img5 = $('#img5');
var img6 = $('#img6');
var img7 = $('#img7');
var img8 = $('#img8');
var img9 = $('#img9');
var img10 = $('#img10');


// Do = number of the day
//Function to display today's date
function displayTime (){
    var date = moment().format('MMMM Do YYYY, h:mm a');
    actualTime.append('<span>'+ date+'</span>');
}

displayTime();

//Click on image to save event
img1.on('click', function (event){
    event.preventDefault();
    eventDataHandler1();
})

img2.on('click', function (event){
    event.preventDefault();
    eventDataHandler2();
})

img3.on('click', function (event){
    event.preventDefault();
    eventDataHandler3();
})

img4.on('click', function (event){
    event.preventDefault();
    eventDataHandler4();
})


img5.on('click', function (event){
    event.preventDefault();
    eventDataHandler5();
})

img6.on('click', function (event){
    event.preventDefault();
    eventDataHandler6();
})

img7.on('click', function (event){
    event.preventDefault();
    eventDataHandler7();
})

img8.on('click', function (event){
    event.preventDefault();
    eventDataHandler8();
})

img9.on('click', function (event){
    event.preventDefault();
    eventDataHandler9();
})

img10.on('click', function (event){
    event.preventDefault();
    eventDataHandler10();
})


//VARIBLES TO GET THE USERS INPUT VALUE FROM LOCALSTORAGE
var getEvent1 = localStorage.getItem('eventSchedule1');
var getEvent2 = localStorage.getItem('eventSchedule2');
var getEvent3 = localStorage.getItem('eventSchedule3');
var getEvent4 = localStorage.getItem('eventSchedule4');
var getEvent5 = localStorage.getItem('eventSchedule5');
var getEvent6 = localStorage.getItem('eventSchedule6');
var getEvent7 = localStorage.getItem('eventSchedule7');
var getEvent8 = localStorage.getItem('eventSchedule8');
var getEvent9 = localStorage.getItem('eventSchedule9');
var getEvent10 = localStorage.getItem('eventSchedule10');

/************  FUNCTIONS TO STORE THE USERS INPUT AND SET TO LOCALSTORAGE  **************** */
function eventDataHandler1(){
    localStorage.setItem('eventSchedule1', saveEvent1.val());
}

function eventDataHandler2(){
    localStorage.setItem('eventSchedule2', saveEvent2.val());
}

function eventDataHandler3(){
    localStorage.setItem('eventSchedule3', saveEvent3.val());
}

function eventDataHandler4(){
    localStorage.setItem('eventSchedule4', saveEvent4.val());
}

function eventDataHandler5(){
    localStorage.setItem('eventSchedule5', saveEvent5.val());
}

function eventDataHandler6(){
    localStorage.setItem('eventSchedule6', saveEvent6.val());
}

function eventDataHandler7(){
    localStorage.setItem('eventSchedule7', saveEvent7.val());
}

function eventDataHandler8(){
    localStorage.setItem('eventSchedule8', saveEvent8.val());
}

function eventDataHandler9(){
    localStorage.setItem('eventSchedule9', saveEvent9.val());
}

function eventDataHandler10(){
    localStorage.setItem('eventSchedule10', saveEvent10.val());
}

//USED LOCALSTORAGE GETITEM TO STORAGE THE EVENT ON THE WEB
saveEvent1.val(getEvent1);
saveEvent2.val(getEvent2);
saveEvent3.val(getEvent3);
saveEvent4.val(getEvent4);
saveEvent5.val(getEvent5);
saveEvent6.val(getEvent6);
saveEvent7.val(getEvent7);
saveEvent8.val(getEvent8);
saveEvent9.val(getEvent9);
saveEvent10.val(getEvent10);









