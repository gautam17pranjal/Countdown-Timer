$(document).ready(function(){
    var countDownDate = new Date("Jan 1, 2021").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime(); 
        var distance = countDownDate - now; 
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if(seconds<10){
            seconds = "0"+seconds;
        }   
        if(distance > 0){
            $('.expire').hide();
        }
        $('.days').empty();
        $('.hours').empty();
        $('.minutes').empty();
        $('.seconds').empty();
        $('.days').append(days+"<br>");
        $('.hours').append(hours+"<br>");
        $('.minutes').append(minutes+"<br>");
        $('.seconds').append(seconds+"<br>");    
        if (distance < 0) {
            $('.large_device').hide();
            $('.small_device').hide();
            $('h1').hide();
        }
    }, 1000);
});