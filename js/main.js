var $body = $ ('body');



$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('is-clicked');
});
