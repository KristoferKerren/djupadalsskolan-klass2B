document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("greetButton");
  //const message = document.getElementById("greetingMessage");

  button.addEventListener("click", () => {
    // message.textContent = "Hello! Thanks for visiting my homepage!";
    // message.style.color = "#007bff";
    alert("Du klickade!")
  });
});
