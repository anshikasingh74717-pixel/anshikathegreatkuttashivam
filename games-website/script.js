// Simple animation on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".game-card").forEach(card => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 1s ease";
      card.style.opacity = 1;
    }, 200);
  });
});