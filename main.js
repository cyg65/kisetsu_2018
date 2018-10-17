$(document).ready(function () {

    setTimeout(function () {
        $("#playIcon").show();
    }, 2700);
    $("#overlay").animate({
        opacity: "0.6"
    }, 2600, "swing");
    $("#playbtn>img").fadeIn("slow");
    var video = document.getElementById("hero-video");
    video.addEventListener('loadeddata', function () {
        alert("loaded")
        $("#playbtn").one("click", function () {
            $("#playbtn>img")
                .fadeOut(400)
                .fadeIn("slow");
            setTimeout(function () {
                $("#playbtn>img").attr("src", "./assets/landingpage_kisetsu_2018.png");
            }, 400);
            $("#playbtn>p").hide();
            $("video").trigger("play");
            $("#playbtn")
                .delay(800)
                .animate({
                    top: "12%"
                }, {
                    duration: 2700,
                    easing: "swing"
                });
            $("#overlay").fadeTo("slow", 0);
        });
    }, false);
});