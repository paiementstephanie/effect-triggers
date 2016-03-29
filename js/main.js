var $body = $ ('body');



$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('is-clicked');
});


$body.on('click', '.btn-bounce', function () {
  $('.circle').addClass('bounce');
});

$body.on('animationend', '.circle', function () {
  $(this).removeClass('bounce');
});
