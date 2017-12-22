$(function () {
    var shrinkHeader = 30;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.logo-wrapper').addClass('shrink-box');
            $('.logo-wrapper__slogan').addClass('shrink-slogan');
            $('.logo-wrapper__header').addClass('shrink-header');
            $('.logo-wrapper__tel').addClass('shrink-tel');
        } else {
            $('.logo-wrapper').removeClass('shrink-box');
            $('.logo-wrapper__slogan').removeClass('shrink-slogan');
            $('.logo-wrapper__header').removeClass('shrink-header');
            $('.logo-wrapper__tel').removeClass('shrink-tel');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});