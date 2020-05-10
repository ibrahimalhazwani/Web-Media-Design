$(document).ready(function(){
    animateDiv(".blue_rectangle");
    animateDiv(".seagreen_rectangle");
    animateDiv(".salmon_rectangle")

    animateDiv(".red_circle");
    animateDiv(".coral_circle");
    animateDiv(".pink_circle");
    animateDiv(".grey_circle");
    animateDiv(".lightblue_circle");

    animateDiv(".orange_triangle");
    animateDiv(".green_triangle");
    animateDiv(".yellow_triangle");

    animateDiv(".green_rectangle");
    animateDiv(".burlywood_rectangle");
    animateDiv(".purple_rectangle");
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 60;
    var w = $(window).width() - 60;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1500,   function(){
      animateDiv(myclass);        
    });
    
};