var button = document.querySelector("#This");
var headerelement = document.querySelector("header");

function buttonpress() {
  headerelement.classlist.toggle("zaknaarbeneden");
}

button.addEventListener("click", buttonpress);
