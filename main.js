$(document).ready(() => {
  playAnimation = () => {
    var $video = $("#hero-video");
    videoElment = $video[0];
    playAction = () => {
      $("#playbtn>img").fadeOut(400, () => {
        $("#playbtn>img")
          .attr("src", "./assets/landingpage_kisetsu_2018.png")
          .fadeIn();
      });
      $("#playbtn>p").hide();
      $("#playbtn")
        .delay(800)
        .animate({
          top: "12%"
        }, {
          duration: 2700,
          easing: "swing"
        });
    };
    $video.on('canplaythrough', playAction);
    if (videoElment.readyState > 3) {
      playAction()
    }
  }

  setInterval(() => {
    $("#playIcon")
      .fadeOut(1000)
      .fadeIn(1000);
  }, 2000);
  $("#playbtn>img").fadeIn("slow");
  $("#playbtn").one("click touchstart", () => {
    $("video").trigger("play");
    $("#playIcon").hide();
    $("#loadIcon").show();
    playAnimation()
  });

  var $lightBtn = $(".light-btn");
  disabled = false;
  $lightBtn.each(function () {
    $(this).on("click touchstart", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .children("i")
        .removeClass("fas")
        .addClass("far");
      $("i", this)
        .addClass("fas")
        .removeClass("far");
    });

    $(this).on("mouseover mouseout", function () {
      if (!$(this).hasClass("active")) {
        $(this)
          .children("i")
          .toggleClass("far")
          .toggleClass("fas");
      }
    });
  });
});