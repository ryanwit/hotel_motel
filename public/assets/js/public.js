$(document).ready(function() {
 
    $("#create-guest").on("click", function(event) {

        event.preventDefault();

        // Creates new guest
        var newGuest = {
            name: $("#guest-name").val().trim(),
            rooms: $("#guest-room-count").val().trim(),
            phone: $("#guest-phone").val().trim()
        }
        // Send the POST request
        $.ajax("/api/guests",  {
            type: "POST",
            data: newGuest
        }).then(
            function(data) {
                console.log(data);
                //reload page to get updated list
                location.reload();
            }
        );
    })




});




