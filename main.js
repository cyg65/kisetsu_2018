$(document).ready(() => {
  playAnimation = () => {
    var $video = $('#hero-video');
    videoElement = $video[0];
    playAction = () => {
      $('#playbtn>img')
        .fadeOut(400, () => {
          $('#playbtn>img').attr(
            'src',
            './assets/landingpage_kisetsu_2018.png'
          );
        })
        .fadeIn();
      $('#playbtn>p').hide();
      $('#playbtn')
        .delay(800)
        .animate(
          {
            top: '12%'
          },
          {
            duration: 2700,
            easing: 'swing'
          }
        );
    };

    $video.on('canplaythrough', playAction);
    if (videoElement.readyState > 3) {
      playAction();
    }

    $video.on('ended', () => {
      $video.fadeOut();
    });
  };

  setInterval(() => {
    $('#playIcon')
      .fadeTo(1000, 0.6)
      .fadeTo(1000, 1);
  }, 2000);
  $('#playbtn>img').fadeIn('slow');
  $('#playbtn').one('click touchstart', () => {
    $('video').trigger('play');
    $('#playIcon').hide();
    $('#loadIcon').show();
    playAnimation();
  });

  var $lightBtn = $('.light-btn');
  disabled = false;
  $lightBtn.each(function() {
    $(this).on('click touchstart', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .children('i')
        .removeClass('fas')
        .addClass('far');
      $('i', this)
        .addClass('fas')
        .removeClass('far');
    });

    $(this).on('mouseover mouseout', function() {
      if (!$(this).hasClass('active')) {
        $(this)
          .children('i')
          .toggleClass('far')
          .toggleClass('fas');
      }
    });
  });

  $('#natural').on('click touchstart', function() {
    $('#natural-img')
      .show()
      .siblings('img')
      .fadeOut(600);
    setTimeout(() => {
      $('#natural-img')
        .css('z-index', 0)
        .siblings('img')
        .css('z-index', -1);
    }, 601);
  });
  $('#dim').on('click touchstart', function() {
    $('#dim-img')
      .show()
      .siblings('img')
      .fadeOut(600);
    setTimeout(() => {
      $('#dim-img')
        .css('z-index', 0)
        .siblings('img')
        .css('z-index', -1);
    }, 601);
  });
  $('#studio').on('click touchstart', function() {
    $('#studio-img')
      .show()
      .siblings('img')
      .fadeOut(600);
    setTimeout(() => {
      $('#studio-img')
        .css('z-index', 0)
        .siblings('img')
        .css('z-index', -1);
    }, 601);
  });
  $('#studio').trigger('click');
});
