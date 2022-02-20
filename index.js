var body = document.body;
body.style.backgroundColor = "cornsilk";
body.style.fontFamily = "Dosis, sans-serif";
body.style.textDecoration = "none";

var title = document.getElementById("title");
title.style.paddingTop = "2%";

document.getElementById("product").style.margin = "2% 2% 10% 2%";

var elementsh1 = document.getElementsByTagName("h1");
for (var i = 0; i < elementsh1.length; i++) {
  elementsh1[i].style.color = "burlywood";
  elementsh1[i].style.fontSize = "2rem";
  elementsh1[i].style.textTransform = "uppercase";
  elementsh1[i].style.textAlign = "center";
  elementsh1[i].style.fontWeight = "bold";
}

var elementsh2 = document.getElementsByTagName("h2");
for (var i = 0; i < elementsh2.length; i++) {
  elementsh2[i].style.color = "black";
  elementsh2[i].style.fontSize = "1.5rem";
  elementsh2[i].style.textTransform = "uppercase";
  elementsh2[i].style.textAlign = "center";
  elementsh2[i].style.fontWeight = "bold";
  elementsh2[i].style.paddingBottom = "10px";
}

var elementsh3 = document.getElementsByTagName("h3");
for (var i = 0; i < elementsh3.length; i++) {
  elementsh3[i].style.textAlign = "center";
  elementsh3[i].style.fontSize = "1.3rem";
  elementsh3[i].style.fontWeight = "bold";
}

var elementsh4 = document.getElementsByTagName("h4");
for (var i = 0; i < elementsh4.length; i++) {
  elementsh4[i].style.textAlign = "center";
  elementsh4[i].style.fontWeight = "bold";
}

var elementsP = document.getElementsByTagName("p");
for (var i = 0; i < elementsP.length; i++) {
  elementsP[i].style.fontSize = "1rem";
  elementsP[i].style.lineHeight = "1.2";
  elementsP[i].style.padding = "15px";
  elementsP[i].style.color = "#242222";
  elementsP[i].style.textAlign = "justify";
}

var navbar = document.getElementsByClassName('navbar');
for (var i = 0; i < navbar.length; i++) {
  navbar[i].style.padding = "0 0 3rem 0";
}

var cardText = document.getElementsByClassName('card-text');
for (var i = 0; i < cardText.length; i++) {
  cardText[i].style.textAlign = "center";
}

const product1 = {
  title: "Köz set",
  price: "5000₸",
};

product1.madefrom = "silver";
product1.inStock = 30;

delete product1.madefrom;

console.log(product1);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
