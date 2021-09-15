
$(document).ready(function () {

    $("#ime").focus(function () {
        $("#ime").css("border", "3px solid red");
    });

    $("#email").focus(function () {
        $("#email").css("border", "3px solid green");
    });
});
