$(function(){
    $('.mobile_tab').click(function(e){
        e.preventDefault();
        var $menu = $('.mobile_nav');

        if ($menu.hasClass('active')) {
            $menu.removeClass('active');
        } else {
            $menu.addClass('active');
        }
    });


    $('.mobile_nav > ul > li > a').click(function(e){
        var $sub = $(this).next('.sub');
        if ($sub.length) {
            e.preventDefault();
            if ($sub.is(':visible')) {
                $sub.slideUp(300);
            } else {
                $(this).parent().siblings().find('.sub:visible').slideUp(300);
                $sub.slideDown(300);
            }
        }
    });
});