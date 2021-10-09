let LightSwitch = document.getElementById("lightswitch");
let DarkModeCSSOverrides = document.getElementById("cssOverrides");

if (sessionStorage.getItem("DarkModeCSSOverrides") == null || sessionStorage.getItem("DarkModeCSSOverrides") == false) {
    DarkModeCSSOverrides.disabled = true;
    LightSwitch.src = "/res/imgs/light_on.png";
} else {
    DarkModeCSSOverrides.disabled = false;
    LightSwitch.src = "/res/imgs/light_off.png";
}

function ToggleLightswitch() {
    if (DarkModeCSSOverrides.disabled == true) {
        DarkModeCSSOverrides.disabled = false;
        LightSwitch.src = "/res/imgs/light_off.png";
    } else {
        DarkModeCSSOverrides.disabled = true;
        LightSwitch.src = "/res/imgs/light_on.png";
    }
}