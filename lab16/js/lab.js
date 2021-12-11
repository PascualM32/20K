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
     // the URL for the request
     url: myLink,
     //whether this is a POST or GET request
     type: "GET",
     // What do we do when the api call is successful
     //   all the action goes in here
     datatype: "JSON",
   })
   .done(function(data) {
     console.log("Success:", data);
     //$("#output").html(JSON.stringify(data));
     var comicObj = "https://xkcd.com/json.html" + data.url;
     var comicImg = data.img;
     var comicTitle = data.safe_title;
     $("#title").html(comicTitle);
     var imgTag = "<img src=" + comicImg + ">";
     $("#output").html(imgTag);
     var comicAlt = data.alt;
     $("#alt").html(comicAlt);
   })
   //if the request happens to fail
   .fail(function(request,error) {
     console.log(request, error);
     $("#output").html("Error");
   })
 }
