$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        items:8,
        dots:true,
        
        responsive: {
            0: {
                items: 1
            },


            280: {
                items: 1
            },

            540: {
                items: 3
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

            1024: {
                items: 2
            },

            1900: {
                items: 3,
            }

        }
    });
});