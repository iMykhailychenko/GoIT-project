var btn = $('.header__btn');
var nav = $('.nav');
btn.on('click', function () {
   $(this).toggleClass('header__btn--active');
   $(nav).toggleClass('nav--active');
});
