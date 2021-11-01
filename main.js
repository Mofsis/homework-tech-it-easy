// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//Opdracht 1a
const outputOpdr1a = inventory.map(function (value) {
  return value.type;
});
console.log(outputOpdr1a);

//Opdracht 1b
const outputOpdr1b = inventory.filter(function(soldOut){
  return soldOut.originalStock === soldOut.sold;
})
console.log(outputOpdr1b);

//Opdracht 1c
const outputOpdr1c = inventory.filter(function(ambi){
  return ambi.options.ambiLight === true;
})
console.log(outputOpdr1c);

//Opdracht 1d
const outputOpdr1d = inventory.sort(function(a,b){
  return a.price - b.price;
})
console.log(outputOpdr1d);

//Opdracht 2a
function outputOpdr2a() {
  let soldTvs = 0;
  for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;
  }
  return soldTvs;
}
console.log(outputOpdr2a());

//Opdracht 2b
const tvsSold = document.getElementById("total-sold")
function outputOpdr2b() {
  let soldTvs = 0;
  for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;
  }
  return soldTvs;
}
tvsSold.innerHTML = "Total tv's sold:" + " " + outputOpdr2b()

//Opdracht 2c
function outputOpdr2c() {
  let soldTvs = 0;
  for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].originalStock;
  }
  return soldTvs;
}
console.log(outputOpdr2c());

//Opdracht 2d
const totalStock = document.getElementById("total-stock")
function outputOpdr2d() {
  let stock = 0;
  for (let i = 0; i < inventory.length; i++) {
    stock += inventory[i].originalStock;
  }
  return stock;
}
totalStock.innerHTML = "Total Stock:" + " " + outputOpdr2d()

//Opdracht 2e
const currentStock = document.getElementById("current-stock")
currentStock.innerHTML = "Stock left:" + " " + (outputOpdr2d() - outputOpdr2b());

//Opdracht 3a
const tvBrands = document.getElementById("tv-brands")
let list = "<ul>";
for(let i = 0; i < inventory.length; i++) {
  list += "<li>" + inventory[i].brand + "</li>";
}
list += "</ul>";

tvBrands.innerHTML = list;

//Opdracht 4b
const tvBrands4b = document.getElementById("tv-brands-2")
function outputOpdr4b() {
  let list2 = "<ul>";
  for (let i = 0; i < inventory.length; i++) {
    list2 += "<li>" + inventory[i].brand + "</li>";
  }
  return list2 += "</ul>";
}
tvBrands4b.innerHTML = outputOpdr4b();

//Opdracht 5a
function outputOpdr5a(index) {
  return {
    brand:inventory[index].brand,
    type:inventory[index].type,
    name:inventory[index].name,
  };
}
console.log(outputOpdr5a(1));

//Opdracht 5b
function outputOpdr5b(index) {
  return "€" + inventory[index].price + ",-";
}
console.log(outputOpdr5b(5))

//Opdracht 5c
function outputOpdr5c(index) {
  let sizes = [];
  for (let i=0; i < inventory[index].availableSizes.length; i++) {
    sizes.push(inventory[index].availableSizes[i] + " inch (" + Math.round(inventory[index].availableSizes[i] * 2.54) + "cm)");
    console.log(sizes);
  }
  return sizes.join(' | ');
}
console.log(outputOpdr5c(5));

// Opdracht 5d
function showTV(index) {
  let html = [];

  function tvName(index) {
    return {
      brand: inventory[index].brand,
      type: inventory[index].type,
      name: inventory[index].name,
    };
  }
  function tvPrice(index) {
    return "€" + inventory[index].price + ",-";
  }
  function tvSize(index) {
    let sizes = [];
    for (let i = 0; i < inventory[index].availableSizes.length; i++) {
      sizes.push(inventory[index].availableSizes[i] + " inch (" + Math.round(inventory[index].availableSizes[i] * 2.54) + "cm)");
    }
    return sizes.join(' | ');
  }
  document.getElementById('tv-brands').innerHtml = html.join('<br/>');
}

//Opdracht 5e