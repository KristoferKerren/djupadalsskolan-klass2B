document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("knapp");

  button.addEventListener("click", () => {
    alert(
      "HA! Du klickade fast du inte fick, nu får du ge mig extra många och fina julklappar! 🤣🤣🤣🤣"
    );
  });

  const bytFärgKnapp = document.getElementById("byt-färg-knapp");
  bytFärgKnapp.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "pink") {
      document.body.style.backgroundColor = "rgb(27, 235, 27)";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  });

  const bytRubrikFärgKnapp = document.getElementById("byt-rubrikfärg-knapp");
  bytRubrikFärgKnapp.addEventListener("click", () => {
    if (document.body.classList.contains("rubrikfärg-ska-vara-lila")) {
      document.body.classList.remove("rubrikfärg-ska-vara-lila");
    } else {
      document.body.classList.add("rubrikfärg-ska-vara-lila");
    }G
  });
});
