let labelz = document.querySelectorAll("label");
let togglea = document.querySelectorAll(".toggle-list");
let toggleli = document.querySelectorAll(".toggleli");
let pg = document.querySelectorAll(".navbar-left-p");
function toggle() {
  labelz.forEach((e) => {
    e.addEventListener("click", () => {
      $(toggleli).toggle("active");
      $(togglea).css({
        display: "flex",
        "flex-direction": "column",
        "margin-top": "-47px",
      });
      $(pg).css("display", "none");
      $(labelz).toggle("disabled");
    });
  });
}
toggle();
