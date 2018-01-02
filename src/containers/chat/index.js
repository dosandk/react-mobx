import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import {inject, observer} from 'mobx-react';

@inject('mainStore')
@observer
@autobind
class Chat extends Component {
  constructor (...props) {
    super(...props);
  }

  get items () {
    return this.props.mainStore.arr.map((item, index) => <li key={index}>{item}</li>);
  }

  get itemsLength () {
    return this.props.mainStore.length;
  }

  addItem = e => {
    e.preventDefault();
    this.props.mainStore.add(this.input.value);
    this.input.value = '';
  };

  setRef (name) {
    return item => {
      this[name] = item;
    };
  }

  render () {
    return (
      <div>
        <div>
          Items: { this.itemsLength }
        </div>
        <ul>
          { this.items }
        </ul>
        <form onSubmit={this.addItem}>
          <input type="text" ref={this.setRef('input')}/>
          <input type="submit" value='add Item'/>
        </form>
      </div>
    );
  }
}

export default Chat;
