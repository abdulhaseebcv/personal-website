
$(window).on('load', function () {
    setTimeout(() => {
        $(".loading").fadeOut(500)
        $(".content").show()
    }, 500);
})

$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 54) {
            $("#header-section").css("background-color", "#485461");
        }
        else {
            $("#header-section").css("background", "none");
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

    // $("#submitform").validate({
    //     // validateForm = true,
    //     rules: {
    //         fullname: {
    //             required: true,
    //         },
    //         subject: {
    //             required: true,
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         message: {
    //             required: true,
    //         }
    //     }
    // })

})

// <!-- contact form submission -->

$("#submitform").submit((e) => {
    e.preventDefault()
    $(document).ready(function () {
        $("#submitform").validate({
            // validateForm = true,
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

    // Handle form submission
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxIxwNu8Dp8nxQoylu7WMPzP0XE517mwXHo21yA0ZWNAH6aK51HDX6BL4u1EfETwCb5/exec",
        data: $("#submitform").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})













