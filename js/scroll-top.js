// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var body = $("body, html");
  var top = body.scrollTop() // Get position of the body
  if (top != 0) {
    body.animate({ scrollTop: 0 }, 500, function() {});
  }
}