! function(t) {
 "use strict";
 t(".service-box").click(function(e) {
  e.preventDefault(), t(this).tab("show")
 }), t("a.page-scroll").bind("click", function(e) {
  var o = t(this);
  t("html, body").stop().animate({
   scrollTop: t(o.attr("href")).offset().top - 50
  }, 1250, "easeInOutExpo"), e.preventDefault()
 }), t("body").scrollspy({
  target: ".navbar-fixed-top",
  offset: 51
 }), t(".navbar-collapse ul li a").click(function() {
  t(".navbar-toggle:visible").click()
 }), t("#mainNav").affix({
  offset: {
   top: 100
  }
 }), (new WOW).init()
}(jQuery);