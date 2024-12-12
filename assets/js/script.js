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