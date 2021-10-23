/**
 * Author:    Pascual Martinez
 * Created:   10.20.2021
 * Lisence: Public Domain.
 **/

// Define Variables
myTransport = ["Volkswagen Golf",
"Lyft",
"Bus",
"Rides from friends",
"bike"
];

myMainRide = {
make : "Volkswagen",
model : "Golf",
color : "Navy",
year : 2019,
age : function() {
   return 2019 - age;
    }
}

// Output
document.writeln("Kinds of Transport I Use:", myTransport);
document.write("<br>");
document.write("<br>");
document.writeln("My Main Form of Transportation: <pre>",
        JSON.stringify(myMainRide, null, "\t"), "</pre>");
