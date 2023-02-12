import React from 'react';

function Form ({form, setForm}) {

    function checkArray (event) {
        let allItm = form.object
        for(let key of allItm) {
            if(key.date === event.target[0].value) {
                key.long = Number(event.target[1].value) + Number(key.long) 
                return allItm.sort(sortItem)
            }
        }
        allItm.push({date:event.target[0].value, long:event.target[1].value})
        return allItm.sort(sortItem);
    }

    const sortItem = (a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    };

    const handleSubmit = event => {
        event.preventDefault();
        setForm({object: checkArray(event)});
    }


    return (
    <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group" style={{margin: "20px"}}>
        <input type="date" className="form-control" required/>
        </div>
        <div className="form-group">
        <input className="form-control" type="number" placeholder="Пройдено км" required/>
        </div>
        <button style={{margin: "20px"}} type="submit" className="btn btn-primary">OK</button>
    </form>
    )
}

export default Form
