$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav: false,
        // navText: [ '<i class="fa-solid fa-left-long"></i>', '<i class="fa-solid fa-right-long"></i>']
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },

            480:{
                items:3,
            },
            767:{
                items:5,
            },
            991:{
                items:6,
            },
            1320:{
                items:8,
            }
        }
    });
  });