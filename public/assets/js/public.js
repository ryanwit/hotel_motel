$(document).ready(function () {
  var occupancy = 0;
  $.ajax("/guest/api/guests/", {
    type: "GET",
  }).then(function (response) {
    occupancy = 0;
    response.forEach((room) => {
      return (occupancy += room.rooms);
    });
    renderOccupancy(response);
  });

  function renderOccupancy(response) {
    for (i = 0; i < occupancy; i++) {
      if (i < 20) {
        $(`#tile${i + 1}`).text("X").attr("class", "center green z-depth-2");
        
        
        
      } else {
        alert("No rooms available");
      }
     
      
    }

    var answers = response
    $(`#tile${i + 1}`).on("click", function(){
      for (i = 0; i<answers.length; i++){
        console.log(answers[i])
      }
    })
    
  }

  $("#create-guest").on("click", function (event) {

    event.preventDefault();

    // Creates new guest
    var newGuest = {
      name: $("#guest-name").val().trim(),
      rooms: $("#guest-room-count").val().trim(),
      phone: $("#guest-phone").val().trim(),
      amount: $("#guest-count").val().trim(),
      checkin: $("#checkin").val().trim(),
      checkout: $("#checkout").val().trim(),
    };
    // Send the POST request
    $.ajax("/guest/api/guests", {
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
    $.ajax("/guest/api/guests/" + id, {
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
      url: "/guest/api/guests/" + id,
    }).then(function () {
      window.location.reload();
    });
  });

  $(".enterbtn").on("click", function (e) {
    e.preventDefault()
    console.log("click")
    window.location.href = "/guest"
  });

  // Creates the date drop down when user selects check-in date
  $(function() {
    $("#checkin").datepicker();
  });

   // Creates the date drop down when user selects check-out date
  $(function() {
    $("#checkout").datepicker();
  });
 
});







