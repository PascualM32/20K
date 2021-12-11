/**
 * Author:    Pascual Martinez
 * Created:   12.01.2021
 * Lisence: Public Domain.
 **/
 var myLink = "https://xkcd.com/info.0.json";
 //click button functions
 $("#activate").click(myAPI);

 function myAPI(){
   console.log("click");
   //using the core $.ajax() method
   $.ajax( {
     // determining API endpoint
     url: myLink,
     //whether this is a POST or GET request
     type: "GET",
     //data type expected in return
     datatype: "json",
   })
   // If the request to call the API data is successful
   //this is the data returned
   .done(function(data) {
     console.log("Success:", data);
     var comicObj = "https://xkcd.com/json.html" + data.url;
     var comicImg = data.img;
     var comicTitle = data.safe_title;
     $("#title").html(comicTitle);
     var imgTag = "<img src=" + comicImg + ">";
     $("#output").html(imgTag);
     var comicAlt = data.alt;
     $("#alt").html(comicAlt);
   })
   //if the request fails
   .fail(function(request,error) {
     console.log(request, error);
     $("#output").html("Error");
   })
 }
