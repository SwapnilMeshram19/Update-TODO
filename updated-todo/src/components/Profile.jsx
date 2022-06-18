import React from "react";
import Age from "./Age";
import MoreDetails from "./MoreDetails";
const Profile = (prop) => {
    
    const {name,profileImage,age,location,organization}=prop;
    var [detail, setDetail]=React.useState(false);
    

    // const showAllFunction = () => setShow(!show);

    return (
        <div className="p-container">
          
          <img src={profileImage} className="p-img"/>  
          <h3>Name : {name}</h3>
          <Age age={age}/>    
          <button className="age-button" onClick={()=>setDetail(!detail)}>
              {detail ? 'SHOW MORE DETAILS' :'HIDE MORE DETAILS'}
          </button>
          {
            detail ? " ": <MoreDetails location={location} organization={organization}/>
          }
        </div>
    );
}

export default Profile;