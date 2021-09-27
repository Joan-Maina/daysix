import React, { Component } from 'react';
import hocCounter from './hocCounter';

class Counter extends Component {
    render(){
        const {count, incrementCount} =this.props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>
           {count} my
           </h1>
           <p>joan</p>
        </div>
    );
}
}

export default hocCounter(Counter);
