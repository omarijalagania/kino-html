$(document).ready(function() { 
    // Watch More Link click handlers
        const $popup = $('.video-popup');
        const $modal = $('#modal');
        const $closeIcon = $('.close');
        
        $(document).ready(function() {
            $popup.fadeIn(200);
            $modal.fadeIn(200);
           
        });
        $closeIcon.click(function () {
            $popup.fadeOut(200);
            $modal.fadeOut(200);
            $(".video-player--you").first().attr('src','');
        });
        // for escape key
        $(document).on('keyup',function(e) {
            if (e.key === "Escape") {
               $popup.fadeOut(200);
               $modal.fadeOut(200);
               $(".video-player--you").first().attr('src','');
            }
        });
        // click outside of the popup, close it
        $modal.on('click', function(e){
            $popup.fadeOut(200);
            $modal.fadeOut(200);
            $(".video-player--you").first().attr('src','');
        });
    });