// 1. Typing Effect for Hero Section
const outputElement = document.querySelector('#output h1');
const textToType = "ECE Student | Web Developer | AI & ML Enthusiast";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        outputElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Speed of typing
    }
}

// Start typing when page loads
window.onload = typeEffect;

// 2. Back to Top Button Logic
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show button after scrolling down 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 3. Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for the fixed navbar
                behavior: 'smooth'
            });
        }

        // Close mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
        }
    });
});

// 4. Navbar Background Change on Scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});