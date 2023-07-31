// import {randomColor} from './tools.js';
// import { hexToRGB } from './tools.js';

// import {hello} from "./tools.js";
// console.log(hello);

var temp = "";
var ac = "";
var op = "";

var isPartyOn = false;


var display = document.getElementById("display");


var form = document.setColor;
var calci = document.getElementsByClassName("calci")[0];
var switches = document.querySelectorAll(".calci input");


function add(a) {
    temp += a;
    ac += a;
    show();
    console.log(ac);
}

function addOp(op) {
    ac += op;
    temp = "";
    console.log(ac);
}

function invert() {
    temp = (parseFloat(temp) * -1).toString();
    show();
}

function calculate() {
    temp = eval(ac);
    ac = temp;
    show();
    console.log(ac);
}

function clearAll() {
    temp = ac = op = "";
    display.innerHTML = "0";
    console.log(ac);
}

function show() {
    display.innerHTML = temp;
}

function press(event) {
    key = event.key;
    if ((parseInt(key) >= 0 && parseInt(key)) || key == ".") {
        add(key);
    } else if (key == "+" || key == "-" || key == "*" || key == "/") {
        addOp(key);
    } else if (key == "=" || key=="Enter") {
        calculate();
    }
}



function setTheme() {
    colorCode = hexToRGB(form.shadowColor.value);
    r = colorCode[0];
    g = colorCode[1];
    b = colorCode[2];
    shadow_color =
        "rgba(" + r + ", " + g + ", " + b + ", 0.4) 0px 2px 4px, rgba(" + r + "," + g + "," + b + ", 0.3) 0px 7px 13px -3px, rgba(" + r + "," + g + "," + b + ", 0.2) 0px -3px 0px inset";

    calci.style.boxShadow = shadow_color;
    calci.style.borderColor = form.shadowColor.value;
    document.body.style.backgroundColor = form.backgroundColor.value;
    calci.style.backgroundColor = form.calciColor.value;
    switches.forEach((obj) => {
        obj.style.backgroundColor = form.switchColor.value;
        obj.style.color = form.textColor.value;
        obj.style.boxShadow = shadow_color;
    });
}

function randomChange() {
    document.body.style.backgroundColor = randomColor();
    calci.style.backgroundColor = randomColor();
    switches.forEach((obj) => {
        obj.style.backgroundColor = randomColor();
        obj.style.color = randomColor();
    });
}


var partyInterval;

function party() {
    if (isPartyOn) {
        isPartyOn = false;
        clearInterval(partyInterval);
    } else {
        isPartyOn = true;
        partyInterval = setInterval(randomChange, 100);
    }
};


function randomColor() {
    return (
        "rgb(" +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        ")"
    );
}

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    return [+r, +g, +b];
}




