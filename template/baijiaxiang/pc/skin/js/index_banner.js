$(function() {

    var $window = $(window);

    var $windowWidth = function() {
        return $window.width();
    };
    var $windowHeight = function() {
        return $window.height();
    };

    $window.fssResize(function() {
        var width = $windowWidth();
        var height = $windowHeight();
        $('.home_banner_slider').each(function() {
            $this = $(this);
            $this.height(height).width(width);
            $this.triggerHandler("configuration", {height: height, width: width, items: {width: width}});
            $this.triggerHandler("updateSizes");
        });
    });
    $('.home_banner_slider .item img').each(function() {
        $(this).fullscreenstage({'width': 1920, 'height': 960});
    });
    $('.home_banner_slider').carouFredSel({
        'responsive': true,
        'scroll': {
            'duration': 1000,
            'items': 1,
            // 'fx': 'crossfade'
        },
        'auto': true,
        'items': 1,

    });
    $(window).fssResize();
    
});


