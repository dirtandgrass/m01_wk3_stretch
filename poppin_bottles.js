
class BottleMachine {

  #cash = 0;
  #bottles = 0;
  #caps = 0;
  #empties = 0;
  #totalBottles = 0;

  depositCash(cash) {
    this.#cash += cash;
  }

  buyBottles() {
    const numBottles = Math.floor(this.#cash / 2);
    this.#cash -= numBottles * 2;
    this.#bottles += numBottles;

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
    this.#caps -= numBottles * 4;
    this.#bottles += numBottles;
  }

  #recycleEmpties() {
    const numBottles = Math.floor(this.#empties / 2);
    this.#empties -= numBottles * 2;
    this.#bottles += numBottles;
  }

  simulate(cash) {
    this.depositCash(cash);

    this.buyBottles();
    console.log("init purchase", this.toString());
    while (this.#bottles > 0) {
      this.consumeBottles();
      this.recycle();
      //console.log("trip", this.toString());
    }
    console.log("final:", this.toString());
  }

  toString() {
    return `Cash: $${this.#cash}, Bottles: ${this.#bottles}, Caps: ${this.#caps}, Empties: ${this.#empties}, Total Bottles: ${this.#totalBottles}`;
  }
}

module.exports = BottleMachine;


const money = +process.argv[2];

if (isNaN(money)) {
  throw new Error("Please provide a number");
}
console.log("Money:", money);