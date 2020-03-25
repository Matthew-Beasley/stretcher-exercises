class StateHolder {
  constructor(number) {
    this.state = number;
    this.log = null;
  }

  increase(number) {
    this.state += number;
    this.log(this.state);
  }

  sub(func) {
    this.log = func;
  }

  getState() {
    this.log(this.state);
  }
}

const stateHolder = new StateHolder(2);

stateHolder.sub((state) => {
  console.log(state);
})
stateHolder.increase(7);
stateHolder.increase(2);

console.log(stateHolder.getState());
/*
9
11
11
*/
