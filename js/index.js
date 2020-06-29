;
(function() {
    window.addEventListener('scroll', function() {
        if (jQuery(window).width() > 768) {
            $('.fixed-bar').toggleClass('navbarclose', window.scrollY > 0)
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

})()