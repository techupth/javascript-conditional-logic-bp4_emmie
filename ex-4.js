//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

let message;

switch (lightBulbStatus) {
    case "On":
        message = "Light bulb is On.";
        break;
    case "Off":
        message = "Light bulb is Off.";
        break;
    default : 
    message = "Please choose the correct input (On/Off)";
}

console.log(message);
