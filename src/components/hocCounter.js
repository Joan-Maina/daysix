import React, { useState }from 'react'

function hocCounter(WrappedComponent) {
    function HocCounter(props){

        const[count, setCount] = useState(0);

        const incrementCount = () => setCount(prevState => prevState + 1 );

        return <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>
    }
    return HocCounter;
}

export default hocCounter
