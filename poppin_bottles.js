
class BottleMachine {

  #cash = 0;
  #bottles = 0;
  #caps = 0;
  #empties = 0;
  #totalBottles = 0;
  #price = 2; // price per bottle

  #purchasedBottles = 0; // bottles purchased
  #earnedFromEmpties = 0; // bottles earned from recycling
  #earnedFromCaps = 0; // caps earned from recycling

  depositCash(cash) {
    this.#cash += cash;
  }

  setPrice(price) {
    this.#price = price;
  }


  buyBottles() {
    const numBottles = Math.floor(this.#cash / this.#price);
    this.#cash -= numBottles * this.#price;
    this.#bottles += numBottles;
    this.#purchasedBottles += numBottles;

  }

  consumeBottles() {
    const numBottles = this.#bottles;
    this.#totalBottles += numBottles;
    this.#bottles = 0;
    this.#caps += numBottles;
    this.#empties += numBottles;
  }

  recycle() {
    this.#recycleCaps();
    this.#recycleEmpties();
  }

  #recycleCaps() {
    const numBottles = Math.floor(this.#caps / 4);
    this.#earnedFromCaps += numBottles;
    this.#caps -= numBottles * 4;
    this.#bottles += numBottles;
  }

  #recycleEmpties() {
    const numBottles = Math.floor(this.#empties / this.#price);
    this.#earnedFromEmpties += numBottles;
    this.#empties -= numBottles * this.#price;
    this.#bottles += numBottles;
  }

  simulate(cash) {
    this.depositCash(cash);

    this.buyBottles();
    //"init purchase", this.toString());
    while (this.#bottles > 0) {
      this.consumeBottles();
      this.recycle();
      //"trip", this.toString());
    }
    return {
      cash: this.#cash,
      purchasedBottles:this.#purchasedBottles,
      bottles: this.#bottles,
      caps: this.#caps,
      empties: this.#empties,
      totalBottles: this.#totalBottles,
      earnedFromEmpties: this.#earnedFromEmpties,
      earnedFromCaps: this.#earnedFromCaps
    };
  }

  toString() {
    const ret = `Total Bottles Acquired: ${result.totalBottles}\n` +
    "🍾".repeat(20) + "\n" +
    `Total Earned from Recycling: ${result.earnedFromEmpties + result.earnedFromCaps}\n` +
    "-".repeat(20) + "\n" +
    `\tTotal Earned from Empties: ${result.earnedFromEmpties}\n` +
    `\tTotal Earned from Caps: ${result.earnedFromCaps}\n` +
    "-".repeat(20) + "\n" +
    `Remaining Cash: $${result.cash}\n` +
    `Remaining Empties: ${result.empties}\n` +
    `Remaining Caps: ${result.caps}\n` +
    "🍾".repeat(20) + "\n";



    return ret;
  }
}

module.exports = BottleMachine;


const money = +process.argv[2];

if (isNaN(money) || money < 0) {
  throw new Error("Please provide an amount of dollars to spend on bottles of pop as an argument");
}

const machine = new BottleMachine();
const result = machine.simulate(money);

console.log(machine.toString());
