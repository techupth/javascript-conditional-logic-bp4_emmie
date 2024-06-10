//Exercise 2
let lightBulbStatus = "On";

if (lightBulbStatus === "On") {
    message = "Light bulb is On.";
}else if(lightBulbStatus === "Off") {
    message = "Light bulb is Off.";
}else if(lightBulbStatus === "Broken") {
    message = "Light blub is Broken";
}else {
    message = "Please choose the corrent input (On/Off/Broken)";
}

console.log(message);
