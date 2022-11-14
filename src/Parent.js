import React, { useContext } from 'react'
import Child from './Child'
import counterContext from './CounterContext'

const Parent = (props) => {
  

 let counter =  useContext(counterContext)
    console.log(props);
  return (
    <div>
        <Child num = {props.num} />
        <h1> Parent {counter}</h1>

    </div>
  )
}

export default Parent