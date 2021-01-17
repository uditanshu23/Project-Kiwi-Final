var count = new Date("jan 25,2021 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;
    
    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((d % (1000*60*60)/(1000*60)));
    var seconds = Math.floor((d % (1000*60)/(1000)));
    
    document.getElementById("count-days").innerHTML = days;
    document.getElementById("count-hours").innerHTML = hours;
    document.getElementById("count-minutes").innerHTML = minutes;
    document.getElementById("count-seconds").innerHTML = seconds;
},1000);


window.onscroll = function(){
    var nav = document.getElementById('ul');
    if (window.pageOffset > 100){
        nav.style.background = "linear-gradient(180deg, #B06AB3, #6604D6)"; 
    }
    else{
        nav.style.background = "transparent";
    }
}
