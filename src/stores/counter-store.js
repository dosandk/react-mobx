import {action, computed, observable} from 'mobx';

class CounterStore {
  @observable counter = 0;

  @action increment() { this.counter++; }

  @action decrement() { this.counter--; }

  @computed get counterValue () {
    return this.counter;
  }
}

export default new CounterStore();
