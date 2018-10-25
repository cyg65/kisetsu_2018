// var d1 = $.Deferred();
// var d2 = $.Deferred();

function lightOptions(elName) {
  $('#' + elName + '-img')
    .show()
    .siblings('img')
    .fadeOut(600).promise().done(function () {
      $('#' + elName + '-img')
        .css('z-index', 0)
        .siblings('img')
        .css('z-index', -1);
    });
}

// function lightOptions(elName) {
//   $('#' + elName + '-img')
//     .show()
//     .siblings('img')
//     .fadeOut(600);
//   setTimeout(function () {
//     $('#' + elName + '-img')
//       .css('z-index', 0)
//       .siblings('img')
//       .css('z-index', -1);
//   }, 601);
// }

$(document).ready(function () {
  if (navigator.userAgent.match(/iphone|ipod|ipad/i)) {
    var elHeight = iosInnerHeight() + 5;
    $('.vidcontainer').height(elHeight)
    $('#playbtn').css('top', '40%');
  }

  function playAnimation() {
    var $video = $('#hero-video');
    videoElement = $video[0];

    function playAction() {
      $('#playbtn>img')
        .fadeOut(400, function () {
          $('#playbtn>img').attr(
            'src',
            './assets/landingpage_kisetsu_2018.png'
          );
        })
        .fadeIn();
      $('#playbtn>p').hide();
      $('#playbtn')
        .delay(800)
        .animate({
          top: '12%'
        }, {
          duration: 2700,
          easing: 'swing'
        });
    }
    $video.on('canplaythrough', playAction);
    if (videoElement.readyState > 3) {
      playAction();
    }
    $video.on('ended', () => {
      $video.fadeOut();
    });
  };

  setInterval(function () {
    $('#playIcon')
      .fadeTo(1000, 0.6)
      .fadeTo(1000, 1);
  }, 2000);
  $('#playbtn>img').fadeIn('slow');
  $('#playbtn').one('click touchstart', function () {
    $('video').trigger('play');
    $('#playIcon').hide();
    $('#loadIcon').show();
    playAnimation();
  });

  var $lightBtn = $('.light-btn');
  $lightBtn.each(function () {
    $(this).on('click touchstart', function () {
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

    $(this).on('mouseover mouseout', function () {
      if (!$(this).hasClass('active')) {
        $(this)
          .children('i')
          .toggleClass('far')
          .toggleClass('fas');
      }
    });
  });
  // $('#dim').on('click touchstart', function () {
  //   $('#dim-img')
  //     .show()
  //     .siblings('img')
  //     .fadeOut(600);
  //   setTimeout(() => {
  //     $('#dim-img')
  //       .css('z-index', 0)
  //       .siblings('img')
  //       .css('z-index', -1);
  //   }, 601);
  // });
  // $('#studio').on('click touchstart', function () {
  //   $('#studio-img')
  //     .show()
  //     .siblings('img')
  //     .fadeOut(600);
  //   setTimeout(() => {
  //     $('#studio-img')
  //       .css('z-index', 0)
  //       .siblings('img')
  //       .css('z-index', -1);
  //   }, 601);
  // });
  $('#studio').trigger('click');
});