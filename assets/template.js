jQuery(document).ready(function() {
    jQuery('#nav-icon1').click(function() {
      console.log('clicked');
        jQuery(this).toggleClass('open');
    });

    jQuery('.search-close').click(function(){
      jQuery('.searchbar-section').fadeOut();
    });

    jQuery('.search-button').click(function(){
      jQuery('.searchbar-section').fadeIn();
    });

    jQuery('#mobile-menu-trigger').click(function(e) {
        e.preventDefault();
        var leng = jQuery('.menu-open').length;
        console.log(leng);
        if(leng == 0){
          jQuery('#mobile-menu').show(0, function() {
              jQuery('body').addClass('menu-open');
          });
        } else {
          jQuery('body').removeClass('menu-open');
          setTimeout(function() {
              jQuery('#mobile-menu').hide(0);
          }, 250);
        }

    });

    AOS.init();

    jQuery(".subcat-dropdown").click(function() {
        jQuery(this).siblings(".dropdown-menu").toggle();
    });

});

function reloadSlider(){
    console.log('changed');
};
