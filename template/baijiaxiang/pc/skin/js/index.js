$(function() {

    $(".nav-toggle").click(function () {
        $("body").toggleClass("body_open");
    });

    $(".header_close").click(function () {
        $("body").toggleClass("body_open");
    });



    $(".online_message_icon_box").click(function () {
        $(".online_message_box").show();
    });
    
     $(".close_click").click(function () {
        $(".online_message_box").hide();
    });
    
});


