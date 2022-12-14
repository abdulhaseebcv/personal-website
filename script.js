$(window).on('load', function () {
    $(".loading").fadeOut(500)
    $(".content").show()
})

$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 54) {
            $("#header-section").css("background-color", "#6c757d");
        }
        else {
            $("#header-section").css("background", "transparent");
        }
    })

    $("#change-theme-btn").click(function () {
        $("body").toggleClass("light-theme")
        if ($("body").hasClass("light-theme")) {
            $("#change-theme-btn").addClass("fa-duotone fa-moon")
        } else {
            $("#change-theme-btn").removeClass("fa-duotone fa-moon")
        }
    })


    $(".form-section").click(function () {
        if ($("body").hasClass("light-theme")) {
            $(".form-section").css({ "color": "black" })
        } else {
            $(".form-section").css({ "color": "white" })
        }
    })

    $("#submitform").validate({
        rules: {
            fullname: {
                required: true,
            },
            subject: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        }
    })


})













