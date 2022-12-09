import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../counterSlice";
import { increment, decrement, incrementByAmount } from "../counterSlice";

const Counter = () => {

    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    const [incrementBy, setIncrementBy] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
             <p>The count is {count}</p>
             <button onClick={() => dispatch(increment())}>Add</button>
             <button onClick={() => dispatch(decrement())}>Minus</button>
             <input type='number'  onChange={(e) => {
                setIncrementBy(e.target.value)}}/>
            <button onClick={() => dispatch(incrementByAmount(parseInt(incrementBy)))}>Increment By</button>
        </div>
    );
};

export default Counter;