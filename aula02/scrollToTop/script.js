$(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>100){
            $('.scrollToTop').fadeIn();
        } else {
        $('.scrollToTop').fadeOut();
    }

    });
    $("a").click(function (event) {
        if(this.hash !== ""){
            let hash = this.hash;

            $('html, body').animate({
                scrollTop:$(hash).offset().top
                
             },8500,function(){
                 window.location.hash = hash;
             })};
    });
});