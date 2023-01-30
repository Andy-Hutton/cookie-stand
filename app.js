const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

//seattle
const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
    this.calcCookiesPerHour();
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(this.custPerHour[i] * this.avgSale);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.calcCustPerHour();
console.log(seattle);

const seattleDiv = document.getElementById("seattle");
console.log(seattleDiv);

const h2 = document.createElement("h2");
h2.textContent = seattle.name;
seattleDiv.appendChild(h2);

const ul = document.createElement("ul");
seattleDiv.appendChild(ul);

for (let i = 0; i < seattle.custPerHour.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.cookiesPerHour[i] + "cookies";
  ul.appendChild(li);
  console.log(seattle.cookiesPerHour[i]);
}

//tokyo
const tokyo = {
  name: "tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

tokyo.getCustPerHour();
console.log(tokyo);

// dubai

const dubai = {
  name: "dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

dubai.getCustPerHour();
console.log(dubai);

//paris

const paris = {
  name: "paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

paris.getCustPerHour();
console.log(paris);

//lima
const lima = {
  name: "lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

lima.getCustPerHour();
console.log(lima);
