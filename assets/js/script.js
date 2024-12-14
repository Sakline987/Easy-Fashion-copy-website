jQuery(document).ready(function () {

    var sakline = jQuery(".owl-carousel");
    sakline.owlCarousel({
        // margin: 50,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoHeightClass: 'owl-height',
        autoHeight: true,

    });
    jQuery('.next').click(function () {
        sakline.trigger('next.owl.carousel');
    })

    jQuery('.left').click(function () {
        sakline.trigger('prev.owl.carousel');
    })

});



function myFunction() {
    var x = document.getElementById("myNavBar");
    var menuIcon = document.getElementById("menuIcon");
    var iconContainer = document.querySelector('.icon');

    // Toggle the navbar between normal and responsive
    if (x.className === "header-left") {
        x.className += " responsive";
        iconContainer.classList.add('open');
        iconContainer.classList.remove('close');
        menuIcon.className = "fa fa-times"; // Change to close icon
    } else {
        x.className = "header-left";
        iconContainer.classList.add('close');
        iconContainer.classList.remove('open');
        menuIcon.className = "fa fa-bars"; // Change back to hamburger icon
    }
}