$(document).ready(function () {

    const slider = document.querySelector('.swiper-1')
    let mySwipper

    function mobileSlider() {
        if (window.innerWidth <= 640 && slider.dataset.mobile === 'false') {
            mySwiper = new Swiper(slider, {
                loop: true,
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 40,
                breakpoints: {
                    640: {
                        enabled: false,
                        slidesPerView: 4
                    }
                }
            })

            slider.dataset.mobile = 'true'
        }

        if (window.innerWidth > 640) {
            slider.dataset.mobile = 'false'

            if(slider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }

        }
    }

    mobileSlider()

    $(window).resize(function () {

        mobileSlider()

        if (!$('.products_list').hasClass('swiper-container-initialized') && $(window).width() < 640) {
            const newSeason = new Swiper('.swiper-container', {
                loop: true,
                slidesPerView: 1.9,
                centeredSlides: true,
                spaceBetween: 45,
                breakpoints: {
                    640: {
                        enabled: false,
                        slidesPerView: 3
                    }
                }
            })
        }

        if (!$('.swiper-3').hasClass('swiper-container-initialized') && $(window).width() < 768) {
            const brands = new Swiper('.swiper-3', {
                slidesPerView: 1,
                loop: true,
                breakpoints: {
                    580: {
                        enabled: true,
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        enabled: false,
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }
            })
        }

    })

    $('.burger_btn').click(function (e) {
        e.preventDefault()
        $('.main_nav').slideToggle(450, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style')
            }
        })
        $('nav').toggleClass('burgerToggle')
    })

    const newSeason = new Swiper('.swiper-0', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 40,
        breakpoints: {
            640: {
                enabled: false,
                slidesPerView: 3
            },
            960: {
                enabled: false,
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })

    const brands = new Swiper('.swiper-3', {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            580: {
                enabled: true,
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                enabled: false,
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    })

})