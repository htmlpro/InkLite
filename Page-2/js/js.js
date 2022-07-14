$(document).ready(function () {
    $('.testimonial-container').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: `<span class="prev-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
        nextArrow: `<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>`,

        responsive: [
            {

                breakpoint: 767.98,
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
                breakpoint: 767.98,
                settings: "unslick",
            },
        ]
    });

    $(".res-container div").click(function () {
        let filter = $(this).attr("data-filter");

        $(".a-container").children('div.' + filter).show();
        $(".a-container").children('div:not(.' + filter + ')').hide();
    return false;
    });
});
