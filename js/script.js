function expandNavbar() {
    var element = document.getElementById("navbar");
    element.classList.toggle("navbar-expanded");
}

var cursor = document.querySelector(".circle")

function getDimensions(e) {
  cursor.style.top = e.pageY + "px" // -25px for the size of the circle
  cursor.style.left = e.pageX + "px"
}

window.addEventListener("mousemove", (e) => {
  getDimensions(e)
});

document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("mouseenter", function() {
        cursor.classList.add("expanded");
    });
    img.addEventListener("mouseleave", function() {
        cursor.classList.remove("expanded");
    });
  });

  document.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("mouseenter", function() {
        cursor.classList.add("expanded");
    });
    a.addEventListener("mouseleave", function() {
        cursor.classList.remove("expanded");
    });
  });