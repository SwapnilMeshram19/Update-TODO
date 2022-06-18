import React from "react";
import Profile from "./Profile";
import TodoList from "./TodoList";

const Todo =()=>{

    const [todo,setTodo]=React.useState([]);
    const [loading,setLoading]=React.useState(false);
    const [error,setError]=React.useState(false);
    const [page,setPage]=React.useState(1);
    const pageLimit=5;

    React.useEffect(()=>{
        setLoading(true);
        let url="http://localhost:3001/todoList?_page="+page+"&_limit="+pageLimit;
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res)
        })
        .catch((err)=>{
            setError(true);
            setTodo([]);
        })
        .finally(()=>{
            setLoading(false);
        })

    },[page])


    const profile=[
        {
         id: 100,
         name:"Swapnil Meshram",
         profileImage:"https://avatars.githubusercontent.com/u/41813408?v=4",
         age:18,
         location:"Nagpur",
         organization:"Asha Institute",
         show:"false",
        }
    ]
    return (
    <>
    {
          profile.map((pProfile)=>
              <Profile {...pProfile} key={pProfile.id}/>
          )
    }

    {loading?(<h1>Loading....</h1>):error?(<h1>Something Went Wrong</h1>):(
        <div>
            <TodoList todo= {todo}/>
            <button onClick={()=>setPage(page-1)} disabled={page==1}>Previous</button>
            <button onClick={()=>setPage(page+1)} disabled={todo && todo.length<pageLimit}>Next</button>
        </div>
        
    )}    
        
    </>
    )
}

export default Todo;