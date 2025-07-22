const mongoose = require("mongoose");
const Veg = require("../models/veg");
const Fruit = require("../models/fruit");
const Dairy = require("../models/dairy");

const vegData = require("../data/vegData");
const fruitData = require("../data/fruitData");
const dairyData = require("../data/dairyData");

const allDairy = require("../models/allDairy");

const allDairyData = require("../data/allDairyData");

const { deleteMany } = require("../models/fruit");

          //  veg Data    ///

// async function seedDb() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");
//     console.log("✅ Connected to MongoDB");

//     await Veg.deleteMany({});
//     console.log("🧹 Old data removed");

//     for (let category in vegData) {
//       for (let item of vegData[category]) {
//         await Veg.create({ ...item, category });
//         console.log("🌱 Seeded:", category,item.name);
//       }
//     }

//     console.log("✅ All vegetables seeded.");
//   } catch (err) {
//     console.error("❌ Error seeding DB:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// seedDb();


                 //   Fruit Data    //

// async function seedDb(){
//   try{
  
//         await mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");
//         await Fruit.deleteMany({});
//         console.log("delete fruits");
  
//         for(let key in fruitData){
//            const fruit = fruitData[key];
//            await Fruit.create(fruit);
//            console.log("seeded:" ,fruit);
//         }

//   }catch (err){
//      console.error("❌ Error seeding DB:", err);
//   } finally {
//       await mongoose.disconnect();
//   }
// }

// seedDb();



          // Dairy Data  // 
      

// async function seedDb(){
//   try{
  
//         await mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");
//         await Dairy.deleteMany({});
//         console.log("delete fruits");
  
//         for(let key in dairyData){
//            const dairy = dairyData[key];
//            await Dairy.create(dairy);
//            console.log("seeded:" ,dairy);
//         }

//   }catch (err){
//      console.error("❌ Error seeding DB:", err);
//   } finally {
//       await mongoose.disconnect();
//   }
// }

// seedDb();


                       // allDairyData   //


async function seedDb(){
  try{
  
        await mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");
        await allDairy.deleteMany({});
        console.log("delete fruits");
  
        for(let key in allDairyData){
           const dairy = allDairyData[key];
           await allDairy.create(dairy);
           console.log("seeded:" ,dairy);
        }

  }catch (err){
     console.error("❌ Error seeding DB:", err);
  } finally {
      await mongoose.disconnect();
  }
}

seedDb();