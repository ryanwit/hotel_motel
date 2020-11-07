$(document).ready(function () {
  var occupancy = 0;
  $.ajax("api/guests", {
    type: "GET",
  }).then(function (response) {
    occupancy = 0;
    response.forEach((room) => {
      return (occupancy += room.rooms);
    });
    renderOccupancy();
    console.log(response);
  });

  function renderOccupancy() {
    for (i = 0; i < occupancy; i++) {
      $(`#tile${i + 1}`).text("X");
    }
  }

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
      window.location.reload();
    });
  });

  $(".change-status").on("click", function (event) {
    // renderOccupancy();
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
      window.location.reload();
    });
  });

  $(".delete").on("click", function () {
    var id = $(this).data("id");
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/guests/" + id,
    }).then(function () {
      window.location.reload();
    });
  });

  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x1e2537,
    color1: 0x23845c
  })

  $("#enterbtn").on("click", function (e) {
    console.log("click")
    $("#vanta").css("display", "none")        
    $("#show").css("display", "block")
    e.preventDefault()

  })
 
});






