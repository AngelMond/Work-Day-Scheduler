

var actualTime = $('#actualTime');


// Do es numero del dia, MMMM mes, YYYY ano, dddd dia completo



function displayTime (){
    var date = moment().format('MMMM Do YYYY, h:mm a');
    actualTime.append('<span>'+ date+'</span>');
}

displayTime();