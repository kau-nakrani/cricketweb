window.addEventListener('scroll', function() {
    const stickyElement = document.getElementById('stickyElement');
    const scrollPosition = window.scrollY;

    // Add the "show" class when the user scrolls past 200px
    if (scrollPosition > 200) {
      stickyElement.classList.add('show');
    } else {
      stickyElement.classList.remove('show');
    }
  });