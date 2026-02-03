const cards = document.querySelectorAll(".reveal");
const bars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show");
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
});
