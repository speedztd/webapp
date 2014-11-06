jQuery(document).ready(function(){
    jQuery('body').on('touchstart.nav','.nav-but',function() {
            jQuery(this).siblings('.options').slideToggle();
    });
});