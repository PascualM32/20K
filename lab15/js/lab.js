/**
 * Author:    Pascual Martinez
 * Created:   11.29.2021
 * Lisence: Public Domain.
 **/

// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
// Put the output of the AJAX call in the output div.

  var myUrl = "https://api.kanye.rest/";

  $("#run").click(APIchoose);

  function APIchoose() {
    console.log("click");

     // Using the core $.ajax() method
    $.ajax({
      // choosimng API endpoint
      url: myUrl,
      // POST or GET API request
      type: "GET",
      // choosing the data type that we expect back
      dataType: "json",
    })

 // If the request succeeds
 //chosen data is passed back
    .done(function(data){
      console.log("Success:", data);
      $("#output").append("<p>" + data.quote);
    })

 // If the request fails
    .fail(function(request,error){
      console.log(request, error);
    })
  }
