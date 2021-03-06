$(document).ready(function(){
    animateDiv(".blue_square");
    animateDiv(".seagreen_square");
    animateDiv(".salmon_square");
    animateDiv(".turquoise_square");
    animateDiv(".blueviolet_square");
    animateDiv(".extra_square_1");
    animateDiv(".extra_square_2");
    animateDiv(".extra_square_3");
    animateDiv(".extra_square_4");

    animateDiv(".red_circle");
    animateDiv(".coral_circle");
    animateDiv(".pink_circle");
    animateDiv(".grey_circle");
    animateDiv(".lightblue_circle");
    animateDiv(".coolors1_circle");
    animateDiv(".coolors2_circle");
    animateDiv(".coolors3_circle");
    animateDiv(".coolors4_circle");
    animateDiv(".coolors5_circle");
    animateDiv(".coolors6_circle");


    animateDiv(".orange_triangle");
    animateDiv(".green_triangle");
    animateDiv(".yellow_triangle");
    animateDiv(".crimson_triangle"); 
    animateDiv(".coolors1_triangle");
    animateDiv(".coolors2_triangle");
    animateDiv(".coolors3_triangle");
    animateDiv(".coolors4_triangle");
    animateDiv(".coolors5_triangle");
    animateDiv(".coolors6_triangle");

    animateDiv(".green_rectangle");
    animateDiv(".burlywood_rectangle");
    animateDiv(".purple_rectangle");
    animateDiv(".deepink_rectangle");
    animateDiv(".coolors1_rectangle");
    animateDiv(".coolors2_rectangle");
    animateDiv(".coolors3_rectangle");
    animateDiv(".coolors4_rectangle");
    animateDiv(".coolors5_rectangle");
    animateDiv(".coolors6_rectangle");

    // define images
    var images = [
        "./images/panaro-start-final.png",
        "./images/panaro-cut-one.png",
        "./images/panaro-cut-two.png",
        "./images/panaro-cut-three.png",
        "./images/panaro-empty.png",
        "./images/panaro-corda-sottile-1.png",
        "./images/panaro-corda-sottile-2.png",
        "./images/panaro-corda-rotta-1.png",
        "./images/panaro-corda-rotta-2.png",
        "./images/panaro-corda-rotta-3.png",
        "./images/panaro-corda-rotta-4.png",
        "./images/panaro-rotto-corda.png",
        "./images/panaro-rotto-corda-5.png",
        "./images/panaro-rotto-corda-6.png"
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 1.5,
        {
            curImg: images.length - 1,	        // animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            immediateRender: true,			    // load first image automatically
            ease: Linear.easeNone,			    // show every image the same ammount of time
            onUpdate: function () {
                console.log(images[obj.curImg])
                $("#myimg").attr("src", images[obj.curImg]); // set the image source
            }
        }
    );

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".div-title-trigger", duration: 4050})
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        scene.duration($(this).val());
    });
});

function makeNewPosition(){
    
    var h = $(window).height() - 10;
    var w = $(window).width() - 10;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({top: newq[0], left: newq[1]}, 3000,   function(){
      animateDiv(myclass);        
    });
};
