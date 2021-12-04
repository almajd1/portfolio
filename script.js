

console.log("loll")

if($(".frame").css("display") !== "none"){

            //LinkedIn
        $("#linkedin-ico").hover(function () {
            $("#linkedin-frame").animate({width: '0px', height: '0px'},"2000",).dequeue().fadeOut(300);
            
                
            }, function () {
                $("#linkedin-frame").stop()
                $("#linkedin-frame").animate({width: '100px', height: '100px'},"2000").dequeue().fadeIn(300);
            }
        );

        //Facebook
        $("#face-ico").hover(function () {
            $("#face-frame").animate({width: '0px', height: '0px'},"2000").dequeue().fadeOut(300);
            
                
            }, function () {
                $("#face-frame").stop()
                $("#face-frame").animate({width: '100px', height: '100px'},"2000").dequeue().fadeIn(300);
            }
        );

        //Behance
        $("#behance-ico").hover(function () {
            $("#behance-frame").animate({width: '0px', height: '0px'},"2000").dequeue().fadeOut(300);
            
                
            }, function () {
                $("#behance-frame").stop()
                $("#behance-frame").animate({width: '100px', height: '100px'},"2000").dequeue().fadeIn(300);
            }
        );

        //E-Mail
        $("#mail-ico").hover(function () {
            $("#mail-frame").animate({width: '0px', height: '0px'},"2000").dequeue().fadeOut(300);
            
                
            }, function () {
                $("#mail-frame").stop()
                $("#mail-frame").animate({width: '100px', height: '100px'},"2000").dequeue().fadeIn(300);
            }
        );



}

