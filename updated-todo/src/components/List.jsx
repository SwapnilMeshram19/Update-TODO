import React from "react";
const List =(prop)=>{
    const list=prop;
    return (
        <div>
            {
               list.status ?         
               <h4 className='green'>{list.title}</h4> :
               <h4 className='red'>{list.title}</h4>
            }
        </div>
    )
}

export default List;