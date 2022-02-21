var body = document.body;
body.style.backgroundColor = "cornsilk";
body.style.fontFamily = "Dosis, sans-serif";
body.style.textDecoration = "none";

var title = document.getElementById("title");
title.style.paddingTop = "2%";



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


$(document).ready(function(){
  $("#home").mouseover(function(){
    $("#home").css("color", "black").css("font-weight", "bold");
  });
  $("#home").mouseout(function(){
    $("#home").css("color", "gray").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#about").mouseover(function(){
    $("#about").css("color", "black").css("font-weight", "bold");
  });
  $("#about").mouseout(function(){
    $("#about").css("color", "gray").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#sections").mouseover(function(){
    $("#sections").css("color", "black").css("font-weight", "bold");
  });
  $("#sections").mouseout(function(){
    $("#sections").css("color", "gray").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#products").mouseover(function(){
    $("#products").css("color", "black").css("font-weight", "bold");
  });
  $("#products").mouseout(function(){
    $("#products").css("color", "gray").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#home1").mouseover(function(){
    $("#home1").css("color", "black").css("font-weight", "bold");
  });
  $("#home1").mouseout(function(){
    $("#home1").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#about1").mouseover(function(){
    $("#about1").css("color", "black").css("font-weight", "bold");
  });
  $("#about1").mouseout(function(){
    $("#about1").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#sections1").mouseover(function(){
    $("#sections1").css("color", "black").css("font-weight", "bold");
  });
  $("#sections1").mouseout(function(){
    $("#sections1").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#products1").mouseover(function(){
    $("#products1").css("color", "black").css("font-weight", "bold");
  });
  $("#products1").mouseout(function(){
    $("#products1").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#ins").mouseover(function(){
    $("#ins").css("color", "black").css("font-weight", "bold");
  });
  $("#ins").mouseout(function(){
    $("#ins").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#tik").mouseover(function(){
    $("#tik").css("color", "black").css("font-weight", "bold");
  });
  $("#tik").mouseout(function(){
    $("#tik").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#twit").mouseover(function(){
    $("#twit").css("color", "black").css("font-weight", "bold");
  });
  $("#twit").mouseout(function(){
    $("#twit").css("color", "black").css("font-weight", "normal");
  });
});

$(document).ready(function(){
  $("#kumis").mouseover(function(){
    $("#kumis").css("color", "black").css("font-weight", "bold");
  });
  $("#kumis").mouseout(function(){
    $("#kumis").css("color", "black").css("font-weight", "normal");
  });
});

j = 0;
$(document).ready(function(){
  $("#p1").keypress(function(){
    $("#num").text(j += 1);
});
  $("#btn").click(function(){
    $("#p1").keypress();
  });
});

$(document).ready(function(){
  $("#buy").click(function(){
    $("#buy").click();
  });
});

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
