$(document).ready(() => {
  setInterval(() => {
    $("#playIcon")
      .fadeOut(1000)
      .fadeIn(1000);
  }, 2000);
  // $("#overlay").animate({
  //     opacity: "0.6"
  // }, 2600, "swing");
  $("#playbtn>img").fadeIn("slow");
  $("#playbtn").one("click touchstart", () => {
    // setTimeout(() => {
    $("video").trigger("play");
    // }, 5000);
    $("#playIcon").hide();
    $("#loadIcon").show();
  });
  var $video = $("#hero-video");
  $video[0].onplay = () => {
    $("#playbtn>img").fadeOut(400, () => {
      $("#playbtn>img")
        .attr("src", "./assets/landingpage_kisetsu_2018.png")
        .fadeIn();
    });
    $("#playbtn>p").hide();
    $("#playbtn")
      .delay(800)
      .animate(
        {
          top: "12%"
        },
        {
          duration: 2700,
          easing: "swing"
        }
      );
    // $("#overlay").fadeTo("slow", 0);
  };
  var $lightBtn = $(".light-btn");
  disabled = false;
  $lightBtn.each(function() {
    $(this).on("click touchstart", function() {
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

    $(this).on("mouseover mouseout", function() {
      if (!$(this).hasClass("active")) {
        $(this)
          .children("i")
          .toggleClass("far")
          .toggleClass("fas");
      }
    });
  });
});
