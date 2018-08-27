import {action, computed, observable} from 'mobx';

class ItemsListStore {
  @observable items = [
    {id: 1, value: 'some list item 1'},
    {id: 2, value: 'some list item 2'},
    {id: 3, value: 'some list item 3'}
  ];

  @action addItem(value) {
    this.items.push({id: Date.now(), value});
  }

  @action removeItem(item) {
    const {id} = item;
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  @computed get allItems () {
    return this.items;
  }
}

export default new ItemsListStore();
