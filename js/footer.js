window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById("back_to_top");
  // Check the scroll position
  if (window.pageYOffset > 200) { // Show backToTopButton after 200px of scrolling down
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById('back_to_top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});