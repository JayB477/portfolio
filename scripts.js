$(document).ready(function () {

    $('#contactForm').on('submit', submitcontactform)
});



function submitcontactform() {
    event.preventDefault();
    var x = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    } else {
        $(this).fadeOut();
        $("#success").slideIn();
    }
}