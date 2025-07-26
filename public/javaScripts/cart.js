import { updateCounterDisplay } from "/javaScripts/updateCounterDisplay.js";

updateCounterDisplay();

function checkEmptyCard() {
  const card = document.querySelectorAll(".cart-card");
  if (card.length === 0) {
    document.querySelector("#cart-section").innerHTML = `<h2>Your Cart Is Empty</h2>`;
    document.querySelector(".counter").style.display = "none";
    document.querySelector(".cart-counter").style.display = "none";
    document.querySelector("#cart").style.display = "none";
  }
}

function removeMsg(data) {
  const remvMsg = document.querySelector(".removeMsg");
  remvMsg.style.display = "flex";
  remvMsg.innerText = data;
  setTimeout(() => {
    remvMsg.style.display = "none";
    remvMsg.innerText = "";
  }, 1900);
}

function deleteItem(button) {
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
      removeMsg(result.message);
      await updateCounterDisplay(); 
      checkEmptyCard();
    }
  });
}

//----------------------------------------------------------------------------//

const plus = document.querySelectorAll(".plus");
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".remove-btn").forEach((button) => {
    deleteItem(button);
  });

  plus.forEach((add) => {
    add.addEventListener("click", async () => {
      const card = add.closest(".cart-card");

      const name = card.querySelector(".name")?.innerText;
      const quantity = card.querySelector(".quantity")?.innerText;
      const count = 1;
      const price =
        parseInt(card.querySelector(".price")?.innerText.replace("₹", "")) || 0;
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

      await updateCounterDisplay();
      const msg = document.querySelector(".added");
      if (data.message) {
        msg.innerText = data.message;
        msg.style.display = "flex";
        setTimeout(() => {
          msg.innerText = "";
          msg.style.display = "none";
        }, 1500);
      }
      const itemCount = card.querySelector(".count");
      if (data.count) {
        itemCount.innerText = data.count;
      }
    });
  });

  const minus = document.querySelectorAll(".minus");

  minus.forEach((remove) => {
    remove.addEventListener("click", async () => {
      const card = remove.closest(".cart-card");

      const name = card.querySelector(".name").innerText;
      const quantity = card.querySelector(".quantity").innerText;
      const price = parseInt(
        card.querySelector(".price").innerText.replace("₹", "")
      );
      const img = card.querySelector("img").src;
      const local = name;
      const count = 1;

      const cartItem = { name, quantity, price, count, img, local };

      const res = await fetch("/remove-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      const data = await res.json();

      await updateCounterDisplay();

      if (data.message) {
        removeMsg(data.message);
      }

      const itemCount = card.querySelector(".count");
      if (data.count !== undefined) {
        if (data.count >= 1) {
          itemCount.innerText = data.count;
        } else {
          card.remove();
        }
      }
    });
  });
});
