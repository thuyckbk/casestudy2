$(window).scroll(function(){
    let oTop = $('.section-1').offset().top - window.innerHeight;
    if($(window).scrollTop()> oTop){
        $('.navbar').addClass('sticky');
    }else{
        $('.navbar').removeClass('sticky');
    }
})