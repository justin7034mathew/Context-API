import React, { useReducer , createContext}from "react";
import { todoReducer } from "../Reducers/TodoReducers";

export const TodoListContext = createContext()     

const TodoListProvider = ({ children }) => {

    const [todos ,dispatch] = useReducer( todoReducer, [
        {text :'Plan for the family trip',id:1},
        {text : 'Go for shopping dinner',id:2},
        {text : 'Go for walk',id:3}
    ])

    return(
        <TodoListContext.Provider value={ {todos , dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;