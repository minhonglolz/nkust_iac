;
(function() {
    window.addEventListener('scroll', function() {
        if (jQuery(window).width() > 768) {
            $('.fixed-bar').toggleClass('navbarclose ', window.scrollY > 0)
            $('.searchwrap').toggleClass('searchclose ', window.scrollY > 0)
        }
    })

    $.each($(".videoitem"), function(i, o) {
        $(o).click(function() {
            console.log(i)
            $('.ifrem-wrap').eq(i).toggleClass('ifremhide')

            $('body').toggleClass('scrollnone')
        })
    })
    $.each($('.closebtn'), function(x, o) {
        $(o).click(function() {
            $('.ifrem-wrap').eq(x).toggleClass('ifremhide')
            $('body').toggleClass('scrollnone')
            $('iframe').eq(x).attr('src', $('iframe').eq(x).attr('src'));
        })
    })
    $.each($('.teachitem'), function(x, o) {
        $(o).click(function() {
            $('.intro').eq(x).show()
            $('.blockbgc').show()
        })
    })
    $.each($('.introa '), function(x, o) {
        $(o).click(function() {
            $('.intro').eq(x).hide()
            $('.blockbgc').hide()
        })
    })

    $.each($('.introclosebtn'), function(x, o) {
        $(o).click(function() {
            $('.intro').eq(x).hide()
            $('.blockbgc').hide()
        })
    })
})()
$(".search-txt").bind("input propertychange", function() {
    if ($(".search-txt").val() !== "") {
        $('.search-txt').addClass('search-ht')
        $('.search-wrap').addClass('search-wrap-ht')
    } else {
        $('.search-txt').removeClass('search-ht')
        $('.search-wrap').removeClass('search-wrap-ht')
    }
});