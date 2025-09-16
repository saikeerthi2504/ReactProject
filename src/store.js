import { configureStore, createSlice } from "@reduxjs/toolkit";

//////////////////////
// ⏬ Load from localStorage
//////////////////////
const loadState = (key, defaultValue) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
};

//////////////////////
// ⏫ Save to localStorage
//////////////////////
const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
};

//////////////////////
// 🥦 Products Slice (Static)
//////////////////////
const productsSlice = createSlice({
  name: "products",
  initialState: {
    Veg: [
      { id: 1, name: 'VegetableBiryani', price: 100, imageurl: "https://img.freepik.com/premium-photo/delicious-indian-vegetable-biryani-bowl-white-background-generative-ai_804788-10024.jpg?w=2000",
        description: "Aromatic basmati rice cooked with mixed vegetables and traditional Indian spices." },
      { id: 2, name: 'Jeera Rice (Cumin Rice)', price: 35, imageurl: "https://hamara.com.au/wp-content/uploads/2024/01/basmati-rice-2000.jpg",
         description: "Fragrant basmati rice tempered with cumin seeds with Flavoured rice." },
      { id: 3, name: 'LemonRice', price: 45, imageurl: "https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-indian-lemon-rice-png-image_11540901.png", 
        description: "Zesty lemon-flavored rice with peanuts and spices with good taste." },
      { id: 4, name: 'CurdRice', price: 40, imageurl: "https://media.istockphoto.com/id/642512760/photo/curd-rice-garnished-with-pomegranate.jpg?s=612x612&w=0&k=20&c=eeyAq_2fc7gvrfb-r7R4xgigaTYVbPcZn6oJktV4bnE=", 
        description: "Cooling curd rice garnished with pomegranate seeds. Too tasty.." },
      { id: 5, name: 'TomatoRice', price: 98, imageurl: "https://img.freepik.com/premium-photo/fried-rice-isolated-white-background_1166140-1984.jpg", 
        description: "Spicy tomato rice cooked with aromatic spices with too much butter taste." },
      { id: 6, name: 'PulaoRice', price: 95, imageurl: "https://tse1.mm.bing.net/th/id/OIP.PRvXE7Dm4RP4iLlxVVmmgwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
         description: "Flavorful rice dish cooked with mixed vegetables and spices." },
      { id: 7, name: 'SambarRice', price: 55, imageurl: "https://img.freepik.com/premium-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75202.jpg?w=900", 
        description: "Hearty sambar rice served with a side of tangy sambar." },
      { id: 8, name: 'RiceWithVegFry', price: 45, imageurl: "https://tse4.mm.bing.net/th/id/OIP.m78ORno6DHwS7UgsojIuIgAAAA?r=0&w=400&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",
         description: "Steamed rice served with a side of crispy vegetable fry." },
      { id: 9, name: 'VegThali', price: 75, imageurl: "https://tse2.mm.bing.net/th/id/OIP.Cm0bWRA2YgMLEoj72kRApAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
         description: "A complete vegetarian meal served on a platter with good taste." },
      { id: 10, name: 'VegSalad', price: 55, imageurl: "https://tse2.mm.bing.net/th/id/OIP.2y-gxk-lQRU10eTl2c4ZpAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
        description: "Fresh garden salad with a mix of seasonal vegetables." },
      { id: 11, name: 'PaneerButterMasala', price: 120, imageurl: "https://img.freepik.com/premium-photo/paneer-butter-masala-white-plate-white-background_864588-11304.jpg?w=2000",
         description: "Creamy paneer butter masala served with naan with too much good style." },
      { id: 12, name: 'CholeBhature', price: 70, imageurl: "https://thumbs.dreamstime.com/b/chole-bhature-indian-illustration-isolated-white-background-generative-ai-chole-bhature-indian-illustration-isolated-white-363470724.jpg",
         description: "Spicy chickpeas served with deep-fried bread with better taste." },
      { id: 13, name: 'AlooParatha', price: 50, imageurl: "https://tse1.mm.bing.net/th/id/OIP.L8vUIo3I9-iHcmdFosiWSgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
        description: "Stuffed potato paratha served with yogurt and pickles." },
      { id: 14, name: 'MasalaDosa', price: 100, imageurl: "https://img.freepik.com/premium-photo/masala-dosa-served-with-sambhar-coconut-chutney-isolated-white-background-top_247037-450.jpg?w=2000", 
        description: "Crispy dosa filled with spiced potatoes, served with chutney." },
      { id: 15, name: 'IdliSambar', price: 44, imageurl: "https://img.freepik.com/premium-photo/south-indian-breakfast-idly-sambar-plate-white-background_1276612-14762.jpg", 
        description: "Steamed rice cakes served with sambar and chutney." },
      { id: 16, name: 'VegFriedRice', price: 80, imageurl: "https://b.zmtcdn.com/data/pictures/chains/0/2901130/6794cf019d9062e01782fd8920c4726b.jpg",
         description: "Stir-fried rice with mixed vegetables and soy sauce." },
      { id: 17, name: 'VegNoodles', price : 70, imageurl: "https://tse3.mm.bing.net/th/id/OIP.btaNgFiLLhfDaQNssIOyrgHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3",
         description: "Noodles stir-fried with vegetables and soy sauce with too tasty species." },
      { id: 18, name: 'PavBhaji', price: 60, imageurl: "https://img.freepik.com/premium-photo/delicious-pav-bhaji-isolated-white-background_787273-21305.jpg?w=2000",
         description: "Spicy mixed vegetable curry served with buttered bread rolls." },
      
    ],
    Nonveg: [
      { id: 21, name: 'ChickenBiryani', price: 120, imageurl: "https://thaka.bing.com/th/id/OIP.Fd2ZaSBMvIuI2PPgk3h4ugHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Aromatic basmati rice cooked with tender chicken and traditional Indian spices."
       },
      { id: 22, name: 'FishFry', price: 70, imageurl: "https://thaka.bing.com/th/id/OIP.z7WrQkJqeht_NFUaFfOBPgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description:"Crispy fried fish marinated with spices and herbs with better crunchy taste."
       },
      { id: 23, name: 'PrawnFry', price: 125, imageurl: "https://thaka.bing.com/th/id/OIP.7VrBnOOO1OxYaOW2P4bCGQHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Crispy fried prawns marinated with spices and herbs with good crunchy taste."
       },
      { id: 24, name: 'ChickenTikka', price: 100, imageurl: "https://thaka.bing.com/th/id/OIP.yLJUc7XV_6G0WbZzm1Xq8wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Tender chicken pieces marinated in yogurt and spices, grilled to perfection."
       },
      { id: 25, name: 'EggMasala', price: 44, imageurl: "https://thaka.bing.com/th/id/OIP.dM3M1f2rIdgqZ8OFWWyEUAHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Boiled eggs cooked in a spicy tomato-based gravy with traditional Indian spices."
       },
      { id: 26, name: 'ChickenFry', price: 80, imageurl: "https://thaka.bing.com/th/id/OIP.nwWZPJVzwFK_shqYcEabiwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,
        description: "Crispy fried chicken pieces marinated with spices and herbs with good crunchy taste."
      },
      { id: 27, name: 'PrawnCurry', price: 70, imageurl: "https://thaka.bing.com/th/id/OIP.S0ahxuqQlEg0Yu6cT56xFgHaHZ?w=180&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Prawns cooked in a flavorful curry with coconut milk and spices."
       },
      { id: 28, name: 'FishCurry', price: 60, imageurl: "https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-arranged-white-bowl_527904-3631.jpg?w=1380",
        description: "Fish cooked in a spicy and tangy curry with a blend of aromatic spices."
       },
      { id: 29, name: 'PrawnBiryani', price: 90, imageurl: "https://allwaysdelicious.com/wp-content/uploads/2022/07/ip-shrimp-biryani-6.jpg",
        description: "Fragrant basmati rice cooked with prawns and a blend of spices."
       },
      { id: 30, name: 'MuttonBiryani', price: 150, imageurl: "https://img.freepik.com/premium-photo/delicious-mutton-biryani-isolated-white-background_787273-21913.jpg",
        description: "Aromatic basmati rice layered with tender mutton pieces and spices."
       },
      { id: 31, name: 'ChickenCurry', price: 110, imageurl: "https://img.freepik.com/premium-photo/chicken-curry-white-background-isolated-generative-ai_21085-33772.jpg?w=2000",
        description: "Succulent chicken pieces cooked in a rich and spicy gravy."
      },
      { id: 32, name: 'MuttonCurry', price: 130, imageurl: "https://tse1.mm.bing.net/th/id/OIP.z-aQlPR7MwG8mvhbv5OccgHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Tender mutton pieces cooked in a spicy and flavorful gravy."
      },
      { id: 33, name: 'EggOmlet', price: 40 , imageurl: "https://th.bing.com/th/id/OIP.wZP0U16WjdgbpgSlQ_08VQHaFk?w=264&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Fluffy omelet made with fresh eggs and spices."
      },
      { id: 34, name: 'Chicken65', price: 90, imageurl: "https://www.pngitem.com/pimgs/m/504-5048045_chicken-65-images-hd-hd-png-download.png",
        description: "Spicy&crispy chicken pieces,a popular Indian food."
      },
      { id: 35, name: 'MuttonFry', price: 140, imageurl: "https://st.depositphotos.com/1005682/2659/i/450/depositphotos_26599245-stock-photo-mutton-rogan-josh-mutton-curry.jpg",
        description: "Tender mutton pieces fried with spices and herbs."
      },
      { id: 36, name: 'FishBiryani', price: 115, imageurl: "https://tabbouleh.sg/wp-content/uploads/2021/05/Tabbouleh-Lebanese-Restaurant-42.png",
        description: "Fragrant basmati rice cooked with fish and aromatic spices."
      },

    ],
    Chacolates: [
      { id: 41, name: 'DairyMilk', price: 120, imageurl: "https://m.media-amazon.com/images/I/71WeEVI1gZL.jpg" ,
        description: "Rich and creamy milk chocolate bar with a smooth texture and sweet taste."
      },
      { id: 42, name: 'KitKat', price: 70, imageurl: "https://images-americanas.b2w.io/produtos/4052468254/imagens/kit-3x-41-5g-chocolate-nestle-kit-kat/4052468342_1_xlarge.jpg",
        description: "Crispy wafer fingers coated in smooth milk chocolate, perfect for sharing."
      },
      { id: 43, name: 'Snickers', price: 50, imageurl: "https://st4.depositphotos.com/3559981/30867/i/450/depositphotos_308670356-stock-photo-group-of-snickers-chocolate-bar.jpg",
        description: "Chocolate bar with nougat, caramel, and peanuts with good taste..."
      },
      { id: 44, name: 'Munch', price: 100, imageurl: "https://tse2.mm.bing.net/th/id/OIP.sb2X-0g1qc03POsK738aIgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Crispy and crunchy chocolate bar with a unique texture."
      },
      { id: 45, name: 'DarkChacolate', price: 44, imageurl: "https://www.mashed.com/img/gallery/some-dark-chocolates-might-contain-two-heavy-metals/l-intro-1671464828.jpg",
        description: "Rich and intense dark chocolate with a deep flavor with hints of bitterness."
      },
      { id: 46, name: 'MilkyBar', price: 80, imageurl: "https://tse2.mm.bing.net/th/id/OIP.nG18SyCwR3A-Vjt_NBziQQHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Creamy white chocolate bar with a smooth texture milk texture taste."
      },
      { id: 48, name: 'Nestle', price: 80, imageurl: "https://cf.shopee.com.br/file/dfa7c74f12d3ceef1e0230b19f1a353e",
        description: "Delicious milk chocolate with a rich flavor."
      },
      { id: 49, name: 'Fuse', price: 80, imageurl: "https://tse2.mm.bing.net/th/id/OIP.71lIwpdqZiA8bhgSXVlb-QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Chocolate bar with a unique blend of flavors."
      },
      { id: 50, name: 'Perk', price: 80, imageurl: "https://tse1.mm.bing.net/th/id/OIP.A3v3jxjuzE8HdPdgzeHRDAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Crispy wafer coated in chocolate."
      },
      { id: 51, name: 'Bournville', price: 80, imageurl: "https://assets.iceland.co.uk/i/iceland/cadbury_bournville_old_jamaica_dark_chocolate_bar_100g_82272_T5.jpg?$pdpzoom$",
        description: "Dark chocolate with a rich, smooth taste."
      },
      { id: 52, name: '5Star', price: 80, imageurl: "https://m.media-amazon.com/images/I/51AsTzERRQL._SL1045_.jpg",
        description: "Chocolate bar with a chewy caramel center."
      },
      { id: 53, name: 'Cadbury', price: 80, imageurl: "https://media.istockphoto.com/id/458630257/photo/cadbury-dairy-milk-chocolate-bars-on-a-white-background.jpg?s=612x612&w=0&k=20&c=yXPcE7-uG_kvsGbX88h7BxxgGEucE0GxNZbjyyZ21BM=",
        description: "Creamy milk chocolate bar."
      },
      { id: 54, name: 'Chocobakes', price: 80, imageurl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3338789.jpg",
        description: "Chocolate-filled baked treats."
      },
      { id: 55, name: 'Chocopie', price: 80, imageurl: "https://tse4.mm.bing.net/th/id/OIP.1dyNFpmocC2HXqmS3ddhRAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Chocolate-covered cake with marshmallow filling."
      },
      { id: 56, name: 'Chocos', price: 80, imageurl: "https://tse4.mm.bing.net/th/id/OIP.1qEg5lZcY9jIJ58Xffxs-AHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Chocolate-flavored cereal."
      },
      { id: 57, name: 'BubbleDairy', price: 80, imageurl: "https://tse3.mm.bing.net/th/id/OIP.8wE5vtew6_lYQU1Rh42OLgHaHa?r=0&pid=ImgDet&w=199&h=199&c=7&dpr=1.3&o=7&rm=3",
        description: "Chocolate bar with a bubbly texture."
      }
    ],
    Drinks: [
      { id: 61, name: 'Coke', price: 40, imageurl: "https://www.bing.com/th/id/OIP.u21nXNpKjTL8VAH_Wl4o-wHaHa?w=185&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3" ,
        description:"Classic cola with a bold, refreshing taste."
      },
      { id: 62, name: 'Pepsi', price: 35, imageurl: "https://www.bing.com/th/id/OIP.eKx2OH19jC-haPZne-qBuAHaJQ?w=162&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
        description:"Smooth and sweet cola with a crisp finish."
       },
      { id: 63, name: 'Sprite', price: 30, imageurl: "https://www.bing.com/th/id/OIP.dkdw-IhBOMn9kkkyrnzfoAHaLH?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3" ,
       description:"Lemon-lime soda that’s light and zesty."
      },
      { id: 64, name: 'Fanta', price: 30, imageurl: "https://www.bing.com/th/id/OIP.MyViFWs3NKUk4RyYRsfOZwHaLM?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3" ,
        description:"Fruity orange fizz with a playful twist."
      },
      { id: 65, name: 'MountainDew', price: 35, imageurl: "https://www.bing.com/th/id/OIP.IZM7wjhm3dYgI8TqOSwvlwHaHZ?w=209&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
        description:" Citrus-charged soda with a kick of energy."
       },
      { id: 66, name: '7Up', price: 30, imageurl: "https://www.bing.com/th/id/OIP.OMu9ynLNZD61-_Y-vuG8nwHaLH?w=160&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
        description:"Crisp lemon-lime drink with a clean finish."
       },
      { id: 67, name: 'Mirinda', price: 30, imageurl: "https://www.bing.com/th/id/OIP.YWl4Oq3b0-O16_L5MAWQOwHaL9?w=164&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
        description:" Bright and bubbly orange-flavored soda."
       },
      { id: 68, name: 'ThumsUp', price: 40, imageurl: "https://www.pngitem.com/pimgs/m/430-4300064_thums-up-thums-up-soft-drink-300-ml.png",
        description:" Strong cola flavor with a spicy edge."
       },
      { id: 69, name: 'Limca', price: 35, imageurl: "https://5.imimg.com/data5/SELLER/Default/2022/6/NC/GR/NO/15411489/1-21-1000x1000.png" ,
        description:" Tangy lemon drink with a fizzy punch."
      },
      { id: 70, name: 'AppyFiz', price: 50, imageurl: "https://m.media-amazon.com/images/I/511i0X9QKYL._SL1200_.jpg",
        description:" Sparkling apple juice with a crisp bite"
       },
      { id: 71, name: 'Maaza', price: 45, imageurl: "https://hallans.co.uk/wp-content/uploads/2022/08/MaazaMangoJuiceDrinkF.jpg",
        description:" Rich mango drink that’s smooth and sweet."
       },
      { id: 72, name: 'Slice', price: 45, imageurl: "https://png.pngtree.com/png-vector/20240421/ourlarge/pngtree-a-glass-of-mango-juice-splash-with-slice-chunks-png-image_12302693.png" ,
        description:" Juicy mango beverage with a tropical vibe."
      },
      { id: 73, name: 'CocoCola', price: 40, imageurl: "https://th.bing.com/th/id/OIP.M2cL5-QaSVtaQmQqV7IjHwHaLG?w=125&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description:" Iconic cola with a timeless taste."
       },
      { id: 74, name: 'DietCoke', price: 45, imageurl: "https://i.pinimg.com/originals/69/09/e7/6909e7cff7b15abfb8cf4432331a0937.jpg",
        description:"Sugar-free cola with a light, crisp flavor."
       },
      { id: 75, name: 'DietPepsi', price: 45, imageurl: "https://tse2.mm.bing.net/th/id/OIP.A-mnWrtP1KLRlj2MU-NgFwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" ,
        description:" Low-calorie cola with a smooth finish."
      },
      { id: 76, name: 'RedBull', price: 100, imageurl: "https://cdn1.productnation.co/stg/sites/4/6436718926faa.jpg",
        description:" High-energy drink to boost your stamina."
       },
      { id: 77, name: 'Monster', price: 90, imageurl: "https://media.istockphoto.com/photos/can-of-monster-energy-drink-isolated-on-white-background-picture-id592003544?k=6&m=592003544&s=170667a&w=0&h=iDhHLnAVtlhHej5LOnCw5qGUJjyBu0L1KJE12GzWDOk=",
        description:" Power-packed energy drink with bold flavor."
       },
      { id: 78, name: 'Tropicana', price: 80, imageurl: "https://c8.alamy.com/comp/KR1AJB/london-uk-december-15-2017-family-pack-of-fresh-tropicana-orange-juice-KR1AJB.jpg",
        description:" Pure orange juice with a fresh squeeze."
       },
      { id: 79, name: 'MuskmelonJuice', price: 85, imageurl: "https://st4.depositphotos.com/10614052/21226/i/450/depositphotos_212269364-stock-photo-glass-fresh-melon-smoothie-white.jpg",
        description:"Sweet and mellow juice from ripe melons."
       },
      { id: 80, name: 'PaperBoat', price: 90, imageurl: "https://d2j6dbq0eux0bg.cloudfront.net/images/16970356/4181193326.jpg",
        description:"Traditional Indian flavors in a nostalgic sip."
      },
      { id: 81, name: 'WatermelonJuice', price: 50, imageurl: "https://img.freepik.com/premium-photo/glass-watermelon-juice-isolated-white-background_986042-361.jpg?w=2000",
        description:" Cool and hydrating juice with summer vibes."
       },
      { id: 82, name: 'PomogranateJuice', price: 70, imageurl: "https://img.freepik.com/premium-photo/pomegranate-juice-with-isolated-white-background_741910-12769.jpg" ,
        description:" Rich, antioxidant-packed pomegranate juice."
      },
      { id: 83, name: 'GrapeJuice', price: 40, imageurl: "https://img.freepik.com/premium-photo/photography-grape-juice-white-background_1288657-68360.jpg" ,
        description:" Sweet and tangy juice from fresh grapes."
      },
      { id: 84, name: 'OrangeJuice', price: 60, imageurl: "https://img.freepik.com/premium-photo/orange-juice-isolated-white-background-iso-100-f-35-white-background-hd-photo-isolated-white-b_873925-849785.jpg?w=2000" ,
        description:"Zesty orange juice full of vitamin C."
      },
    ]
  },
  reducers: {}
});


// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: loadState("cart", []),
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
      saveState("cart", state);
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(i => i.id !== action.payload);
      saveState("cart", updatedCart);
      return updatedCart;
    },
    incrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      saveState("cart", state);
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.splice(state.indexOf(item), 1);
      }
      saveState("cart", state);
    },
    clearCart: () => {
      saveState("cart", []);
      return [];
    }
  }
});

// Orders slice
const ordersSlice = createSlice({
  name: "orders",
  initialState: loadState("orders", []),
  reducers: {
    addOrder: (state, action) => {
      const updatedOrders = [...state, action.payload];
      saveState("orders", updatedOrders);
      return updatedOrders;
    },
    clearOrders: () => {
      saveState("orders", []);
      return [];
    }
  }
});

// Export actions
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export const { addOrder, clearOrders } = ordersSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer
  }
});

export default store;