var not_so_secret = [38,38,40,40,37,39,37,39,66,65]; // konami code
var i = 0;
var notfound = true;

$(document).keyup(function(e) {
   
    if (notfound) {
        if(not_so_secret[i]==e.which){
            i++;
          
            if(i==10){
              $("html, body").animate({ scrollTop: $(document).height() }, 1000);
              $('#apps').fadeIn(2000);
              notfound = false;
            }
        }else{
            i=0;
        };
    };

});

$("#cal-btn").click(function() {
    $("#cal-slide").slideToggle("slow");
});

$("#stress-btn").click(function() {
    $("#stress-slide").slideToggle("slow");
});