$(document).ready(function() {
 
    $("#create-guest").on("click", function(event) {

        event.preventDefault();

        // Creates new guest
        var newGuest = {
            name: $("#guest-name").val().trim(),
            rooms: $("#guest-room-count"),
            phone: $("#guest-phone")
        };
        // Send the POST request
        $.ajax("/api/guests", {
            type: "POST",
            data: newGuest
        }).then(
            function() {
                console.log("Successfully added a new guest!");
                //reload page to get updated list
                location.reload();
            }
        );
    })



});



