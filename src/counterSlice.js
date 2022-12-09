 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "THE Counter",
    initialState: initialState,

    reducers: {
        // you can't mutate state with redux, but toolkit makes it so you 'can'. Behind the scenes it doesn't mutate state
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            if(state.value === 0) {
                return state
            }
            state.value -=1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// this is how we can change our counter state
export const { increment } = counterSlice.actions
export const { decrement } = counterSlice.actions
export const { incrementByAmount } = counterSlice.actions

//selector
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer