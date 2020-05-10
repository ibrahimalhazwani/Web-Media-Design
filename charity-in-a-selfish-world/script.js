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
    animateDiv(".deeppink_rectangle");
});

function makeNewPosition(){
    
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
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