
function change() {
    if ($("#edit").css("display") == "block") {

        $("#edit").css("display", "none");
        $("#details").css("display", "block");
        $("#editButton").css("display", "none");
        $("#detailsButton").css("display", "block");

    } else {
        $("#edit").css("display", "block");
        $("#details").css("display", "none");
        $("#editButton").css("display", "block");
        $("#detailsButton").css("display", "none");
    }
}
