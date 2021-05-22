$(
    function () {
        $('.new_season_card_list').slick({
            slidesToShow: 3,
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
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1
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