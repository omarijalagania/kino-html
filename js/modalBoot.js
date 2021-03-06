$(document).ready(function() { 
    // Watch More Link click handlers
        const $popup = $('.video-popup');
        const $modal = $('#modal');
        const $closeIcon = $('.close');
        const dialogShow = $.cookie('dialogShow');


        if(!dialogShow){
            $(document).ready(function() {
                $popup.fadeIn(200);
                $modal.fadeIn(200);
                $.cookie('dialogShow', 1);
               
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
        }else {
            $popup.fadeOut(200)
        }
        
        // click outside of the popup, close it
        $modal.on('click', function(e){
            $popup.fadeOut(200);
            $modal.fadeOut(200);
            $(".video-player--you").first().attr('src','');
        });
    });