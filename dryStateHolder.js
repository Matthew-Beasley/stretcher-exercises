class StateHolder {
  constructor(start) {
    this.state = start;
    this.listeners = [];
    this.stateRecord = [];
  }
  getState() {
    return this.state;
  }
  sub(listener) {
    this.listeners.push(listener);
  }
  increase(value) {
    this.state += value;
    this.stateRecord.push(this.state);
  }
  decrease(value) {
    this.state -= value;
    this.stateRecord.push(this.state);
  }

  broadcast() {
    this.stateRecord.forEach(message => this.listeners.forEach(listener => listener(message)));
  }
}


const stateHolder = new StateHolder(2);

stateHolder.sub((state) => {
  console.log(state);
})

stateHolder.increase(7);
stateHolder.decrease(3);
stateHolder.decrease(6);
stateHolder.increase(2);

stateHolder.broadcast();

console.log(stateHolder.getState());
/*
9
6
0
2
2
*/