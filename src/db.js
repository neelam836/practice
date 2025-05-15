import s1 from "./images/tatatea.jpg";
import s2 from './images/tatagold.jpg';
import c1 from "./images/coffee.jpeg";
import su1 from "./images/uttamsugar.jpeg";
import aa1 from "./images/aata.jpg";
import m1 from './images/rusk.jpeg';
import bru from './images/bru.jpg';
import brug from './images/brugold.jpeg';
import buraa from './images/bura.jpg';
import ff from './images/fortu.jpg';
import li from './images/lipton.jpg';
import mad from './images/madhur.jpg';
import madm from './images/madhuram.jpg';
import mar from './images/marle.jpeg';
import amul from './images/amulchees.jpg';
import gl from './images/golda.jpg';
import mdb from './images/mdb.jpg';
import multi from './images/multi.jpg';
import parle from './images/parlerusk.jpg';
import red from './images/redlabel.jpg';
import amu from './images/amul.jpeg';




let products = [
  
  {
    name: "Tata Taj Tea",
    category: "Tea",
    price: 550,
    qty: "1",
    unit: "kg",
    discount: 10,
    image: s1,
  },
  {
    name: "Tata Taj Gold Tea",
    category: "Tea",
    price: 650,
    qty: "1",
    unit: "kg",
    discount: 10,
    image:s2,
  },
  {
    name: "Tata lipton Tea",
    category: "Tea",
    price: 650,
    qty: "1",
    unit: "kg",
    discount: 10,
    image:li,
  },
  {
    name: "Nescafe Coffee",
    category: "coffee",
    price: 500,
    qty: "250",
    unit: "grm",
    discount: 10,
    image:c1,
  },
  {
    name: "Bura Sugar",
    category: "Sugar",
    price: 500,
    qty: "250",
    unit: "grm",
    discount: 10,
    image:buraa,
  },
  {
    name: "Utam Suger",
    category: "Sugar",
    price: 50,
    qty: "1",
    unit: "kg",
    discount: 5,
    image:su1,
  },
  {
    name: "Aashirvaad Atta",
    category: "Flour",
    price: 280,
    qty: "5",
    unit: "kg",
    discount: 8,
    image:aa1
  },
  
  {
    name: "Amul Butter",
    category: "Dairy",
    price: 55,
    qty: "100",
    unit: "grm",
    discount: 5,
    image: amu,
  },
  {
    name: "Britannia Milk Rusk",
    category: "Bakery",
    price: 45,
    qty: "200",
    unit: "grm",
    discount: 6,
    image:m1,
  },
    {
    name: "Red Label Tea",
    category: "Tea",
    price: 520,
    qty: "1",
    unit: "kg",
    discount: 9,
     image: red,
  },
  {
    name: "Bru Instant Coffee",
    category: "coffee",
    price: 480,
    qty: "200",
    unit: "grm",
    discount: 12,
     image: bru,
  },
  {
    name: "Bru gold Instant Coffee",
    category: "coffee",
    price: 480,
    qty: "200",
    unit: "grm",
    discount: 12,
     image: brug,
  },

  // Sugar
  {
    name: "Madhur Sugar",
    category: "Sugar",
    price: 48,
    qty: "1",
    unit: "kg",
    discount: 4,
    image: mad,
  },
  {
    name: "Patanjali Brown Sugar",
    category: "Sugar",
    price: 60,
    qty: "1",
    unit: "kg",
    discount: 5,
     image: madm,
  },

 
  // Flour
  {
    name: "Fortune Chakki Fresh Atta",
    category: "Flour",
    price: 270,
    qty: "5",
    unit: "kg",
    discount: 7,
    image: ff,
  },
  {
    name: "MultiGrain Gold Atta",
    category: "Flour",
    price: 270,
    qty: "5",
    unit: "kg",
    discount: 7,
    image: gl,
  },
  {
    name: "Pillsbury Atta",
    category: "Flour",
    price: 275,
    qty: "5",
    unit: "kg",
    discount: 6,
     image: multi,
  },

  // Dairy
  {
    name: "Mother Dairy Butter",
    category: "Dairy",
    price: 58,
    qty: "100",
    unit: "grm",
    discount: 5,
     image: mdb,
  },
  {
    name: "Amul Cheese Slices",
    category: "Dairy",
    price: 85,
    qty: "200",
    unit: "grm",
    discount: 5,
     image: amul,
  },

  // Bakery
  {
    name: "Parle Rusk",
    category: "Bakery",
    price: 42,
    qty: "200",
    unit: "grm",
    discount: 6,
     image: parle,
  },
  {
    name: "Sunfeast Marie Light Biscuits",
    category: "Bakery",
    price: 25,
    qty: "200",
    unit: "grm",
    discount: 4,
     image: mar,
  }


];

export default products;