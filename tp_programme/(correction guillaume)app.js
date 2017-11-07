var tpLibre = (function() {
  var divColor, btnColor;

  function getHexColor() {
    var color = "",
      signs = '0123456789abcdef';
    for (var i = 0; i < 6; i++) {
      color += signs[Math.floor(Math.random() * 16)];
      console.log(color);
    }
    return "#" + color;
  }

  function getDivColor() {

    console.log(divColor);
    var i;
    for (i = 0; i < divColor.length; i++) {
      console.log(i);
      divColor[i].addEventListener("click", function(e) {
        console.log("i dans le event handler");
        console.log(i);
        var target = e.target || e.srcElement;
        console.log(target === this);
        var c = getHexColor();
        console.log(c);
        target.style.backgroundColor = c;
        // this.style.color = getColor();
      })
    }
    console.log("fin de boucle");
    console.log(i);
  }

  window.onload = function() {
    divColor = document.querySelectorAll(".color");
    getDivColor();
    btnColor = document.querySelectorAll(".btnColor");
    console.log(btnColor);
    btnColor.addEventListener('click', getDivColor);
  };

  return {
    bgColor: getHexColor,
    changeColor: getDivColor
  };

}());
