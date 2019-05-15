$(document).ready(function () {
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