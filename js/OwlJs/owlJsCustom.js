$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        items:5,
        dots:true,
        responsive: {
            280: {
                items: 1
            },

            580: {
                items: 2
            },

            760: {
                items: 2
            },

            1000: {
                items: 3
            },
            1300: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    });
});