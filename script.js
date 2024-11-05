document.getElementById('menu-bar').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});


        //   banner-section
        let currentIndex = 0; // Track the current slide
const slides = document.querySelectorAll(".slide"); // Get all slides
const dots = document.querySelectorAll(".dot"); // Get all dots

// Function to show the slide based on index
function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0; // Reset to the first slide if index exceeds slide count
  } else if (index < 0) {
    currentIndex = slides.length - 1; // Go to the last slide if index is negative
  } else {
    currentIndex = index; // Otherwise, update to the given index
  }

  // Move the slider
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Function to navigate to a specific slide when clicking a dot
function currentSlide(index) {
  showSlide(index - 1); // Subtract 1 because array index starts at 0
}

// Auto slide every 3 seconds
setInterval(() => {
  showSlide(currentIndex + 1); // Go to the next slide
}, 3000);

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => currentSlide(index + 1)); // On dot click, go to respective slide
});
            /* banner section ends  */



          
            
              const menuBar = document.getElementById('menu-bar');
              const navbar = document.querySelector('.head .navbar');
            
              menuBar.addEventListener('click', () => {
                navbar.classList.toggle('active');
              });
          
            

            
// video section 
