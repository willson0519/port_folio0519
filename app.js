$(document).ready(function() {
  

/* -----------------------------------------------
                MOBILE NAVIGATION     
-------------------------------------------------- */

  $(".menu_bar").on("click", function() {
	  if($( ".main-nav" ).hasClass( "mobile-hide" )){
		    $(".main-nav").removeClass("mobile-hide");
		    $(".main-nav").addClass("mobile-show");
	  }else{
		      $(".main-nav").addClass("mobile-hide");
		      $(".main-nav").removeClass("mobile-show");
	  }
  
  });


});