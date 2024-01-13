window.addEventListener('scroll', function () {
    // When the user scrolls, check the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Set a threshold value, such as 100 pixels, to trigger the class change
    if (scrollPosition > 100) {
        // Assuming you have a reference to the div or you can select it using document.getElementById or other methods
        var myDiv = document.getElementById('navbar-example2');

        // Add a class to the div
        myDiv.classList.add('navbarBgWhite');
        myDiv.classList.add('animate__slideInDown');
    } else {
        // If the scroll position is less than the threshold, remove the class
        var myDiv = document.getElementById('navbar-example2');
        myDiv.classList.remove('navbarBgWhite');
        myDiv.classList.remove('animate__slideInDown');
    }
});




$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true
    });
});