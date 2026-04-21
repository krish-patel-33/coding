import {createContext, useContext} from "react"

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo: "go to gym",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDocontext)
}

export const ToDoprovider = TodoContext.Provider