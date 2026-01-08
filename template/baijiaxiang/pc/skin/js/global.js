$(function() {

   
    $(".language_title").click(function(){
        $(".language_drop").toggle(); 
    });


    $(".product_details_conter_nav ul li:first-child").addClass("active");
    $('.product_details_conter_container .product_details_item_box:first-child').show();
    $(".product_details_conter_nav ul li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.product_details_conter_container .product_details_item_box').eq(index).stop().slideDown(800).siblings().stop().slideUp(800);
    });


});