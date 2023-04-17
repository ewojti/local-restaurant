const pizzas = [
  {
    name: "Margherita",
    price: "22,50 zł/34,50 zł",
    tags: "ser oregano",
  },
  {
    name: "Pepperoni",
    price: "27,50 zł/39,50 zł",
    tags: "ser salami oregano",
  },
  {
    name: "Capriciosa",
    price: "26,50 zł/38,50 zł",
    tags: "ser szynka pieczarki oregano",
  },
  {
    name: "Hawajska",
    price: "28,50 zł/40,50 zł",
    tags: "ser szynka ananas kukurydza oregano",
  },
  {
    name: "Wiejska",
    price: "34,50 zł/46,50 zł",
    tags: "ser wędzony boczek kiełbasa cebula ogórek kiszony",
  },
  {
    name: "Sielska",
    price: "32,50 zł/44,50 zł",
    tags: "ser kiełbasa pieczarki cebula",
  },
  {
    name: "Carbonara",
    price: "33,50 zł/45,50 zł",
    tags: "ser boczek cebula jajko sadzone [spód serowy]",
  },
  {
    name: "Montana",
    price: "29,50 zł/41,50 zł",
    tags: "ser kurczak kukurydza papryka",
  },
  {
    name: "Ostra",
    price: "29,50 zł/41,50 zł",
    tags: "ser salami jalapeno pepperoni cebula czerwona",
  },
  {
    name: "Mięsna",
    price: "35,50 zł/47,50 zł",
    tags: "ser szynka boczek grillowany kurczak cebula",
  },
  {
    name: "Campano",
    price: "29,50 zł/41,50 zł",
    tags: "ser boczek pieczarki cebula czerwona",
  },
  {
    name: "Broccoli",
    price: "30,50 zł/42,50 zł",
    tags: "ser boczek brokuły jajko",
  },
  {
    name: "Wege",
    price: "29,50 zł/41,50 zł",
    tags: "ser pieczarki papryka kukurydza oliwki cebula",
  },
  {
    name: "Tuna",
    price: "33,50 zł/45,50 zł",
    tags: "ser tuńczyk jajko cebula oregano rukola [spód serowy]",
  },
  {
    name: "Maizo",
    price: "34,50 zł/46,50 zł",
    tags: "ser salami pieczarki kukurydza prażona cebulka",
  },
  {
    name: "Carolina",
    price: "31,50 zł/43,50 zł",
    tags: "ser salami oliwki rukola",
  },
  {
    name: "Regina",
    price: "32,50 zł/44,50 zł",
    tags: "ser kurczak brokuły suszone pomidory",
  },
  {
    name: "Paella",
    price: "35,50 zł/47,50 zł",
    tags: "ser krewetki chorizo pomidor koktajlowy rukola",
  },
  {
    name: "Greco",
    price: "32,50 zł/44,50 zł",
    tags: "ser bakłażan oliwki feta cebula czerwona",
  },
  {
    name: "4 sery",
    price: "33,50 zł/45,50 zł",
    tags: "mozarella gorgonzola ser wędzony feta",
  },
  {
    name: "Pollo",
    price: "34,50 zł/46,50 zł",
    tags: "ser grillowany kurczak papryka pomidor koktajlowy rukola",
  },
  {
    name: "Parma",
    price: "34,50 zł/46,50 zł",
    tags: "ser szynka parmeńska pomidor koktajlowy parmezan rukola",
  },
  {
    name: "Mexicana",
    price: "35,50 zł/47,50 zł",
    tags: "ser wołowina chorizo kukurydza jalapeño cebula czerwona",
  },
  {
    name: "Rukola",
    price: "35,50 zł/47,50 zł",
    tags: "ser kurczak gorgonzola pomidor koktajlowy rukola",
  },
  {
    name: "Salmon",
    price: "35,50 zł/47,50 zł",
    tags: "ser tosos brokuły cebula czerwona",
  },
  {
    name: "Sorento",
    price: "36,50 zł/48,50 zł",
    tags: "ser szynka parmeńska gruszka orzech włoski glazura balsamiczna",
  },
  {
    name: "Nacho",
    price: "35,50 zł/47,50 zł",
    tags: "(spód BBQ) ser wołowina jalapeño papryka nachosy",
  },
  {
    name: "Mozza",
    price: "32,50 zł/44,50 zł",
    tags: "mozarella pomidor rukola glazura balsamiczna",
  },
  {
    name: "Pizza 55",
    price: "35,50 zł/47,50 zł",
    tags: "ser szarpane żeberko cebula ogórek kiszony majonez",
  },
  {
    name: "Własna kompozycja",
    price: "35,50 zł/47,50 zł",
    tags: "ser 3 dowolne dodatki",
  },
];

const burgers = [
  {
    name: "Klasyczny",
    price: "26 zł/34 zł",
    tags: ["wołowina", "bekon", "ser", "sałata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Klasyczny kurczak",
    price: "26 zł/34 zł",
    tags: ["kurczak", "bekon", "ser", "sałata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Ostry",
    price: "26 zł/34 zł",
    tags: [
      "wołowina z chili",
      "sałata",
      "peperoni",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Z jajkiem",
    price: "28 zł/36 zł",
    tags: [
      "wołowina",
      "jajko sadzone",
      "bekon",
      "sałata",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Szefa",
    price: "28 zł/36 zł",
    tags: ["wołowina", "grillowane warzywa", "sałata", "pomidor", "pikle"],
  },
  {
    name: "Wiejski",
    price: "30 zł/38 zł",
    tags: [
      "wołowina",
      "kiełbasa",
      "placek ziemniaczany",
      "sałata",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Drwala",
    price: "30 zł/38 zł",
    tags: [
      "wołowina",
      "chrupiący ser",
      "bekon",
      "sałata",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Złoty Krążek",
    price: "28 zł/36 zł",
    tags: [
      "wołowina",
      "krążki cebulowe",
      "sałata",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Macho",
    price: "31 zł/39 zł",
    tags: [
      "wołowina",
      "nachosy",
      "sałata",
      "jalapeño",
      "grillowany ananas",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Żebro",
    price: "30 zł/38 zł",
    tags: ["szarpane żeberko", "sałata", "pomidor", "cebula", "ogórek kiszony"],
  },
  {
    name: "Lawa",
    price: "34 zł/44 zł",
    tags: ["serowa lawa", "wołowina", "salata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Mac'n'cheese",
    price: "30 zł/38 zł",
    tags: [
      "makaron",
      "wołowina",
      "prażona cebulka",
      "salata",
      "pomidor",
      "cebula",
      "pikle",
    ],
  },
  {
    name: "Fish",
    price: "32 zł/40 zł",
    tags: ["tupacz panierowany", "salata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Wege",
    price: "26 zł/34 zł V",
    tags: ["burger z brokuła", "salata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Podlaski",
    price: "26 zł/34 zł V",
    tags: ["grillowany ser wędzony", "sałata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Double wołowy",
    price: "36 zł/44 zł",
    tags: ["wołowina", "bekon", "ser", "salata", "pomidor", "cebula", "pikle"],
  },
  {
    name: "Double kurczak",
    price: "36 zł/44 zł",
    tags: ["kurczak", "bekon", "ser", "sałata", "pomidor", "cebula", "pikle"],
  },
];

const menu ={
  pizzas, 
  burgers
}

export default menu;