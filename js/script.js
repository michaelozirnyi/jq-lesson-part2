jQuery(function ($) {

    $('#visMore').on('click', function(){
        $(".gener").toggleClass('little-h1');
        $(".hiden").fadeIn(700);

        var togBtn = $("#visMore").text(),
            btnText = "View more",
            newTextBtn = "Less";

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
            btnText = "Products",
            newTextBtn = "Less";

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

        var togBtn = $("#startBtn").text(),
            btnText = "View more",
            newTextBtn = "Less";

        if (togBtn == btnText) {
            $("#startBtn").text(newTextBtn);
        } else {
            $("#startBtn").text(btnText);
            $(".hiden-start").fadeOut(700);
        }

    });


});