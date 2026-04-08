const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {
    welcomeMessage.textContent = "Plan your visit today and get to tickets faster with our streamlined navigation.";
}
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

function findTheBananaForEach(list) {
    list.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}
var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good night! Welcome to the MonoMuse Museum";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
        } else {
            greetingElement.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
        }
    }
}
greeting(hour);

function addYear() {
    var yearParagraph = document.getElementById("copyYear");
    if (yearParagraph) {
        yearParagraph.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}