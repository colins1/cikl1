import React from 'react';

function List ({form, setForm}) {

        const deleteItem = event => {
                event.preventDefault();
                const result = form.object.filter(word => event.target.parentElement.children[0].textContent !== word.date);
                setForm({object: result});
        }

        return (
        <div style={{float: "left", margin: "20px", border: "solid black 2px", borderRadius: "10px", width: "500px", display: "box"}}>
        <ul>{(form.object[0] !== undefined) ? form.object.map( (items, i) => <li key={i} style={{width: "100%", listStyleType: "none"}}><p style={{display: "inline-block", width: "30%"}}>{items.date}</p> <p style={{display: "inline-block", width: "30%"}}>{items.long}</p><button>🖉</button><button onClick={deleteItem}>✗</button></li>) : ""}</ul>
        </div>
        )
}

export default List
