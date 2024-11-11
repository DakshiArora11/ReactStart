import React from 'react'
function Content({name, age, location}){
    return(
        <div style={cardStyle}>
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <p>location: {location}</p>
        </div>
    );
}
const cardStyle={
    border: '1px solid black',
    padding: '20px',
    width: '300px',
}
export default Content;