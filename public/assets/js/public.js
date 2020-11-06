$(document).ready(function () {
  $("#create-guest").on("click", function (event) {
    event.preventDefault();

    // Creates new guest
    var newGuest = {
      name: $("#guest-name").val().trim(),
      rooms: $("#guest-room-count").val().trim(),
      phone: $("#guest-phone").val().trim(),
    };
    // Send the POST request
    $.ajax("/api/guests", {
      type: "POST",
      data: newGuest,
    }).then(function (data) {
      console.log(data);
      //reload page to get updated list
      location.reload();
    });
  });

  $(".change-status").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);
    var newStatus = $(this).attr("data-newStatus");
    console.log(newStatus);
    // Send the PUT request.
    var newState = {
      status: newStatus,
    };
    $.ajax("/api/guests/" + id, {
      type: "PUT",
      data: newState,
    }).then(function (response) {
      console.log("changed status to", newState);
      console.log(response);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete").on("click", function () {
    var id = $(this).data("id");

    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/guests/" + id,
    }).then(function () {
      location.reload();
    });
  });
});
