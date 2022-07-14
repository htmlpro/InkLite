$(document).ready(function () {
    $('.testimonial-container').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:true,
        prevArrow: `<span class="prev-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
        nextArrow: `<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>`,

        responsive: [
            {

                breakpoint: 677,
                settings: {
                    arrows: false,
                }

            },

        ]
    });

    $('.res-container').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        mobileFirst: true,
        variableWidth: true,
        prevArrow: `<span class="p-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
        nextArrow: `<span class="n-arrow"><i class="fa-solid fa-angle-right"></i></span>`,
        responsive: [
            {
                breakpoint: 677,
                settings: "unslick",
            },
        ]
    });

    $(".res-container .slider-btn").click(function () {
        $('.slick-slide').addClass("active1");
        $(this).parent().parent().siblings().removeClass('active1');

        let filter = $(this).attr("data-filter");
    
        $(".a-container").children('.container.' + filter).show();
        $(".a-container").children('.container:not(.' + filter + ')').hide();
    return false;
    });


    $(".slider-btn").click(function(){
        $(this).toggleClass("active");   
        $(this).siblings().removeClass('active');       
    });

});


