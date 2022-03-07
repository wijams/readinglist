let mock = [{
    id: 1,
    name: "Throckmorton",
    length: "200 p.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg'
  },
  {
    id: 2,
    name: "Dogs in France",
    length: "100 p.",
    image: "https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg"
  },
  {
    id: 3,
    name: "On Fish and Other Crises",
    length: "300 p.",
    image: 'https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg'
  },
  {
    id: 4,
    name: "Mountains",
    length: "1000 p.",
    image: 'https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg'
  },
  {
    id: 5,
    name: "City Sidewalks",
    length: "400 p.",
    image: 'https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg'

  },
  {
    id: 6,
    name: "Rubbed Sage",
    length: "255 p.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg'
  },
  {
    id: 7,
    name: "Rock and Role",
    length: "233 p.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg'
  },
  {
    id: 8,
    name: "Cucumber",
    price: "$3.02",
    country: "Canada",
    image: 'cucumber.jpg'
  },
  {
    id: 9,
    name: "Fava Beans",
    price: "$4.76",
    country: "Brazil",
    image: 'fava-beans.jpg'

  },
  {
    id: 10,
    name: "Coconut",
    price: "$2.50",
    country: "Brazil",
    image: 'coconut.jpg'
  },
  {
    id: 11,
    name: "Kettle Potato Chips",
    price: "$6.70",
    country: "United States",
    image: "potato-chips.jpg"
  },
  {
    id: 12,
    name: "Flour - Rye",
    price: "$1.14",
    country: "Canada",
    image: "rye-flour.jpg"
  },
  {
    id: 13,
    name: "Feta Chees",
    price: "$6.92",
    country: "Brazil",
    image: "feta-cheese.jpg"
  },
  {
    id: 14,
    name: "Cheddar Cheese",
    price: "$5.36",
    country: "Mexico",
    image: "cheddar-cheese.jpg"
  },
  {
    id: 15,
    name: "Capers",
    price: "$4.18",
    country: "United States",
    image: "capers.jpg"
  },
  {
    id: 16,
    name: "Baguette",
    price: "$9.18",
    country: "Mexico",
    image: "baguette.jpg"
  },
  {
    id: 17,
    name: "Lasagna Noodles",
    price: "$4.73",
    country: "Brazil",
    image: "lasagna-pasta.jpg"
  },
  {
    id: 18,
    name: "Pied De Vents Cheese",
    price: "$5.16",
    country: "Canada",
    image: "pied-de-vents.jpg"
  },
  {
    id: 19,
    name: "Sweet Potato Crackers",
    price: "$6.81",
    country: "United States",
    image: "crackers.jpg"
  },
  {
    id: 20,
    name: "Mushrooms",
    price: "$8.62",
    country: "United States",
    image: "mushrooms.jpg"
  },
  {
    id: 21,
    name: "Jerusalem Artichoke",
    price: "$3.16",
    country: "United States",
    image: "jerusalem-artichoke.jpg"
  },
  {
    id: 22,
    name: "Leather Leaf Fern",
    price: "$9.41",
    country: "Brazil",
    image: "leather-leaf.jpg"
  },
  {
    id: 23,
    name: "Dried Apricots",
    price: "$7.42",
    country: "Brazil",
    image: "dried-apricots.jpg"
  },
  {
    id: 24,
    name: "Navel Orange",
    price: "$3.53",
    country: "Brazil",
    image: "navel-orange.jpg"
  },
  {
    id: 25,
    name: "Sunflower Oil",
    price: "$1.90",
    country: "Mexico",
    image: "sunflower-oil.jpg"
  },
  {
    id: 26,
    name: "Black Turtle Beans",
    price: "$4.67",
    country: "Canada",
    image: "turtle-beans.jpg"
  },
  {
    id: 27,
    name: "Bananas",
    price: "$2.64",
    country: "Canada",
    image: "bananas.jpg"

  },
  {
    id: 28,
    name: "Salami",
    price: "$8.72",
    country: "Brazil",
    image: "salami.jpg"
  },
  {
    id: 29,
    name: "Proscuitto",
    price: "$9.86",
    country: "Brazil",
    image: "proscuitto.jpg"
  },
  {
    id: 30,
    name: "Cranberries",
    price: "$5.85",
    country: "United States",
    image: "cranberries.jpg"

  },
  {
    id: 31,
    name: "Canteloupe",
    price: "$4.49",
    country: "United States",
    image: "canteloupe.jpg"
  },
  {
    id: 32,
    name: "Lemon",
    price: "$2.8Lemon5",
    country: "United States",
    image: "lemon.jpg"
  },
  {
    id: 33,
    name: "Pesto",
    price: "$2.67",
    country: "Brazil",
    image: "pesto.jpg"
  },
  {
    id: 34,
    name: "Grapefruit Juice",
    price: "$4.88",
    country: "Brazil",
    image: "grapefruit-juice.jpg"

  },
  {
    id: 35,
    name: "Curry Paste",
    price: "$2.02",
    country: "Brazil",
    image: "curry-paste.jpg"
  },
  {
    id: 36,
    name: "Avocado Oil",
    price: "$4.45",
    country: "Canada",
    image: "avocado-oil.jpg"
  },
  {
    id: 37,
    name: "Queso Fresco",
    price: "$9.24",
    country: "Canada",
    image: "queso-fresco.jpg"
  },
  {
    id: 38,
    name: "Key Lime Pie",
    price: "$5.32",
    country: "Mexico",
    image: "key-lime-pie.jpg"
  },
  {
    id: 39,
    name: "Granny Smith Apple",
    price: "$2.12",
    country: "United States",
    image: "granny-smith.jpg"
  },
  {
    id: 40,
    name: "Morning Glory Muffin Mix",
    price: "$9.22",
    country: "Brazil",
    image: "muffin-mix.jpg"
  },
  {
    id: 41,
    name: "Heavy Whipping Cream",
    price: "$8.78",
    country: "Brazil",
    image: 'heavy-cream.jpg'
  },
  {
    id: 42,
    name: "Red Bell Pepper",
    price: "$9.03",
    country: "Brazil",
    image: 'red-bell-pepper.jpg'
  },
  {
    id: 43,
    name: "Perrier",
    price: "$9.36",
    country: "United States",
    image: 'perrier.jpg'
  },
  {
    id: 44,
    name: "Yukon Gold Potatoes",
    price: "$8.76",
    country: "Mexico",
    image: 'yukon-potatoes.jpg'
  },
  {
    id: 45,
    name: "Salmon Fillets",
    price: "$6.21",
    country: "United States",
    image: 'salmon-fillets.jpg'
  },
  {
    id: 46,
    name: "Tilapia Fillets",
    price: "$4.37",
    country: "Mexico",
    image: 'tilapia.jpg'
  },
  {
    id: 47,
    name: "Tomato Pesto",
    price: "$9.70",
    country: "Brazil",
    image: 'tomato-pesto.jpg'
  },
  {
    id: 48,
    name: "Oil - Olive Bertolli",
    price: "$8.92",
    country: "Brazil",
    image: 'olive-oil.jpg'
  },
  {
    id: 49,
    name: "Tear Drop Yellow Tomatoes",
    price: "$3.32",
    country: "Mexico",
    image: 'yellow-tomatoes.jpg'
  },
  {
    id: 50,
    name: "Smoked Paprika",
    price: "$8.31",
    country: "Brazil",
    image: 'smoked-paprika.jpg'
  }
]

export default mock;
