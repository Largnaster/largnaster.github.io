function enviar() {
  alert("Mensaje enviado");
}
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

