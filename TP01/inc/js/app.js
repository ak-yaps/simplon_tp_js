(function tp() {
  var pageModules = [];

  function styliserModule(num, color, bg) {
    pageModules[num];
    pageModules[num].style.color = color;
    pageModules[num].style.backgroundColor = bg;
  }

  function getModuleInfos(num) {
    return {
      id: pageModules[num].id,
      tagName: pageModules[num].tagName,
      className: pageModules[num].className,
      size: pageModules[num].getBoundingClientRect()
    };
  }

  function getPageModules() {
    return document.querySelectorAll("div,header,footer");
  }

  window.onload = function init() {
    pageModules = getPageModules();
    //styliserModule(0);
    console.log("modules loaded");
    console.log(pageModules);
    console.log(pageModules[4]);
    styliserModule(4, "yellow", "plum");
    styliserModule(10, "red", "navy");
    styliserModule(12, "hotpink", "aliceblue");
    console.log(getModuleInfos(1));
  }
}());
