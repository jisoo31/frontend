$(function(){
    $('.m_menu li ul').css('display','none');
    // $('.sub').css('display','none');
    // $('.sub').hide();

    // $('.sub').eq(0).show();
    //.sub중 첫번 째것만 보여라

    //$('.m_menu li:nth-child(1) ul').css('display','block');
    //$('.m_menu li:nth-child(1) ul').show();
    //$('.m_menu li:eq(0) ul').show();
    //$('.m_menu li:first ul').show();

    $('.m_menu>li>a').click(function(){
        //.m_menu안의 li자식 a 태그를 클릭하면
        var status = $(this).next('.sub').css('display');
        // 클릭한 a태그 다음에 있는 요소 중 클래스가 sub인 요소의 display 속성값을 가져와서
        //status 저장 none이면 현대 sub가 닫혀있는 상태 block 현재 서브가 열린 상태
        // alert(status);
        if(status === 'none'){
            $('.sub').slideUp();
            $(this).next('.sub').slideDown();
        }else{
            $('.sub').slideUp();
        }
        return false;
    })



})