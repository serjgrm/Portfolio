$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
});

