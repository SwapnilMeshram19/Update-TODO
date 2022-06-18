import React from "react";
const TodoInput = () =>{
    var [title, setTitle]=React.useState("");
    var [checked,setChecked]=React.useState(false);
   
    const addTodo = () => {
        const payload = {
            title: title,
            status: checked
        }        
        fetch("http://localhost:3001/todoList",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
            "content-type": "application/json"
          }  
        })

        setTitle("");
        setChecked(false);
    }
    
    return (
        <div className="input">
            <h1>Add Todo</h1>
            <label>
            <input
                type="text"
                placeholder="Enter Your TODO"
                value={title}
                onChange={(event)=>{setTitle(event.target.value)}}
            />
            </label>
            <label>
            <input
                className="checkbox"
                type="checkbox"
                value={checked}
                onChange={(event)=>setChecked(!checked)}
            />
            </label>
           

            <button onClick={addTodo}>Save</button>
        </div>
    )
}

export default TodoInput;