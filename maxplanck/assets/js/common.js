$(document).ready(function() {

    $("#form").submit(function() {
        $.ajax({
        type: "POST",
        url: "../php/mail.php",
        data: $(this).serialize()
    }).done(function() {
       alert("Thank you!");
    });
       return false;
    });
});


function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
}



