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
