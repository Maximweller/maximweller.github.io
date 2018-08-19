$(window).on('load', function () {
    $preloader = $('.loading-wrapper'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});