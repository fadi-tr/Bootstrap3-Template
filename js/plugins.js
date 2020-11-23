$(document).ready(function() {
    $('html').niceScroll();
    $('.carousel').carousel({
        interval: 3000
    });
    // Show Color Option Div When Click On The Gear
    $(".gear-check").click(function() {
            $(".color-option").fadeToggle();
        })
        // Change Theme Color On Click
    $('.color-option ul li')
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#e426d5").end()
        .eq(2).css("backgroundColor", "#009aff").end()
        .eq(3).css("backgroundColor", "#ffd500");
    $('.color-option ul li').click(function() {
            $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        })
        // Cashing The Scroll Top Element
    let scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    })
    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    })
})

// Loading Screen
$(window).on('load', function() {

    $(".loading-overlay .spinner").fadeOut(2000, function() {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function() {
            $(this).remove();
        });
    });
})
$(".about-us h1").fitText();