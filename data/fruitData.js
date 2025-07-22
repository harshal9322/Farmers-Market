const { default: mongoose } = require("mongoose")

const fruitData = {
  banana:{
    img:"https://www.bbassets.com/media/uploads/p/l/10000025_32-fresho-banana-robusta.jpg",
    name: "banana",
    local:" ",
    quantity:{   
          quantity1:"200g",
          price1:40,
          quantity2:"500g",
          price2:60,
          quantity3:"700g",
          price3:80,
          quantity4: "1kg",
          price4:100
    },
  },
  mango:{
    img: "https://www.bbassets.com/media/uploads/p/l/10000304-3_3-fresho-mallika-mango.jpg",
    name: "Mango",
    local:"Malaika",
      quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
      },
  },
    orange:{
    img:"https://www.bbassets.com/media/uploads/p/l/10000384_12-fresho-orange-kinnow.jpg",
    name: "orange",
    local:"santra",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },

  jamun:{
    img:"https://www.bbassets.com/media/uploads/p/m/30000992_6-fresho-jamun.jpg?tr=w-154,q-80",
    name: "Jamun",
    local:"",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },

  Apple:{
    img:"https://www.bbassets.com/media/uploads/p/l/40202547-3_3-fresho-rockit-apple-from-new-zealand.jpg",
    name: "Apple",
    local:"",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },

  custerdApple:{
    img: "https://www.bbassets.com/media/uploads/p/l/10000349-3_3-fresho-custard-apple.jpg",
    name: "Custurd Apple",
    local:"Sitafal",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },
  grapes:{
    img:"https://www.bbassets.com/media/uploads/p/m/20001009_14-fresho-grapes-bangalore-blue.jpg?tr=w-154,q-80",
    name: "Grapes",
    local:"",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },  
  },

  DragonFruit:{
    img:"https://www.bbassets.com/media/uploads/p/l/40008982-3_3-fresho-dragon-fruit.jpg",
    name: "Dragon Fruit",
    local:"",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },

  Blueberry:{
    img:"https://www.bbassets.com/media/uploads/p/l/30009286_13-fresho-blueberry.jpg",
    name: "Blueberry",
    local:"",
    quantity:{   
      quantity1:"200g",
      price1:40,
      quantity2:"500g",
      price2:60,
      quantity3:"700g",
      price3:80,
      quantity4: "1kg",
      price4:100
    },
  },    
}

module.exports = fruitData;