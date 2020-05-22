$(document).ready(function(){
    animateDiv(".blue_square");
    animateDiv(".seagreen_square");
    animateDiv(".salmon_square");
    animateDiv(".turquoise_square");
    animateDiv(".blueviolet_square");

    animateDiv(".red_circle");
    animateDiv(".coral_circle");
    animateDiv(".pink_circle");
    animateDiv(".grey_circle");
    animateDiv(".lightblue_circle");

    animateDiv(".orange_triangle");
    animateDiv(".green_triangle");
    animateDiv(".yellow_triangle");
    animateDiv(".crimson_triangle");

    animateDiv(".green_rectangle");
    animateDiv(".burlywood_rectangle");
    animateDiv(".purple_rectangle");
    animateDiv(".deepink_rectangle");
});

function makeNewPosition(){
    
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({top: newq[0], left: newq[1]}, 2000,   function(){
      animateDiv(myclass);        
    });
}; 

function handleTickInit(tick) {

    // simulate value updates for demo purposes
    Tick.helper.interval(function(){
        tick.value += 7 + Math.ceil(Math.random() * 3);
    }, 3000);
}