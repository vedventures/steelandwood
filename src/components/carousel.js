// Direct carousel implementation
window.addEventListener('load', function() {
  // Wait a bit to ensure React has fully rendered
  setTimeout(function() {
    // Direct DOM manipulation for the carousel
    const slides = document.querySelectorAll('.carousel-item');
    console.log('Found slides:', slides.length);
    
    if (slides.length === 0) {
      console.error('No carousel slides found!');
      return;
    }
    
    // Make sure the first slide is active
    slides[0].classList.add('active');
    
    let currentIndex = 0;
    
    // Function to rotate slides
    function rotateSlides() {
      // Remove active class from current slide
      slides[currentIndex].classList.remove('active');
      
      // Move to next slide (with wrapping)
      currentIndex = (currentIndex + 1) % slides.length;
      
      // Add active class to new current slide
      slides[currentIndex].classList.add('active');
      
      console.log('Switched to slide', currentIndex);
    }
    
    // Start rotation
    setInterval(rotateSlides, 3000);
  }, 1000); // Wait 1 second after load to ensure everything is rendered
});

// Add a backup initialization method
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, carousel script running');
});
