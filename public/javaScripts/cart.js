document.querySelectorAll(".remove-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const id = button.dataset.id;

    const res = await fetch("/delete-item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
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
          counter.style.display = "none"; // hide when empty
        }
      }
    }
  });
});

//----------------------------------------------------------------------------//

const plus = document.querySelectorAll(".plus");

plus.forEach((add) => {
  add.addEventListener("click", async () => {
    const card = add.closest(".cart-card");

    const name = card.querySelector(".name")?.innerText;
    const quantity = card.querySelector(".quantity")?.innerText;
    const count = parseInt(card.querySelector(".count")?.innerText) || 1;
    const price = parseInt(card.querySelector(".price")?.innerText.replace("₹", "")) || 0;
    const local = name;
    const img = card.querySelector(".card-img img")?.src;

    const cartItem = { name, quantity, count, price, local, img };

    const res = await fetch("/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
    const data = await res.json();
    const msgBox = document.querySelector(".added");
    if (msgBox && data.message) {
      msgBox.innerText = data.message;
      msgBox.style.display = "flex";
      setTimeout(() => {
        msgBox.innerText = "";
        msgBox.style.display = "none";
      }, 1500);
    }
  });
});

const minus = document.querySelectorAll(".minus");

minus.forEach((remove)=>{
  remove.addEventListener("click", async ()=>{
    const card = remove.closest(".cart-card");

    const name = card.querySelector(".name").innerText;
    const quantity = card.querySelector(".quantity").innerText;
    const price = parseInt(card.querySelector(".price").innerText.replace("₹", ""));
    const img = card.querySelector("img").src;
    const local = name;
    const count = parseInt(card.querySelector(".count").innerText);

    const cartItem = { name, quantity, price, count, img, local};

    const res = await fetch("/remove-item",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(cartItem)
    });

    const data = await res.json();
  });
});

window.addEventListener("DOMContentLoaded", () => {});
