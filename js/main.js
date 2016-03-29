var $body = $ ('body');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('is-clicked');
});

$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('slide-in');
});




$body.on('click', '.btn-collapse-expand', function () {
  $('.panel').toggleClass('collapse');
});




$body.on('click', '.btn-bounce', function () {
  $('.circle').addClass('bounce');
});

$body.on('animationend', '.circle', function () {
  $(this).removeClass('bounce');
});


$body.on('click', '.btn-append', function () {
  $('.list').append('<li>New List Item</li>');
});
