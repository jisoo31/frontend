$(function(){

    let dLeft = $('#floatdiv').offset().left;

    $('nav ul li').click(function(){
        var i = $(this).index();
        var offset_t = $('section>article').eq(i).offset().left;

        $('html, body').stop().animate({scrollLeft: offset_t}, 1300);
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(i).addClass('on');
        return false;
    });

    $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('.s_Top').text(sct);
        $('#floatdiv').stop().animate({left: dLeft + sct}, 500);

        if(sct > 0){
            $('nav').addClass('on');
        } else {
            $('nav').removeClass('on');
        }

        for(let i = 0; i < $('section > article').length; i++){
            if(sct >= $('section > article').eq(i).offset().left){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
                $('#floatdiv ul li').removeClass('on');
                $('#floatdiv ul li').eq(i).addClass('on');
            }
        }
    });


    $('#floatdiv ul li').click(function(){
        let index = $(this).index();
        let offset_t = $('section > article').eq(index).offset().left;

        $('html, body').stop().animate({scrollLeft: offset_t}, 1300);
        $('nav ul li').removeClass('on');
        $('nav ul li').eq(index).addClass('on');
        return false;
    });


    $('#popup').draggable();

    if ($.cookie('pop') != 'no') {
        $('#popup').show();
    }

    $('#popup area:eq(0)').click(function(){
        $('#popup').fadeOut('fast');
    });

    $('#popup area:eq(1)').click(function(){
        $.cookie('pop', 'no', {expires: 1});
        $('#popup').fadeOut('fast');
    });


    $('#notice_wrap').draggable();

    if ($.cookie('popup') == 'none') {
        $('#notice_wrap').hide();
    }

    let chk = $('#expiresChk');

    $('.closeBtn').on('click', closePop);
    function closePop() {
        if (chk.is(':checked')) {
            $.cookie('popup', 'none', {expires: 3});
        }
        $('#notice_wrap').fadeOut('fast');
    }
});
