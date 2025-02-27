//aplicatia ap3
function showResponsive() {
    var elements = document.getElementsByClassName("main");
    var boxes = document.getElementsByClassName("box");
    Array.prototype.forEach.call(elements, function (el) {
      
        if (el.style.flexDirection === "column") {
            el.style.flexDirection = "row";
            Array.prototype.forEach
        }
    })
}