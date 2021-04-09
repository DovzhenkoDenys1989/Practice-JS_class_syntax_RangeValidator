"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(newFrom) {
    if (typeof newFrom !== "number") {
      throw new TypeError("Error not a number");
    }
    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (typeof newTo !== "number") {
      throw new TypeError("Error not a number");
    }
    this._to = newTo;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this.from, this.to];
  }

  validate(number) {
    if (number >= from && number <= to) {
      return number;
    } else {
      throw new RangeError("Error number");
    }
  }
}
const numeric = new RangeValidator(2, 10);
console.log(numeric);
