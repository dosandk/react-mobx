// import {observable, action, computed} from 'mobx';

class MainStore {
  @observable arr = ['one', 'two', 'free'];

  @action add (item) {
    this.arr.push(item);
  }

  @computed get length () {
    return this.arr.length;
  }
}

const store = new MainStore();

export default store;
