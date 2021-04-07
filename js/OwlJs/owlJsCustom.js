$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        items:5,
        dots:true,
        margin: -20,
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

            1200: {
                items: 2
            },

            1300: {
                items: 4
            },
            1900: {
                items: 5,
            }

        }
    });
});