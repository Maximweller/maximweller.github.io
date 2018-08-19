var body      = $('body');
var html      = $('html');
var searchBtn = $('.search');

setTimeout(function() {
    html.removeClass('is-hidden');
  }, 500);

searchBtn.on("click", function(e) {
  e.preventDefault();
  body.addClass('is-searching');
  setTimeout(function() {
    body.removeClass('is-searching');
  }, 2000);
});