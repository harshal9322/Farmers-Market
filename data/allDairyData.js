const { default: mongoose } = require("mongoose");

const allDairyData = {
  milk: {
    img: "./images/dairyImg/milk.jpg",
    name: "milk",
    local: "",
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
    img: "./images/dairyImg/paneer.jpg",
    name: "paneer",
    local: "",
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
    name: "",
    local: "",
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

  milkPowder: {
    img: "./images/dairyImg/milkPowder.jpg",
    name: "Milk Powder",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 50,
      quantity2: "250g",
      price2: 120,
      quantity3: "500g",
      price3: 230,
      quantity4: "1kg",
      price4: 440
    }
  },

  flavoredMilk: {
    img: "./images/dairyImg/flavoredMilk.jpg",
    name: "flavored milk",
    local: "",
    quantity: {
      quantity1: "200ml",
      price1: 25,
      quantity2: "500ml",
      price2: 45,
      quantity3: "1L",
      price3: 80,
      quantity4: "2L",
      price4: 150
    }
  },

  condensedMilk: {
    img: "./images/dairyImg/condensedMilk.jpg",
    name: "condensed milk",
    local: "",
    quantity: {
      quantity1: "100ml",
      price1: 40,
      quantity2: "200ml",
      price2: 70,
      quantity3: "400ml",
      price3: 130,
      quantity4: "1L",
      price4: 240
    }
  },

  whey: {
    img: "./images/dairyImg/wheyProtein.jpg",
    name: "whey protein",
    local: "",
    quantity: {
      quantity1: "250g",
      price1: 500,
      quantity2: "500g",
      price2: 950,
      quantity3: "1kg",
      price3: 1800,
      quantity4: "2kg",
      price4: 3400
    }
  },

  khoaBarfi: {
    img: "./images/dairyImg/khoaBarfi.jpg",
    name: "khoa barfi",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 60,
      quantity2: "250g",
      price2: 140,
      quantity3: "500g",
      price3: 270,
      quantity4: "1kg",
      price4: 520
    }
  },

  desiButter: {
    img: "./images/dairyImg/desiButter.jpg",
    name: "desi butter",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 70,
      quantity2: "250g",
      price2: 150,
      quantity3: "500g",
      price3: 280,
      quantity4: "1kg",
      price4: 500
    }
  },

  chenna: {
    img: "./images/dairyImg/chenna.jpg",
    name: "chenna",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 40,
      quantity2: "250g",
      price2: 85,
      quantity3: "500g",
      price3: 160,
      quantity4: "1kg",
      price4: 300
    }
  },

  rasgulla: {
    img: "./images/dairyImg/rasgulla.jpg",
    name: "rasgulla",
    local: "",
    quantity: {
      quantity1: "250g",
      price1: 60,
      quantity2: "500g",
      price2: 110,
      quantity3: "1kg",
      price3: 200,
      quantity4: "2kg",
      price4: 380
    }
  },

  kalakand: {
    img: "./images/dairyImg/kalakand.jpg",
    name: "kalakand",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 50,
      quantity2: "250g",
      price2: 120,
      quantity3: "500g",
      price3: 230,
      quantity4: "1kg",
      price4: 440
    }
  },



 mishriMawa: {
    img: "./images/dairyImg/mishriMawa.jpg",
    name: "mishri mawa",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 60,
      quantity2: "250g",
      price2: 140,
      quantity3: "500g",
      price3: 270,
      quantity4: "1kg",
      price4: 500
    }
  },

  rabri: {
    img: "./images/dairyImg/rabri.jpg",
    name: "rabri",
    local: "",
    quantity: {
      quantity1: "100ml",
      price1: 45,
      quantity2: "250ml",
      price2: 100,
      quantity3: "500ml",
      price3: 180,
      quantity4: "1L",
      price4: 340
    }
  },

  basundi: {
    img: "./images/dairyImg/basundi.jpg",
    name: "basundi",
    local: "",
    quantity: {
      quantity1: "100ml",
      price1: 50,
      quantity2: "250ml",
      price2: 110,
      quantity3: "500ml",
      price3: 200,
      quantity4: "1L",
      price4: 380
    }
  },

  milkCake: {
    img: "./images/dairyImg/milkCake.jpg",
    name: "milk cake",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 55,
      quantity2: "250g",
      price2: 130,
      quantity3: "500g",
      price3: 250,
      quantity4: "1kg",
      price4: 480
    }
  },
  curd: {
    img: "./images/dairyImg/curd2.jpg",
    name: "curd",
    local: "",
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
    img: "./images/dairyImg/ghee2.jpg",
    name: "ghee",
    local: "",
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
    img: "./images/dairyImg/butter2.jpg",
    name: "butter",
    local: "",
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
    img: "./images/dairyImg/yogurt2.jpg",
    name: "yogurt",
    local: "",
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
    img: "./images/banners/banner4.jpg",
    name: "lassi",
    local: "",
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
    img: "./images/dairyImg/shreekhand2.jpg",
    name: "shrikhand",
    local: "",
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
    img: "./images/dairyImg/cream2.jpg",
    name: "cream",
    local: "",
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
  buttermilk: {
    img: "./images/dairyImg/buttermilk.jpg",
    name: "buttermilk",
    local: "",
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
  },

  matkaDahi: {
    img: "./images/dairyImg/matkaDahi.jpg",
    name: "matka dahi",
    local: "",
    quantity: {
      quantity1: "200ml",
      price1: 30,
      quantity2: "400ml",
      price2: 55,
      quantity3: "800ml",
      price3: 100,
      quantity4: "1.5L",
      price4: 180
    }
  },

  sourCream: {
    img: "./images/dairyImg/sourCream.jpg",
    name: "sour cream",
    local: "",
    quantity: {
      quantity1: "100ml",
      price1: 45,
      quantity2: "200ml",
      price2: 80,
      quantity3: "400ml",
      price3: 140,
      quantity4: "1L",
      price4: 260
    }
  },

  evaporatedMilk: {
    img: "./images/dairyImg/evaporatedMilk.jpg",
    name: "evaporated milk",
    local: "",
    quantity: {
      quantity1: "100ml",
      price1: 35,
      quantity2: "200ml",
      price2: 60,
      quantity3: "400ml",
      price3: 110,
      quantity4: "1L",
      price4: 200
    }
  },

  mascarpone: {
    img: "./images/dairyImg/mascarpone.jpg",
    name: "mascarpone",
    local: "dessert cream",
    quantity: {
      quantity1: "100g",
      price1: 100,
      quantity2: "250g",
      price2: 220,
      quantity3: "500g",
      price3: 400,
      quantity4: "1kg",
      price4: 760
    }
  },

  ricotta: {
    img: "./images/dairyImg/ricotta.jpg",
    name: "ricotta cheese",
    local: "",
    quantity: {
      quantity1: "100g",
      price1: 70,
      quantity2: "250g",
      price2: 160,
      quantity3: "500g",
      price3: 300,
      quantity4: "1kg",
      price4: 560
    }
  },
  
  malaiPaneer: {
    img: "./images/dairyImg/malaiPaneer.jpg",
    name: "malai paneer",
    local: "malai paneer",
    quantity: {
      quantity1: "100g",
      price1: 50,
      quantity2: "250g",
      price2: 110,
      quantity3: "500g",
      price3: 210,
      quantity4: "1kg",
      price4: 390
    }
  },

  freshCream: {
    img: "./images/dairyImg/freshCream.jpg",
    name: "fresh cream",
    local: "taaza malai",
    quantity: {
      quantity1: "100ml",
      price1: 40,
      quantity2: "250ml",
      price2: 90,
      quantity3: "500ml",
      price3: 160,
      quantity4: "1L",
      price4: 300
    }
  }
};
module.exports = allDairyData;