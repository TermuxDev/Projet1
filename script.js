
const image = document.querySelector('.photodeprofile');

image.addEventListener('mouseenter', function() {
    image.style.filter = "brightness(1.2)";  
});


image.addEventListener('mouseleave', function() {
    image.style.filter = "brightness(1)"; 
});