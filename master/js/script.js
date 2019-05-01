// paralax effect
"use strict";

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
 
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    //friend muncul ilang
    if(wScroll > $('.friend').offset().top -200){
        $('.friend .thumbnail').each(function(i){
            setTimeout(function(){
                $('.friend .thumbnail').eq(i).addClass('muncul');
                //method eq itu buat hitung elemen yang keberapa
            },300 * i+1);
        })
        //    $('.friend .thumbnail').addClass('muncul');
    } 
    
});

$(window).on('load',function(){
    $('.p-kiri').addClass('p-muncul');
    $('.p-kanan').addClass('p-muncul');
});