const MoreDetails = (prop) =>{
    var location=prop.location;
    var organization=prop.organization;
    return (
        <div>
            <h2>Location : {location}</h2>
            <h2>Organization : {organization}</h2>
        </div>
    )


}

export default MoreDetails;