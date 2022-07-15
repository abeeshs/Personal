$(document).ready(function () {
    $("#submit-form").validate({
        rules: {
            Name: {
                required: true,
                minlength: 3,

            },
            Email: {
                required: true,
                email: true,
            },
            Subject: {
                required: true,
                minlength: 5,

            },
            Message: {
                required: true,
                minlength: 10,
            }
        },

        submitHandler: function (form) {
            // e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyiYRIsfXfpvSkTKX0icJjxNOVsMWs-Rvh5EB690P5qZWpc9Tun-1iUv0JhVMrpz8lF/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error: function (err) {
                    alert("Something Error")

                },
            })
        },
    })

})
