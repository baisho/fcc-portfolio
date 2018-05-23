$(document).ready(function () {

      $(".navbar__menu-item-button").mouseenter(function () {
            $(this).addClass("animated pulse");
      });

      $(".navbar__menu-item-button").mouseleave(function () {
            $(this).removeClass("animated pulse");
      });
});