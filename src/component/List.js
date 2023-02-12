import React from 'react';
import moment from 'moment-timezone';
//moment(post.date).format()
//<Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment>
function List ({form, setForm}) {

        const deleteItem = event => {
                event.preventDefault();
                const result = form.object.filter(word => event.target.parentElement.children[0].textContent !== word.date);
                setForm({object: result});
        }
        const now = moment(new Date()).tz("London").format('LTS');
        return (
        <div style={{float: "left", margin: "20px", border: "solid black 2px", borderRadius: "10px", width: "500px", display: "box"}}>
        <ul><div>{now}</div></ul>
        </div>
        )
}

export default List
