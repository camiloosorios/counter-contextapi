import { useContext } from "react"
import { ContextProvider } from "../context/CounterContext";

export const useCounter = () => {
    return useContext(ContextProvider);
}