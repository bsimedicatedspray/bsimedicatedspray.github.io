var bsi = bsi || {};
bsi.init = function() {
    bsi.initImgSlider();
};


bsi.initImgSlider = function() {
    var owl = $('.slider').owlCarousel({
        lazyLoad: true,
        autoPlay: false,
        mouseDrag:true,
        touchDrag: true,
        video: true,
        items:1,
        navText: [
            '<img class="img-responsive" src="/img/arrow/arrow-left-grey.png"/>',
            '<img class="img-responsive" src="/img/arrow/arrow-right-grey.png"/>'
        ],
        smartSpeed: 1000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                nav: false,
                video: true

            },
            // breakpoint from 480 up
            992 : {
                nav: true,
                video: true

            }
        }
    });
    owl.on('changed.owl.carousel',function(property){
        var current = property.item.index;
        var rank = $(property.target).find(".owl-item").eq(current).find('li').data('rank');
        var color = $(property.target).find(".owl-item").eq(current).find('li').data('color');
        var description = $(property.target).find(".owl-item").eq(current).find('li').data('description');

        $("#bg-color").css("background-color",color);
        $(".modal-content").css("background-color",color);

        $(".section-description").fadeOut(function() {
            $(this).html(description).fadeIn();
        });
        $(".modal-text").fadeOut(function() {
            $(this).html(description).fadeIn();
        });


    });

};



$(function(){
    bsi.init();
});






