import React from "react";
import List from "./List";
import TodoInput from "./TodoInput";


const TodoList =({todo})=>{
   console.log(todo);
    return (
        <div className="todo-list">
            <TodoInput/>
            <h1>Todo List</h1>
            {
                todo.map((ele)=>
                <List {...ele} key={ele.id}/>
                )
            }
        </div>
    )
}

export default TodoList;