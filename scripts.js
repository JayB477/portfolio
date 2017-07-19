var projects = [
    {
        "name": "Claim Academy"
    }
]

$(document).ready(function () {

    $.each(projects, function (index, project) {
        console.log(project);
        $('#projects').append('<a href="#">' + porject.link + '"target="_blank" ><img src="'++ '/>'+ project.name + '</a>');
    });


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