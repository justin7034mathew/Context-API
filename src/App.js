import React from "react";
import Navbar from "./components/navbar";
import TodoList from "./components/TodoList";
import "./index.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import TodoListProvider from "./components/TodoListContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segments">
        <ThemeContextProvider>
         <TodoListProvider>
          <AuthContextProvider>
            <Navbar />
            <TodoList />
          </AuthContextProvider>
         </TodoListProvider>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
