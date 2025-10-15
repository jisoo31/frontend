$(function(){    
    $('dd').hide();

    $('dt').mouseover(function(){
        $(this).addClass('over');
    });

    $('dt').mouseout(function(){
        $(this).removeClass('over');
    });

    $('dt').click(function(){
        var a = $(this).next('dd').css('display');

        if(a === 'none'){
        $('dd').slideUp();
        $('dt').removeClass('selected');

        $(this).next('dd').slideDown();
        $(this).addClass('selected');

        $('dt').mouseover(function(){
            $(this).addClass('over');
        });

        $('dt').mouseout(function(){
            $(this).removeClass('over');
        });
        }else{
            $('dd').slideUp();
            $('dt').removeClass('selected');
        }
        return false;
    });
    
});