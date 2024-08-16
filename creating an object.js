var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "Karim";
myCar.drive = function(){console.log("now driving");};
myCar.drive();
var myCar2 = {maxspeed:90,
            driver:"Driver",
            drive: function(speed,time){
                console.log(speed * time),
                console.log(this);
}};
console.log(myCar2.maxspeed);
myCar2.drive(50,3);
