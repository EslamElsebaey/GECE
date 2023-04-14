
$(window).on("load", function () {
  $(".preloader").fadeOut();
})


$(document).ready(function(){
     // preloader
    //  setTimeout(function () {
    //   $(".preloader").css({
    //     opacity : "0" , 
    //     visibility : "hidden" , 
    //   })
    // }, 2000);





/************************************************************************************************** */

// main swiper


const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


// projects swiper


const projects = new Swiper('.projects .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },

  pagination: {
    el: '.projects .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    } , 
    700: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});


/************************************************************************************************** */





// clients swiper

const clients = new Swiper('.clients .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .clients .swiper-button-next',
    prevEl: '.clients .swiper-button-prev',
  },

  pagination: {
    el: '.clients .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});



// partners swiper

const gasSec = new Swiper('.gas-sec .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .gas-sec .swiper-button-next',
    prevEl: '.gas-sec .swiper-button-prev',
  },

  pagination: {
    el: '.gas-sec .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});

const fuelSec = new Swiper('.fuel-sec .swiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .fuel-sec .swiper-button-next',
    prevEl: '.fuel-sec .swiper-button-prev',
  },

  pagination: {
    el: '.fuel-sec .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    350: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 15
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});







/************************************************************************************************** */



// open and close sideBar


$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})





/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************************************** */



//  nested menus in footer


if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }




/************************************************************************************************** */


// nav nested menu

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }


/************************************************************************************************** */


//fixed nav

   
   $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed");
      if($(window).width() > 992){
        $(".logo img").addClass("logo-height");
      }else{
        $("nav").addClass("pd-top-25")
      }
    } else {
      $("header").removeClass("fixed");
      if($(window).width() > 992){
        $(".logo img").removeClass("logo-height");
      }else{
        $("nav").removeClass("pd-top-25")
      }
    }
  });
  var fixedBar = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();

  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
  })   

  





})  // end of document ready






