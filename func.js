$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
var vHeight = $(window).height();

  $('.intro').css({
    'transform' : 'translate(0px,'+wScroll/2.3+'%)'
  });

  if((wScroll > $('.education').offset().top - $(window).height()))
  {
  var offset = Math.min(0, wScroll - $('.education').offset().top + $(window).height() - $(window).height()/1.6);
  $('.education p').css({'transform': 'translate(20px,'+offset+'px)'});



  }
  if((wScroll > $('.edu').offset().top - $(window).height()))
  {
  var offset = Math.min(0, wScroll - $('.edu').offset().top + $(window).height() - $(window).height()/1.6);
  $('.edu p').css({'transform': 'translate(20px,'+offset+'px)'});



  }

  if((wScroll > $('.work').offset().top - $(window).height()))
  {
  var offset = Math.min(0, wScroll - $('.work').offset().top + $(window).height() - $(window).height()/1.2);
  $('.work p').css({'transform': 'translate('+Math.abs(offset)*4+'px,20px)'});



  }
});
