$(document).ready(function () {
    setTimeout(function () {
        $("#playIcon").show();
    }, 2700);
    $("#playbtn>img").fadeIn("slow");
    $("#playbtn").one("click", function () {
        $("video").trigger("play");
        $("#playIcon").hide();
        $("#loadIcon").show();
    });
    var video = document.getElementById("hero-video");
    video.addEventListener('playing', function () {
        $("#playbtn>img")
            .fadeOut(400)
            .fadeIn("slow");
        setTimeout(function () {
            $("#playbtn>img").attr("src", "./assets/landingpage_kisetsu_2018.png");
        }, 400);
        $("#playbtn>p").hide();
        $("#playbtn")
            .delay(800)
            .animate({
                top: "12%"
            }, {
                duration: 2700,
                easing: "swing"
            });
        $("#overlay").fadeTo("slow", 0);

    }, false);
});