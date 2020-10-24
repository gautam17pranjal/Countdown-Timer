$(document).ready(() => {
    let countDownDate = new Date("Jan 1, 2021").getTime();

    let timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        $('.days').empty();
        $('.hours').empty();
        $('.minutes').empty();
        $('.seconds').empty();
        $('.days').append(days + "<br>");
        $('.hours').append(hours + "<br>");
        $('.minutes').append(minutes + "<br>");
        $('.seconds').append(seconds + "<br>");

        if (distance > 0) {
            $('.expire').hide();
        } else {
            $('.large_device').hide();
            $('.small_device').hide();
            $('h1').hide();
            clearInterval(timer);
        }
    }, 1000);

});
