document.addEventListener("DOMContentLoaded", function() {
    var carousel1 = new bootstrap.Carousel(document.getElementById("carouselExample1"), {
      interval: 2000 // Change slide every 2 seconds (2000 milliseconds)
    });
  
    var carousel2 = new bootstrap.Carousel(document.getElementById("carouselExample2"), {
      interval: 2000 // Change slide every 3 seconds (3000 milliseconds)
    });
  });