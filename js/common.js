$(function () {
  // ヘッダースクロール時の背景色変更処理
  $(window).on('scroll', function () {
    if ($('.fv').height() < $(this).scrollTop()) {
        $('.js-header').addClass('header-bg');
    } else {
        $('.js-header').removeClass('header-bg');
    }
  });
});