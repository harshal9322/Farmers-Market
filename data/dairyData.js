const { default: mongoose } = require("mongoose")

const dairyData = {
  milk: {
    img: "./images/dairyImg/milk.png",
    name: "milk",
    local: "doodh",
    quantity: {
      quantity1: "200ml",
      price1: 20,
      quantity2: "500ml",
      price2: 30,
      quantity3: "1L",
      price3: 50,
      quantity4: "2L",
      price4: 90
    }
  },

  paneer: {
    img: "./images/dairyImg/paneer.png",
    name: "paneer",
    local: "paneer",
    quantity: {
      quantity1: "100g",
      price1: 40,
      quantity2: "200g",
      price2: 70,
      quantity3: "500g",
      price3: 160,
      quantity4: "1kg",
      price4: 300
    }
  },

  cheese: {
    img: "./images/dairyImg/cheese.jpg",
    name: "cheese",
    local: "cheese",
    quantity: {
      quantity1: "100g",
      price1: 60,
      quantity2: "200g",
      price2: 110,
      quantity3: "500g",
      price3: 250,
      quantity4: "1kg",
      price4: 450
    }
  },

  curd: {
    img: "./images/dairyImg/curd.jpg",
    name: "curd",
    local: "dahi",
    quantity: {
      quantity1: "200g",
      price1: 20,
      quantity2: "400g",
      price2: 35,
      quantity3: "1kg",
      price3: 60,
      quantity4: "2kg",
      price4: 110
    }
  },

  ghee: {
    img: "./images/dairyImg/ghee.jpg",
    name: "ghee",
    local: "ghee",
    quantity: {
      quantity1: "100ml",
      price1: 60,
      quantity2: "250ml",
      price2: 130,
      quantity3: "500ml",
      price3: 240,
      quantity4: "1L",
      price4: 460
    }
  },

  butter: {
    img: "./images/dairyImg/butter.jpg",
    name: "butter",
    local: "makhan",
    quantity: {
      quantity1: "100g",
      price1: 55,
      quantity2: "250g",
      price2: 110,
      quantity3: "500g",
      price3: 210,
      quantity4: "1kg",
      price4: 400
    }
  },

  yogurt: {
    img: "./images/dairyImg/yogurt.jpg",
    name: "yogurt",
    local: "flavored dahi",
    quantity: {
      quantity1: "90g",
      price1: 40,
      quantity2: "180g",
      price2: 75,
      quantity3: "360g",
      price3: 140,
      quantity4: "500g",
      price4: 190
    }
  },
  lassi: {
    img: "./images/dairyImg/lassi.jpg",
    name: "lassi",
    local: "lassi",
    quantity: {
      quantity1: "200ml",
      price1: 15,
      quantity2: "500ml",
      price2: 30,
      quantity3: "1L",
      price3: 55,
      quantity4: "2L",
      price4: 100
    }
  },


  shrikhand: {
    img: "./images/dairyImg/shreekhand.jpg",
    name: "shrikhand",
    local: "shrikhand",
    quantity: {
      quantity1: "100g",
      price1: 35,
      quantity2: "250g",
      price2: 60,
      quantity3: "500g",
      price3: 100,
      quantity4: "1kg",
      price4: 180
    }
  },

  cream: {
    img: "./images/dairyImg/cream.jpg",
    name: "cream",
    local: "malai",
    quantity: {
      quantity1: "100ml",
      price1: 30,
      quantity2: "250ml",
      price2: 55,
      quantity3: "500ml",
      price3: 90,
      quantity4: "1L",
      price4: 170
    }
  },

  khoya: {
    img: "./images/dairyImg/khoya.jpg",
    name: "khoya",
    local: "mawa",
    quantity: {
      quantity1: "100g",
      price1: 50,
      quantity2: "200g",
      price2: 90,
      quantity3: "500g",
      price3: 210,
      quantity4: "1kg",
      price4: 400
    }
  },

  buttermilk: {
    img:"./images/dairyImg/buttermilk.jpg",
    name: "buttermilk",
    local: "chaas",
    quantity: {
      quantity1: "200ml",
      price1: 15,
      quantity2: "500ml",
      price2: 25,
      quantity3: "1L",
      price3: 40,
      quantity4: "2L",
      price4: 75
    }
  }
};

module.exports = dairyData;
