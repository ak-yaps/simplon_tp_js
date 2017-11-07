var tpLibre = (function() {
  var divColor, btnColor;

// OBTENIR UNE COULEUR HEXADECIMALE
  function getHexColor() {
    var color = "",
        signs = '0123456789abcdef';
    for (var i = 0; i < 6; i++) {
      color += signs[Math.floor(Math.random() * 16)];
      // console.log(color);
    }
    return "#" + color;
  }

// PARCOURIR LES DIV.color, RECUPERER LES BACKGROUND COLOR ET LES AFFECTER à LE FONCTION getHexColor
  function getDivColor() {
    var i;
    for (i = 0; i < divColor.length; i++) {
      divColor[i].style.backgroundColor = getHexColor();
    }
  }

// AFFECTER UN ECOUTEUR D'EVENEMENTS SUR LE BOUTON ET ACTIONNER LA FONCTION getDivColor
  function getColorByBtn() {
    btnColor.addEventListener("click", getDivColor);
  }

  window.onload = function() {
    divColor = document.querySelectorAll(".color");
    btnColor = document.querySelector(".btnColor");
    getColorByBtn();
  };

  return {
    bgColor: getHexColor,
    changeColor: getDivColor
  };

}());
