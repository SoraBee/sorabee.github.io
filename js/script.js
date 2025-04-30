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
    a.addEventListener("click", function() {
      event.preventDefault();
      cursor.classList.add("clicked");
      setTimeout(() => {
        window.location.href = a.href; // Navigate to the link after 1000ms
    }, 1000); // Delay of 1000ms
  });
  });

  document.querySelectorAll(".product-image-inner").forEach(function(imageDiv) {
    imageDiv.addEventListener("mousemove", function(e) {
        const rect = imageDiv.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        // Calculate the center point of the element
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Determine the difference from the center
        const diffX = (x - centerX) / centerX;
        const diffY = (y - centerY) / centerY;

        // Multiply differences by a factor for a more noticeable effect
        const offsetX = diffX * 10;
        const offsetY = diffY * 10;
        
        // Update the box shadow to give a dynamic depth effect
        imageDiv.style.boxShadow = -1 * offsetX + "px " + -1 * offsetY + "px 20px rgba(0, 0, 0, 0.3)";
    });

    imageDiv.addEventListener("mouseleave", function() {
        // Reset the box shadow when the mouse leaves the element
        imageDiv.style.boxShadow = "";
    });
});