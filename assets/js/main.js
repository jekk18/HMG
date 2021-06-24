$(document).ready(function(){
    $(".count1").counterUp({
        delay: 10,
        time: 400
    });
});


    $(".burger-lines").click(function(){
        $(".burger-menu").toggleClass("active");
    });

    $(document).ready(function(){
        $(".sub-btn").click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass("rotate");
            $(this).toggleClass("bg-color");
        });
    });