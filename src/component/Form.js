import moment from 'moment-timezone';
import React, { useEffect } from 'react';

const Form = ({form, setForm, onTimeout, setonTimeout, objtime, setobjtime}) => {

    useEffect(componentDidUpdate, [form]);

    function componentDidUpdate() {
        if (form.object.length !== 0) {
            const id = setInterval(() => {
                rend(form, id)
            }, 1000);
            onTimeout.object.push(id);
            setonTimeout({object: onTimeout.object});
        }
    };

    function rend (form, id) {
        let a = []
        objtime.object.map((it, i) => {onTimeout.object[i] === id ? it.time = moment(new Date()).tz(form.object[i][1]).format('LTS') : a.push(it)})
        objtime.object.map((it, i) => {onTimeout.object[i] === id ? it.idT = onTimeout.object[i] : a.push(it)})
        setobjtime({object: objtime.object});
    }

    const handleSubmit = event => {
        event.preventDefault();
        form.object.push([event.target[0].value, event.target[1].value])
        setForm({object: form.object});
        objtime.object.push({title: event.target[0].value, time: moment(new Date()).tz(event.target[1].value).format('LTS')})
        setobjtime({object: objtime.object});
    }

    function handleButton (e) {
        e.preventDefault();
        clearInterval(e.target.id)
        let result = objtime.object.filter(item => item.idT != e.target.id);
        setobjtime({object: result});
        let result1 = form.object.filter(item => item[0] != e.target.parentElement.firstChild.textContent);
        setForm({object: result1});
    }

    return (
        <div>
            <h3 style={{marginLeft: "10px"}}>Arctic/Longyearbyen</h3>
            <h3 style={{marginLeft: "10px"}}>America/Danmarkshavn</h3>
            <h3 style={{marginLeft: "10px"}}>Asia/Yakutsk</h3>
            <h3 style={{marginLeft: "10px"}}>Europe/Moscow</h3>
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group" style={{margin: "20px"}}>
                <input type="text" className="form-control" placeholder="Название" required/>
                </div>
                <div className="form-group">
                <input className="form-control" type="text" placeholder="Временная зона" required/>
                </div>
                <button style={{margin: "20px"}} type="submit" className="btn btn-primary">OK</button>
            </form>
            <div style={{float: "left", margin: "20px", border: "solid black 2px", borderRadius: "10px", width: "500px"}}>
                <div style={{display: "flex", marginLeft: "10px"}}>
                {objtime.object.length !== 0 ? objtime.object.map((items, i) => <div key={i} style={{marginLeft: "10px"}} >
                                                                                    <p>{items.title}</p>
                                                                                    <p>{items.time}</p>
                                                                                    <button id={items.idT} onClick={handleButton}>✗</button>
                                                                                </div>) : ""}
                </div>
            </div>
        </div>
    )
}

export default Form
