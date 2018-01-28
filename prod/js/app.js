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
    
    $("#image-1, #image-2, #image-3").click(function () {
        $("#modal-1").addClass("is-active");
    });
});