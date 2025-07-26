export async function updateCounterDisplay() {
  try {
    const res = await fetch("/cart-count");
    const data = await res.json();
    const updateCount = data.cartCount;

    if (updateCount !== undefined) {
      const counter = document.querySelector(".counter");
      const cart = document.querySelector("#cart");
      const cartCounter = document.querySelector(".cart-counter");

      if (!counter || !cart || !cartCounter) return;

      if (updateCount === 0) {
        counter.style.display = "none";
        cart.style.display = "none";
        cartCounter.style.display = "none";
      } else {
        counter.style.display = "inline-block";
        counter.innerText = updateCount;
        cartCounter.innerText = updateCount;
        cartCounter.style.display = "inline-block";
        cart.style.display = "flex";
      }
    }
  } catch (err) {
    console.log("Failed to fetch cart :", err);
  }
}
