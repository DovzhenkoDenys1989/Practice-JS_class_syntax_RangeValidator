"use strict";

class RangeValidator{
  constructor(from, to){
    this._from = from;
    this._to = to;
  }
  set from(newFrom){
    this._from = newFrom;
  }

  get from(){
    return this._from;
  }

  set to(newTo){
    this._to = newTo;
  }

  get to(){
    return this._to;
  }

  get range(){
    return new Array (this.from + this.to);
  }


  validate(number){
    if(number >= from && number <= to){
      return number;
    } else{
      throw new RangeError ('Error number');
    }
  }
}
const numeric = new RangeValidator(2, 10);
console.log(numeric);




