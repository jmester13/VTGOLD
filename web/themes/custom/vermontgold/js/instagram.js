(function ($, Drupal) {
    'use strict';
    jQuery(function($) {
        $(document).ready(function () {
        
        $.instagramFeed({
            'username': 'thevermontgoldco',
            'container': "#instagram-data",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'image_size': 820,
            'items': 10,
            'items_per_row': 10,
            'cache_time':120,
            'host':'https://images' + ~~(Math.random() * 3333) + '-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/'
        });
        // Custom Block Slider
        $('.instagram_gallery').slick({
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows:false
        });

        // Block Classes Applied to Paragraphs
        setTimeout(function(){
            $('.block-label-instagram-block').closest('.paragraph.paragraph--type--block ').addClass('block-label-instagram-block');
        }, 300);

     });
});
})(jQuery, Drupal);

// jQuery(document).ready(function($){
//     setTimeout(function(){
//         $('.instagram_gallery').slick({
//             infinite: true,
//             lazyLoad: 'ondemand',
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             arrows:false
//         });
//     });
// });