$(
    function () {
        $('.new_season_card_list').slick({
            slidesToShow: 1,
            mobileFirst: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        })
    }
    )

$(
    function () {
        $('.new_items_screen .card_list').slick({
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: "unslick"
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    }
)

$(
    function () {
        $('.brand_list').slick({
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: "unslick"
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    }
)

$(function(){
    var equal_height = 0;
    $(".new_season_card_list .card_item").each(function(){
        if ($(this).height() > equal_height) { equal_height = $(this).height(); }
    });
    $(".new_season_card_list .card_item").height(equal_height);
});

$(function(){
    var equal_height = 0;
    $(".new_season_card_list .card_item img").each(function(){
        if ($(this).height() > equal_height) { equal_height = $(this).height(); }
    });
    $(".new_season_card_list .card_item img").height(equal_height);
});

$(function(){
    var equal_height = 0;
    $(".new_items_screen .card_item").each(function(){
        if ($(this).height() > equal_height) { equal_height = $(this).height(); }
    });
    $(".new_season_card_list .card_item").height(equal_height);
})

$(function(){
    var equal_height = 0;
    $(".new_items_screen .card_item img").each(function(){
        if ($(this).height() > equal_height) { equal_height = $(this).height(); }
    });
    $(".new_items_screen .card_item img").height(equal_height);
});

