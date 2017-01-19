jQuery(function ($) {

    $('#visMore').on('click', function(){
        $(".gener").addClass('little-h1');
        $(".hiden").fadeIn(700);
        /*$("#startBtn").text(Less);*/
    });


    $('#new-gener').on('click', function(){
        $(".new-flying").addClass('little-h1');
        $(".hiden-fly").fadeIn(700);


    });

    $('#startBtn').on('click', function(){
        $(".absolut").addClass('little-h1');
        $(".hiden-start").show(700);

    });


});