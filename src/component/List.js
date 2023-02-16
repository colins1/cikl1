import React from 'react';

function List ({time}) {
        
        return ( 
                <div>{time.object.length !== 0 ? time.object.map((items, i) => <p key={i}>{items}</p>) : ""}</div>
        )
}

export default List
