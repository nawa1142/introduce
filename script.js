/*Top nav*/
function navcollapse() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.nav-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if(window.scrollY > 0) {
      navbar.style.height = '5%';
    } else {
      navbar.style.height = '15%';
    }
});

/*polygon transition*/
window.addEventListener('scroll', function() {
    const infos = ['info-1', 'info-2', 'info-3', 'info-4', 'info-5', 'info-6', 'info-7', 'info-8', 'info-9', 'info-10', 'info-11', 'info-12'];

    infos.forEach(function(id) {
        const element = document.getElementById(id);
        if (!element) return;

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = "1";
        } else {
            element.style.opacity = "0";
        }
    });
});

/*modal*/
var modal = document.getElementById("Modal");
var mlink = document.getElementById("modal-link");
var span = document.getElementsByClassName("close")[0];

mlink.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    modal.style.transition = "opacity 0.4s, visibility 0.4s";
}
span.onclick = function() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
}

/*Ex-Projects*/
let slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let bars = document.getElementsByClassName("bar");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    bars[slideIndex-1].className += " active";
}