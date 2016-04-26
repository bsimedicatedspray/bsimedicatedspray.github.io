var bsi = bsi || {};
bsi.init = function() {
    bsi.initImgSlider();
};

bsi.initImgSlider = function() {
    var owl = $('.slider').owlCarousel({
        lazyLoad: true,
        autoPlay: false,
        mouseDrag:false,
        touchDrag: true,
        items:1,
        navText: [
            '<img class="img-responsive" src="/img/arrow/arrow-left-grey.png"/>',
            '<img class="img-responsive" src="/img/arrow/arrow-right-grey.png"/>'
        ],
        smartSpeed: 1000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                nav: false

            },
            // breakpoint from 480 up
            992 : {
                nav: true

            }
        }
    });

    // Other Slides
    var pageImage = $('#page-container .right-section .slider .owl-stage-outer .owl-stage .owl-item .item .image-container .page-image');

    //pageImage.addClass('animated fadeIn');

    owl.on('changed.owl.carousel',function(property){
        var current = property.item.index;
        var rank = $(property.target).find(".owl-item").eq(current).find('li').data('rank');
        var color = $(property.target).find(".owl-item").eq(current).find('li').data('color');
        var description = $(property.target).find(".owl-item").eq(current).find('p').data('description');

        $("#bg-color").css("background-color",color);

        $(".section-description").fadeOut(function() {
            $(this).html(description).fadeIn();
        });

    });
};



$(function(){
    bsi.init();
});






