const allVegData = [
  {
    name: "Tomato",
    localName: "टमाटर",
    image: "images/vegetables/tomato.png",
    quantity: {
      quantity1: "250g",
      price1: 15,
      quantity2: "500g",
      price2: 30,
      quantity3: "1kg",
      price3: 60,
      quantity4: "2kg",
      price4: 115
    }
  },
  {
    name: "Potato",
    localName: "बटाटा",
    image: "images/vegetables/potato.png",
    quantity: {
      quantity1: "250g",
      price1: 10,
      quantity2: "500g",
      price2: 20,
      quantity3: "1kg",
      price3: 38,
      quantity4: "2kg",
      price4: 75
    }
  },
  {
    name: "Onion",
    localName: "कांदा",
    image: "images/vegetables/onion.png",
    quantity: {
      quantity1: "250g",
      price1: 12,
      quantity2: "500g",
      price2: 24,
      quantity3: "1kg",
      price3: 45,
      quantity4: "2kg",
      price4: 85
    }
  },
  {
    name: "Beetroot",
    localName: "बीटरूट",
    image: "images/vegetables/beetroot.png",
    quantity: {
      quantity1: "250g",
      price1: 20,
      quantity2: "500g",
      price2: 35,
      quantity3: "1kg",
      price3: 65,
      quantity4: "2kg",
      price4: 120
    }
  },
  {
    name: "Capsicum",
    localName: "शिमला मिर्च",
    image: "images/vegetables/capsicum.png",
    quantity: {
      quantity1: "250g",
      price1: 18,
      quantity2: "500g",
      price2: 36,
      quantity3: "1kg",
      price3: 70,
      quantity4: "2kg",
      price4: 135
    }
  },
  {
    name: "Cabbage",
    localName: "कोबी",
    image: "images/vegetables/cabbage.png",
    quantity: {
      quantity1: "250g",
      price1: 8,
      quantity2: "500g",
      price2: 15,
      quantity3: "1kg",
      price3: 28,
      quantity4: "2kg",
      price4: 55
    }
  },
  {
    name: "Carrot",
    localName: "गाजर",
    image: "images/vegetables/carrot.png",
    quantity: {
      quantity1: "250g",
      price1: 14,
      quantity2: "500g",
      price2: 28,
      quantity3: "1kg",
      price3: 52,
      quantity4: "2kg",
      price4: 100
    }
  },
  {
    name: "Cauliflower",
    localName: "फूलकोबी",
    image: "images/vegetables/cauliflower.png",
    quantity: {
      quantity1: "250g",
      price1: 16,
      quantity2: "500g",
      price2: 32,
      quantity3: "1kg",
      price3: 60,
      quantity4: "2kg",
      price4: 115
    }
  },
  {
    name: "Spinach",
    localName: "पालक",
    image: "images/vegetables/spinach.png",
    quantity: {
      quantity1: "250g",
      price1: 12,
      quantity2: "500g",
      price2: 22,
      quantity3: "1kg",
      price3: 40,
      quantity4: "2kg",
      price4: 78
    }
  },
  {
    name: "Brinjal",
    localName: "वांगे",
    image: "images/vegetables/brinjal.png",
    quantity: {
      quantity1: "250g",
      price1: 13,
      quantity2: "500g",
      price2: 25,
      quantity3: "1kg",
      price3: 48,
      quantity4: "2kg",
      price4: 90
    }
  },
  {
    name: "Cucumber",
    localName: "काकडी",
    image: "images/vegetables/cucumber.png",
    quantity: {
      quantity1: "250g",
      price1: 10,
      quantity2: "500g",
      price2: 18,
      quantity3: "1kg",
      price3: 35,
      quantity4: "2kg",
      price4: 65
    }
  },
  {
    name: "Bottle Gourd",
    localName: "दूधी भोपळा",
    image: "images/vegetables/bottle_gourd.png",
    quantity: {
      quantity1: "250g",
      price1: 9,
      quantity2: "500g",
      price2: 18,
      quantity3: "1kg",
      price3: 32,
      quantity4: "2kg",
      price4: 60
    }
  },
  {
    name: "Bitter Gourd",
    localName: "कारले",
    image: "images/vegetables/bitter_gourd.png",
    quantity: {
      quantity1: "250g",
      price1: 14,
      quantity2: "500g",
      price2: 27,
      quantity3: "1kg",
      price3: 50,
      quantity4: "2kg",
      price4: 95
    }
  },
  {
    name: "Lady Finger",
    localName: "भेंडी",
    image: "images/vegetables/lady_finger.png",
    quantity: {
      quantity1: "250g",
      price1: 13,
      quantity2: "500g",
      price2: 26,
      quantity3: "1kg",
      price3: 50,
      quantity4: "2kg",
      price4: 95
    }
  },
  {
    name: "Green Beans",
    localName: "हिरवे शेंग",
    image: "images/vegetables/green_beans.png",
    quantity: {
      quantity1: "250g",
      price1: 15,
      quantity2: "500g",
      price2: 30,
      quantity3: "1kg",
      price3: 58,
      quantity4: "2kg",
      price4: 110
    }
  },
  {
    name: "Radish",
    localName: "मूळा",
    image: "images/vegetables/radish.png",
    quantity: {
      quantity1: "250g",
      price1: 10,
      quantity2: "500g",
      price2: 19,
      quantity3: "1kg",
      price3: 36,
      quantity4: "2kg",
      price4: 70
    }
  },
  {
    name: "Pumpkin",
    localName: "भोपळा",
    image: "images/vegetables/pumpkin.png",
    quantity: {
      quantity1: "250g",
      price1: 9,
      quantity2: "500g",
      price2: 17,
      quantity3: "1kg",
      price3: 33,
      quantity4: "2kg",
      price4: 62
    }
  },
  {
    name: "Turnip",
    localName: "शलगम",
    image: "images/vegetables/turnip.png",
    quantity: {
      quantity1: "250g",
      price1: 11,
      quantity2: "500g",
      price2: 22,
      quantity3: "1kg",
      price3: 42,
      quantity4: "2kg",
      price4: 80
    }
  },
  {
    name: "Drumstick",
    localName: "शेवगा",
    image: "images/vegetables/drumstick.png",
    quantity: {
      quantity1: "250g",
      price1: 16,
      quantity2: "500g",
      price2: 32,
      quantity3: "1kg",
      price3: 60,
      quantity4: "2kg",
      price4: 110
    }
  },
  {
    name: "Sweet Corn",
    localName: "मका",
    image: "images/vegetables/sweet_corn.png",
    quantity: {
      quantity1: "250g",
      price1: 14,
      quantity2: "500g",
      price2: 27,
      quantity3: "1kg",
      price3: 50,
      quantity4: "2kg",
      price4: 95
    }
  },
  {
    name: "Green Peas",
    localName: "हिरवे वाटाणे",
    image: "images/vegetables/green_peas.png",
    quantity: {
      quantity1: "250g",
      price1: 20,
      quantity2: "500g",
      price2: 38,
      quantity3: "1kg",
      price3: 72,
      quantity4: "2kg",
      price4: 140
    }
  },
  {
    name: "Spring Onion",
    localName: "पाती कांदा",
    image: "images/vegetables/spring_onion.png",
    quantity: {
      quantity1: "250g",
      price1: 12,
      quantity2: "500g",
      price2: 24,
      quantity3: "1kg",
      price3: 45,
      quantity4: "2kg",
      price4: 88
    }
  },
  {
    name: "Fenugreek Leaves",
    localName: "मेथी",
    image: "images/vegetables/fenugreek.png",
    quantity: {
      quantity1: "250g",
      price1: 14,
      quantity2: "500g",
      price2: 28,
      quantity3: "1kg",
      price3: 52,
      quantity4: "2kg",
      price4: 100
    }
  },
  {
    name: "Red Cabbage",
    localName: "लाल कोबी",
    image: "images/vegetables/red_cabbage.png",
    quantity: {
      quantity1: "250g",
      price1: 18,
      quantity2: "500g",
      price2: 36,
      quantity3: "1kg",
      price3: 70,
      quantity4: "2kg",
      price4: 135
    }
  },
  {
    name: "Zucchini",
    localName: "झुकीनी",
    image: "images/vegetables/zucchini.png",
    quantity: {
      quantity1: "250g",
      price1: 22,
      quantity2: "500g",
      price2: 44,
      quantity3: "1kg",
      price3: 85,
      quantity4: "2kg",
      price4: 165
    }
  },
  {
    name: "Raw Banana",
    localName: "कच्चा केळा",
    image: "images/vegetables/raw_banana.png",
    quantity: {
      quantity1: "250g",
      price1: 12,
      quantity2: "500g",
      price2: 24,
      quantity3: "1kg",
      price3: 46,
      quantity4: "2kg",
      price4: 90
    }
  }
];


module.exports = allVegData;