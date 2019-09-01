"use strict";

var btn = $('.header__btn');
var nav = $('.nav');
btn.on('click', function () {
  $(this).toggleClass('header__btn--active');
  $(nav).toggleClass('nav--active');
});
$(document).ready(function () {
  $('body').append('<a href="#" id="go-top" title="Вверх"><svg class="go-top__icon"><use xlink:href="./images/sprite.svg#top_arrow"></use></svg></a>');
});
$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");else $(scrollDiv).fadeIn("slow");
    });
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
  };
});
$(function () {
  $("#go-top").scrollToTop();
});