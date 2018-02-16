function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#mainmenu li").removeClass("large").addClass("small");
	} else {
		$("#mainmenu li").removeClass("small").addClass("large");
	}
	
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hidemore').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showmore');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showmore');
            }
        });
    });
});