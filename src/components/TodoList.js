import React, { useContext, useState } from "react";
import "../index.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "./TodoListContext";

const TodoList = () => {
  const [todo , setTodo] = useState('')

  const { todos , dispatch} = useContext(TodoListContext)
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleChangeSubmit = (event) => {
    event.preventDefault()
    dispatch({type: 'ADD_TODO', text:todo})
  }
 
  const handleRemove = (event) => {
    const id =(event.target.id);
    dispatch({type : 'REMOVE_TODO' , id})
  }
  
  return (
      <div style={{ background: theme.background,color: theme.text,textAlign: "center",padding: "20px"}}className="ui">
        {todos.length ? (
          todos.map((todo) => {
            return <p id={todo.id} onClick= {handleRemove} className="item" key={todo.id}>{todo.text}</p>
          })
        ) : (
          <div> You have no todo</div>
        ) 
        
        }
        <form onSubmit={handleChangeSubmit}>
        <label>Add todo :</label>
          <input type="text" onChange={handleChange}/>
          <input type="submit" value= 'Add new Todo'/>
        </form>
        <button style={{backgroundColor: '#4040ff', color:'#fff'}} onClick={changeTheme}>Change the Theme</button>
      </div>
  );
};

export default TodoList;
