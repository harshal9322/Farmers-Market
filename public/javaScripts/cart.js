document.querySelectorAll(".remove-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const id = button.dataset.id;

    const res = await fetch("/remove-item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    const result = await res.json();

    if (result.success) {
      // Remove item from DOM
      const card = button.closest(".cart-card");
      if (card) card.remove();

      const remvMsg = document.querySelector(".removeMsg");
          remvMsg.style.display = "flex";
          remvMsg.innerText = result.message;
        setTimeout(() => {
          remvMsg.style.display = "none";
          remvMsg.innerText = "";
        }, 1900);     

      // Count how many items are left
      const remainingItems = document.querySelectorAll(".cart-card").length;

      // Save to localStorage
      localStorage.setItem("totalCount", remainingItems);

      // Update visible counter if any
      const counter = document.querySelector(".cart-counter");
      if (counter) {
        if (remainingItems > 0) {
          counter.innerText = remainingItems;
        } else {
          counter.style.display = "none";  // hide when empty
        }
      }
    }
  });
});
