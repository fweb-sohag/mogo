$(function(){
  var backToTop = $('.backToTop');
  var html_body = $('html,body');
  
  
      $(window).scroll(function () { 
          var scrolling = $(this).scrollTop();
          if(scrolling > 200){
              backToTop.fadeIn();
          }else{
              backToTop.fadeOut();
          }
          if(scrolling >200){
               $('.navbar').addClass('fixd-nav');
           }else{
               $('.navbar').removeClass('fixd-nav');
           }
      });
  
  
      backToTop.on('click',function(){
          html_body.animate({
              scrollTop:0,
          },1500);
      });
  
      $('.navbar .navbar-nav .nav-item a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500,);
                  return false;
              }
          }
      });  
  });


    // active class in navbar 
 $(function(){
  $('.navbar .nav-item ').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      });
});

//  banner slider 
$(function(){
  $('.banner-slider').slick({
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });
});
// count 
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// service slider 
$(function(){
  $('.service-slider').slick({
    dots:false,
    arrows:true,
    prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left "></i>',
    nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
});

// work slider 
$(function(){
  $('.earle-slider').slick({
    dots:false,
    arrows:true,
    prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left "></i>',
    nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });
});

     //    menu icon toggler

     $(".navbar .navbar-toggler").on("click", function () {

      $(".navbar .navbar-toggler span").toggleClass("fas fa-times");

  });

//   var $;
// $(document).ready(function () {
//     "use strict";
  
    /* PRELODER PAGES PROPERTY */

    $(".preloader-overlay .center").fadeOut(1000, function () {
      $(".preloader-overlay").fadeOut(500);
      $("body").css("overflow", "auto");
  });