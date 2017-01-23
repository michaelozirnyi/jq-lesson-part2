jQuery(function () {    /*jQuery(function ($) {            ???????*/

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });


    $('.btn-menu').on('click', function(){
        $(".menu-bar").toggleClass('toggl-menu');
        $("body").toggleClass('place-menu');
    });


                  /*-----*/

    var btnText = "View more",
        newTextBtn = "Less";

    $('#visMore').on('click', function(){
        $(".gener").toggleClass('little-h1');
        $(".hiden").fadeIn(700);

        var togBtn = $("#visMore").text();

        if (togBtn == btnText) {
            $("#visMore").text(newTextBtn);
        } else {
            $("#visMore").text(btnText);
            $(".hiden").fadeOut(700);
        }
    });

                   /*-----*/

    $('#new-gener').on('click', function(){
        $(".new-flying").toggleClass('little-h1');
        $(".hiden-fly").fadeIn(700);

        var togBtn = $("#new-gener").text(),
            btnText = "Products";

        if (togBtn == btnText) {
            $("#new-gener").text(newTextBtn);
        } else {
            $("#new-gener").text(btnText);
            $(".hiden-fly").fadeOut(700);
        }
    });

                    /*-----*/

    $('#startBtn').on('click', function(){
        $(".absolut").toggleClass('little-h1');
        $(".hiden-start").show(700);

        var togBtn = $("#startBtn").text();

        if (togBtn == btnText) {
            $("#startBtn").text(newTextBtn);
        } else {
            $("#startBtn").text(btnText);
            $(".hiden-start").fadeOut(700);
        }
    });
});