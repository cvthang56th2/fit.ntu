$(document).ready(function() {
  // $('.dropdown-submenu a.test').on("click", function(e) {
  //   $(this).next('ul').toggle();
  //   e.stopPropagation();
  //   e.preventDefault();
  // })

  $("#intro-slide").mouseenter(function() {
    // $("#myCarousel .left").show();
    // $("#myCarousel .right").show();
    // $("#myCarousel .left").removeClass("anim-Out-left");
    // $("#myCarousel .right").removeClass("anim-Out-right");
    // $("#myCarousel .left").show();
    // $("#myCarousel .right").show();
    // $("#myCarousel .left").addClass("anim-In-left");
    // $("#myCarousel .right").addClass("anim-In-right");
  })
  $("#intro-slide").mouseout(function() {
    // $("#myCarousel .left").hide(1000);
    // $("#myCarousel .right").hide(1000);
    // $("#myCarousel .left").removeClass("anim-In-left");
    // $("#myCarousel .right").removeClass("anim-In-right");

    // $("#myCarousel .left").addClass("anim-Out-left");
    // $("#myCarousel .right").addClass("anim-Out-right");
    // $("#myCarousel .left").hide();
    // $("#myCarousel .right").hide();
  })
  $('#search-form').hide();
  $("#button_search").click(function() {
    $('#search-form').toggle();
  })

});