$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        items:8,
        dots:true,
        
        responsive: {
            280: {
                items: 1
            },

            580: {
                items: 2
            },

            760: {
                items: 3
            },

            1000: {
                items: 2
            },


            1200: {
                items: 3
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