$(function () {
    // var shrinkHeader = 30;
    $(window).scroll(function () {
        let scroll = getCurrentScroll();
        // console.log(scroll);
        if (scroll > 0) {
            $('.logo-wrapper').addClass('shrink-box');
            $('.logo-wrapper__slogan').addClass('shrink-slogan');
            $('.logo-wrapper__header').addClass('shrink-header');
            $('.logo-wrapper__tel').addClass('shrink-tel');
            $('.scrollHint').addClass('div-no-display');
        } else {
            $('.logo-wrapper').removeClass('shrink-box');
            $('.logo-wrapper__slogan').removeClass('shrink-slogan');
            $('.logo-wrapper__header').removeClass('shrink-header');
            $('.logo-wrapper__tel').removeClass('shrink-tel');
            $('.scrollHint').removeClass('div-no-display');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});