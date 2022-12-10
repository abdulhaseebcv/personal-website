$(window).on('load', function () {
    $(".loading").fadeOut(1000)
    $(".content").show()
})

// $("#submit").click(function () {
//         alert("Message Sended")
//     })

$(document).ready(function () {

    $("#change-theme-btn").click(function () {
        $("body").toggleClass("light-theme")
        if ($("body").hasClass("light-theme")) {
            $("#change-theme-btn").addClass("fa-duotone fa-moon")
        } else {
            $("#change-theme-btn").removeClass("fa-duotone fa-moon")
        }
    });


    $(".form-section").click(function () {
        if ($("body").hasClass("light-theme")) {
            $(".form-section").css({ "color": "black" })
        } else {
            $(".form-section").css({ "color": "white" })
        }
    });

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













