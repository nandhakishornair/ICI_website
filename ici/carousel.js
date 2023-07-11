document.addEventListener("DOMContentLoaded", function() {
    var carousel1 = new bootstrap.Carousel(document.getElementById("carouselExample1"), {
      interval: 2000 // Change slide every 2 seconds (2000 milliseconds)
    });
  
    var carousel2 = new bootstrap.Carousel(document.getElementById("carouselExample2"), {
      interval: 2000 // Change slide every 3 seconds (3000 milliseconds)
    });
  });

  window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("active");
    } else {
        scrollToTopBtn.classList.remove("active");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}