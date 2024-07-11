$('#menuToggle').click( function(){
    $('.header-nav').toggleClass("active");
    $('.search-box').toggleClass("active");
    $('body').toggleClass("overflow-hidden");
  });

  $('.product-box__btns button').click( function(){
    $(this).toggleClass("active");
  });

  $('.favorites-box button, .btn-favorites').click( function(){
    $(this).toggleClass("active");
  });
  $('.btn-comparison').click( function(){
    $("input").click();
    $(this).toggleClass("active");
  });

  $('.btn-options').click( function(){
    $(".btn-options > input").click();
  });

  $('.cart-number .minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.cart-number .plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});