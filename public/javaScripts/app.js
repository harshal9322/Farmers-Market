import { updateCounterDisplay } from "./updateCounterDisplay.js";
await updateCounterDisplay();

let cart = {};

function getPriceFromQty(item, selectedQtyKey) {
  switch (selectedQtyKey) {
    case item.quantity.quantity1:
      return item.quantity.price1;
    case item.quantity.quantity2:
      return item.quantity.price2;
    case item.quantity.quantity3:
      return item.quantity.price3;
    case item.quantity.quantity4:
      return item.quantity.price4;
    default:
      return 0;
  }
}
async function saveToCart(item, count, selectedQty, price) {
  if (count === 0) {
    delete cart[item.name];
  } else {
    cart[item.name] = {
      name: item.name,
      count: count,
      local: item.local,
      quantity: selectedQty,
      price: price,
      img: item.img,
    };
  }
  await updateCounterDisplay();
}

const selectElement = document.getElementById("vegSelect");
const wrapper = document.getElementById("wrapper");

async function sendToBackend(cartItem) {
  try {
    const res = await fetch("/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });

    const data = await res.json();
    await updateCounterDisplay();
    if (data) {
      const addMsg = document.querySelector(".added");
      addMsg.style.display = "flex";
      addMsg.innerText = data.message;
      setTimeout(() => {
        addMsg.style.display = "none";
        addMsg.innerText = "";
      }, 1500);
    }

    if (!res.ok) {
      console.error("Failed to add item to cart:", await res.text());
    }
  } catch (err) {
    console.error("Network error while adding to cart:", err);
  }
}

async function fetchVeg(category) {
  const res = await fetch("/api/veg");
  const data = await res.json();
  return data.filter((veg) => veg.category === category);
}

async function changeVegies(vegType) {
  wrapper.innerHTML = "";
  const vegList = await fetchVeg(vegType);

  if (vegList.length > 0) {
    vegList.forEach((veg) => {
      const card = document.createElement("div");

      card.classList.add("card");
      card.innerHTML = `
        <div class="card-img">
          <img src="${veg.img}" alt="${veg.name}">
        </div>
        <div class="info">
          <h5>${veg.name} (${veg.local})</h5>
          <select id="quantity">
            ${veg.quantity?.quantity1
          ? `<option value="${veg.quantity.quantity1}">${veg.quantity.quantity1}</option>`
          : ""
        }
            ${veg.quantity?.quantity2
          ? `<option value="${veg.quantity.quantity2}">${veg.quantity.quantity2}</option>`
          : ""
        }
            ${veg.quantity?.quantity3
          ? `<option value="${veg.quantity.quantity3}">${veg.quantity.quantity3}</option>`
          : ""
        }
            ${veg.quantity?.quantity4
          ? `<option value="${veg.quantity.quantity4}">${veg.quantity.quantity4}</option>`
          : ""
        }
          </select>
          <h5 class="price">₹${veg.price}</h5>
        </div>
        <div class="addBtn">
          <span class="label">Add</span>
        </div>
      `;

      wrapper.appendChild(card);
      const quantitySelect = card.querySelector("#quantity");
      const priceDisplay = card.querySelector(".price");
      if (quantitySelect && veg.quantity) {
        priceDisplay.innerText = `₹${veg.quantity.price1}`;

        quantitySelect.addEventListener("change", () => {
          const selected = quantitySelect.value;
          const price = getPriceFromQty(veg, selected);
          priceDisplay.innerText = `₹${price || 0}`;
        });
      }
    });

    addBTN(vegList);
  }
}

function addBTN(vegList) {
  const Add = document.querySelectorAll(".addBtn");

  Add.forEach((btn, index) => {
    const card = btn.closest(".card");

    const vegItem = vegList[index];
    let count = cart[vegItem.name]?.count || 0;

    const quantitySelect = card.querySelector("#quantity");

    btn.addEventListener("click", async () => {
      const selectedQty = quantitySelect.value;
      const price = getPriceFromQty(vegItem, selectedQty);
      count++;
      saveToCart(vegItem, count, selectedQty, price);
      await sendToBackend(cart[vegItem.name]);
    });
  });
}

selectElement.addEventListener("change", () => {
  const vegType = selectElement.value;
  setTimeout(() => changeVegies(vegType), 500);
});

changeVegies("default");

//         FRUITS             //

async function fetchAllFruits() {
  const res = await fetch("/api/fruit");
  const data = await res.json();
  return data;
}

async function displayFruits() {
  const fruitWrapper = document.getElementById("fruitWrapper");
  fruitWrapper.innerHTML = "";

  const fruits = await fetchAllFruits();

  fruits.forEach((fruit) => {
    const savedCount = cart[fruit.name]?.count || 0;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-img">
        <img src="${fruit.img}" alt="${fruit.name}">
      </div>
      <div class="info">
        <h5>${fruit.name} ${fruit.local}</h5>
        <select id="quantity">
          ${fruit.quantity?.quantity1
        ? `<option value="${fruit.quantity.quantity1}">${fruit.quantity.quantity1}</option>`
        : ""
      }
          ${fruit.quantity?.quantity2
        ? `<option value="${fruit.quantity.quantity2}">${fruit.quantity.quantity2}</option>`
        : ""
      }
          ${fruit.quantity?.quantity3
        ? `<option value="${fruit.quantity.quantity3}">${fruit.quantity.quantity3}</option>`
        : ""
      }
          ${fruit.quantity?.quantity4
        ? `<option value="${fruit.quantity.quantity4}">${fruit.quantity.quantity4}</option>`
        : ""
      }
        </select>
        <h5 class="price">₹${fruit.quantity.price}</h5>
      </div>
      <div class="addBtn">
        <span class="label">Add</span>
      </div>
    `;

    fruitWrapper.appendChild(card);

    const quantitySelect = card.querySelector("#quantity");
    const priceDisplay = card.querySelector(".price");

    if (quantitySelect && fruit.quantity) {
      priceDisplay.innerText = `₹${fruit.quantity.price1}`;

      quantitySelect.addEventListener("change", () => {
        const selected = quantitySelect.value;
        const price = getPriceFromQty(fruit, selected);
        priceDisplay.innerText = `₹${price || 0}`;
      });
    }
  });

  addFruitButtonLogic(fruits);
}

function addFruitButtonLogic(fruitList) {
  const Add = document.querySelectorAll("#fruitWrapper .addBtn");

  Add.forEach((btn, index) => {
    const card = btn.closest(".card");
    const fruitItem = fruitList[index];
    let count = cart[fruitItem.name]?.count || 0;

    const quantitySelect = card.querySelector("#quantity");

    btn.addEventListener("click", async () => {
      const selectedQty = quantitySelect.value;
      const price = getPriceFromQty(fruitItem, selectedQty);
      count++;
      saveToCart(fruitItem, count, selectedQty, price);
      await sendToBackend(cart[fruitItem.name]);
    });
  });
}

displayFruits();

//  Dairy Products  //

async function fetchAllDitems() {
  const res = await fetch("/api/dairy");
  const data = await res.json();
  return data;
}

async function displayDairyProducts() {
  const dairyWrapper = document.getElementById("dairyWrapper");
  dairyWrapper.innerHTML = "";

  const dItems = await fetchAllDitems();

  dItems.forEach((dItem) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-img">
        <img src="${dItem.img}" alt="${dItem.name}">
      </div>
      <div class="info">
        <h5>${dItem.name}</h5>
        <select id="quantity">
          ${dItem.quantity?.quantity1
        ? `<option value="${dItem.quantity.quantity1}">${dItem.quantity.quantity1}</option>`
        : ""
      }
          ${dItem.quantity?.quantity2
        ? `<option value="${dItem.quantity.quantity2}">${dItem.quantity.quantity2}</option>`
        : ""
      }
          ${dItem.quantity?.quantity3
        ? `<option value="${dItem.quantity.quantity3}">${dItem.quantity.quantity3}</option>`
        : ""
      }
          ${dItem.quantity?.quantity4
        ? `<option value="${dItem.quantity.quantity4}">${dItem.quantity.quantity4}</option>`
        : ""
      }
        </select>
        <h5 class="price"></h5>

      <div class="addBtn">
        <span class="label">Add</span>
      </div>
    `;

    dairyWrapper.appendChild(card);

    const quantitySelect = card.querySelector("#quantity");
    const priceDisplay = card.querySelector(".price");

    if (quantitySelect && dItem.quantity) {
      priceDisplay.innerText = `₹${dItem.quantity.price1}`;

      quantitySelect.addEventListener("change", () => {
        const selected = quantitySelect.value;
        const price = getPriceFromQty(dItem, selected);
        priceDisplay.innerText = `₹${price || 0}`;
      });
    }
  });

  addDitemsButton(dItems);
}

async function addDitemsButton(dairyProducts) {
  const Add = document.querySelectorAll("#dairyWrapper .addBtn");

  Add.forEach((btn, index) => {
    const card = btn.closest(".card");
    const dairyItem = dairyProducts[index];
    let count = cart[dairyItem.name]?.count || 0;

    const quantitySelect = card.querySelector("#quantity");
    btn.addEventListener("click", async () => {
      const selectedQty = quantitySelect.value;
      const price = getPriceFromQty(dairyItem, selectedQty);

      count++;
      saveToCart(dairyItem, count, selectedQty, price);
      console.log(cart[dairyItem.name]);
      await sendToBackend(cart[dairyItem.name]);
    });
  });
}

displayDairyProducts();

window.addEventListener("pageshow", async (event) => {
  await updateCounterDisplay();
});
