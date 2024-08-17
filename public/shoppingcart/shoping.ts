interface CartItem {
  id: number;
  img: string;
  price: number;
  tit: string;
  name: string;
  category: string;
}

const shoppingcart: CartItem[] = [
  { 
    id: 1,
    img: "/shoppingcart/shiv.png",
    price: 20,
    tit: "Shiv Shakti",
    name: "universe",
    category: "Oil",
  },
  { 
    id: 2,
    img: "/shoppingcart/daisy.png",
    price: 30,
    tit: "White Daisy",
    name: "Shiv",
    category: "Watercolor",
  },
  { 
    id: 3,
    img: "/shoppingcart/gilhari.png",
    price: 40,
    tit: "Tired Squirrel",
    name: "Shiva",
    category: "Photograph",
  },
  { 
    id: 4,
    img: "/shoppingcart/lotus.png",
    price: 50,
    tit: "Lotus",
    name: "universe",
    category: "Pastels",
  },
  { 
    id: 5,
    img: "/shoppingcart/lovers.png",
    price: 60,
    tit: "Lovers",
    name: "Unknown",
    category: "Sculptures",
  },
  { 
    id: 6,
    img: "/shoppingcart/model.png",
    price: 70,
    tit: "Birthday Dress",
    name: "Shiva",
    category: "Fashion Design",
  },
  { 
    id: 7,
    img: "/shoppingcart/girl.png",
    price: 80,
    tit: "Women",
    name: "shiva",
    category: "Digital Art",
  },
  { 
    id: 8,
    img: "/shoppingcart/eye.png",
    price: 90,
    tit: "An Eye",
    name: "Max",
    category: "Digital Art",
  },
  // { 
  //   id: 9,
  //   img: "/shoppingcart/pri.png",
  //   price: "₹ 99k",
  //   tit: "Female",
  //   name: "shiva",
  //   category: "Portraits",
  // },
  { 
    id: 10,
    img: "/shoppingcart/dancer.png",
    price: 33,
    tit: "Dance",
    name: "Shiv",
    category: "Pastels",
  },
  { 
    id: 11,
    img: "/shoppingcart/nature.png",
    price: 44,
    tit: "Forest Lake LandScape",
    name: "Priyanka",
    category: "Oil",
  },
  { 
    id: 12,
    img: "/shoppingcart/flower.png",
    price: 55,
    tit: "Nature",
    name: "Universe",
    category: "Photograph",
  }
];

export default shoppingcart;
