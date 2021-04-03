$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        items:4,
        
        responsive: {
            280: {
                items: 1,
            },

            580: {
                items: 2
            },

            760: {
                items: 3
            },
            1000: {
                items: 4
            }

        }
    });
});