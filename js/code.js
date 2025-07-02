function main() {
  alert("You are in the main page")
}

function sidebar_open() {
  document.getElementById("mysidebar").style.display = "block";
}

function sidebar_close() {
  document.getElementById("mysidebar").style.display = "none";
}
function openlevel(evt, gradelevel) {
  var i, x, tablinks;
  x = document.getElementsByClassName("level");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(gradelevel).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}
function closelevel() {
  var i, x = document.getElementsByClassName("level");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
}
function accordeon1() {
  var x = document.getElementById("accordeon1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-sand";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-sand", "");
  }
}

function accordeon2() {
  var x = document.getElementById("accordeon2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-sand";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-sand", "");
  }
}