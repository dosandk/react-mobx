import React from 'react';
import {inject, observer} from 'mobx-react';

const Index = ({counterStore}) => (
  <div style={{fontSize: '24px', textAlign: 'center'}}>
    <div>
      {counterStore.counterValue}
    </div>
    <div>
      <button className="btn" onClick={() => counterStore.increment()}>+1</button>
      <button className="btn" onClick={() => counterStore.decrement()}>-1</button>
    </div>
  </div>
);

export default inject('counterStore')(observer(Index));
