[].forEach.call(document.querySelectorAll("a"), el => {
  el.addEventListener("click", () => {
    // votre code ici...…
    console.log("yes");
    document.getElementById("menusmart").style.display = "block";
    document.getElementById("cross").style.display = "block";
    document.getElementById("supp").style.display = "none";
  });
});

var gross = document.getElementById("cross");

gross.onclick = function() {
  document.getElementById("menusmart").style.display = "none";
  document.getElementById("cross").style.display = "none";
  document.getElementById("supp").style.display = "block";
};

window.addEventListener("scroll", () => {
  let scroll = window.scrollY; // Axe Y
  console.log(scroll);
});
