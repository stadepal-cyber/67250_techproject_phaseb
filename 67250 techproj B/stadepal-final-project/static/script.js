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
    list.forEach(function (item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

function greeting() {
    var greetingElement = document.getElementById("greeting");
    if (!greetingElement) {
        return;
    }

    var hour = new Date().getHours();

    if (hour < 5 || hour >= 20) {
        greetingElement.innerHTML = "Good night! Welcome to the MonoMuse Museum";
    } else if (hour < 12) {
        greetingElement.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
    } else if (hour < 18) {
        greetingElement.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
    } else {
        greetingElement.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
    }
}

function addYear() {
    var yearParagraph = document.getElementById("copyYear");
    if (yearParagraph) {
        yearParagraph.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    var navLinks = document.querySelectorAll(".nav_bar a");
    var currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {
        var linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

function toggleMenu() {
    var navBar = document.querySelector(".nav_bar");
    if (navBar) {
        navBar.classList.toggle("responsive");
    }
}

function showPurchaseForm(date) {
    var form = document.getElementById("purchaseForm");
    var selectedDateInput = document.getElementById("selectedDate");

    if (form && selectedDateInput) {
        form.style.display = "block";
        selectedDateInput.value = date;
    }
}

function redirectPayment() {
    alert("Redirecting to payment system.");
}

document.addEventListener("DOMContentLoaded", function () {
    greeting();
    ActiveNav();

    if (typeof $ !== "undefined") {
        $("#readLess").on("click", function () {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });

        $("#readMore").on("click", function () {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });
    }

    var mapElement = document.getElementById("map");
    if (mapElement && typeof L !== "undefined") {
        var map = L.map("map").setView([40.4433, -79.9436], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        L.marker([40.4433, -79.9436]).addTo(map)
            .bindPopup("MonoMuse - Pittsburgh")
            .openPopup();
    }
});