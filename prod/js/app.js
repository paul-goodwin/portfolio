$(document).ready(function () {
    $("#detail-button").click(function () {
        $("#more_research").toggleClass("is-hidden-touch");
        /*        $(this).text(function (i, text) {
                    return text === "More" ? "Less" : "More";
                })*/
    });

    $(".modal-close, .modal-background").click(function () {
        $(".modal").removeClass("is-active");
    });

    $("#image-1").click(function () {
        $("#modal-1").addClass("is-active");
    });
    $("#image-2").click(function () {
        $("#modal-2").addClass("is-active");
    });
    $("#image-3").click(function () {
        $("#modal-3").addClass("is-active");
    });
    $("#image-4").click(function () {
        $("#modal-4").addClass("is-active");
    });
    $("#image-5").click(function () {
        $("#modal-5").addClass("is-active");
    });
    $("#image-6").click(function () {
        $("#modal-6").addClass("is-active");
    });
    $("#image-7").click(function () {
        $("#modal-7").addClass("is-active");
    });
    $("#image-8").click(function () {
        $("#modal-8").addClass("is-active");
    });
    $("#image-9").click(function () {
        $("#modal-9").addClass("is-active");
    });
    $("#image-10").click(function () {
        $("#modal-10").addClass("is-active");
    });
    $("#image-11").click(function () {
        $("#modal-11").addClass("is-active");
    });
    $("#image-12").click(function () {
        $("#modal-12").addClass("is-active");
    });
});
