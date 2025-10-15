$(function(){
    $('.tab-menu li').click(function(){
        var i = $(this).index();
        $('.tab-menu li').removeClass('on');
        $('.tab-menu li').eq(i).addClass('on');

        $('.tab-list li').removeClass('on');
        $('.tab-list li').eq(i).addClass('on');
    });
});