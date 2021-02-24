(function ($, Drupal) {
    // Mobile Only Class
    $('.header .main-menu .region-header .menu--main div.view-mode-mobile-only').closest('li.menu-item').addClass('view-mode-mobile-only');

// Third level drop down
    $(".menu-dropdown-1 .menu.menu-level-2 .menu-item.menu-item--expanded").click(function(){
        $(this).toggleClass("clicked");
    });

    $(".menu-dropdown-1 .menu.menu-level-2 .menu-item.menu-item--expanded.clicked").click(function(){
        $(this).removeClass("clicked");
    });

    // Mobile
    // Hide Menu
    $('.header .main-menu .region-header .menu--main ul.menu.menu-level-0').addClass('hide');
    
    // Show search on click
    $('.header .main-menu .mobile .hamburger-menu .bar').on('click', function() {
        $('form#search-block-form').toggleClass('visible');
    })
    
    // Menu Show
    $('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
        var mobileNav = $('.header .main-menu .region-header .menu--main ul.menu.menu-level-0');
        mobileNav.toggleClass('hide show');
    })
})(jQuery, Drupal);

// jQuery(function($) {
//     $('.header .main-menu .mobile .hamburger-menu .bar').on('click', function() {
//         $('form#search-block-form').toggleClass('visible');
//     })
// });