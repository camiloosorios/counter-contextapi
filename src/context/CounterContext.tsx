import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { CounterActions, CounterState, counterState, initialState } from "../reducer/counter-reducer";

type ContextProviderProps = {
    state : CounterState
    dispatch : Dispatch<CounterActions>
}

type CounterProviderProps = {
    children : ReactNode
}


export const ContextProvider = createContext<ContextProviderProps>(null!);

export default function CounterProvider({ children } : CounterProviderProps) {

    const [ state, dispatch ] = useReducer(counterState, initialState);

  return (
    <ContextProvider.Provider
        value={{
            state,
            dispatch
        }}
    >
        {children}
    </ContextProvider.Provider>
  )
}
