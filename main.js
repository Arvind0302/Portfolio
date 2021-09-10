var btn = document.getElementById("dark");
var light = document.getElementById("light");
var anchor = document.getElementsByTagName("a");
var body = document.body;
var mode = 1;

function darkmode() {
  if (mode == 1) mode = 0;
  else mode = 1;
  btn.classList.toggle("active");
  light.classList.toggle("on");
  body.classList.toggle("dark");
  if (mode == 0) {
    for (var i = 0; i < anchor.length; i++) anchor[i].style.color = "white";
  } else {
    for (var i = 0; i < anchor.length; i++) anchor[i].style.color = "black";
  }
}
