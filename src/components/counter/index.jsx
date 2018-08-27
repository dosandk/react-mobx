import React from 'react';
import {inject, observer} from 'mobx-react';

const Index = ({counterStore}) => (
  <div>
    <div>
      {counterStore.counterValue}
    </div>
    <div>
      <button onClick={() => counterStore.increment()}>+1</button>
      <button onClick={() => counterStore.decrement()}>-1</button>
    </div>
  </div>
);

export default inject('counterStore')(observer(Index));
