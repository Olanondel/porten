$(document).ready(function () {

  $('.burger_btn').click(function (e) {
    e.preventDefault()
    $('.nav').slideToggle(450, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style')
      }
    })
    $('nav').toggleClass('burgerToggle')
  })

  //

  $('.new_season .products_list').slick({
    arrows: false,

    slidesToShow: 3,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 277,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.new_items_screen .products_list').slick({
    arrows: false,
    slidesToShow: 4,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 277,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('.brand_items_list').slick({
    arrows: false,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 620,
        settings: 'unslick'
      }
    ]
  })

})