function main() {
    window.location.href = "../index.html";
}

function sidebar_open() {
  document.getElementById("mysidebar").style.display = "block";
}

function sidebar_close() {
  document.getElementById("mysidebar").style.display = "none";
}

function accordeon() {
  var x = document.getElementById("accordeon");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-sand";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-sand", "");
  }
}

