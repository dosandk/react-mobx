import React from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';

@inject('itemsListStore')
@observer
export default class ItemsList extends React.Component {
  @observable inputValue = '';

  handleChange = event => {
    this.inputValue = event.target.value;
  };

  addItem = () => {
    this.props.itemsListStore.addItem(this.inputValue);
    this.inputValue = '';
  };

  render () {
    const {itemsListStore} = this.props;

    return (
      <div>
        <div>
          {itemsListStore.allItems.map(item => {
            return (
              <div key={item.id}>
                <span>{item.value}</span>
                <span> | </span>
                <span onClick={() => itemsListStore.removeItem(item.id)}>Remove</span>
              </div>
            );
          })}
        </div>
        <div>
          <input type="text" value={this.inputValue} onChange={event => this.handleChange(event)} />
          <button onClick={() => this.addItem()}>Add item</button>
        </div>
      </div>

    );
  }
}
