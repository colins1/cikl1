import moment from 'moment-timezone';
import React, { useEffect } from 'react';

export default function List ({az, setza, onTimeout, setonTimeout, objtime, setobjtime, ab, setab, children }) {
    useEffect(componentDidUpdate, [az]);

    function componentDidUpdate() {
        if (objtime.object.length !== 0) {
            const id = setInterval(() => {
                rend(id)
            }, 1000);
            onTimeout.object.push(id);
            setonTimeout({object: onTimeout.object});
        }
    };

    function add(obj) {
        setobjtime({object: obj});
    }

    function rend (id) {
        let a = []
        objtime.object.map((it, i) => {onTimeout.object[i] === id ? it.time = moment(new Date()).add(objtime.object[i].timeZone,'hours').format('LTS') : a.push(it)})
        objtime.object.map((it, i) => {onTimeout.object[i] === id ? it.idT = onTimeout.object[i] : a.push(it)})
        add(objtime.object)
    }

    const handleSubmit = event => {
        event.preventDefault();
        objtime.object.push({title: event.target[0].value, time: moment(new Date()).add(event.target[1].value,'hours').format('LTS'), timeZone: event.target[1].value, name: event.target[0].value})
        add(objtime.object)
        setab({object: objtime.object});
        setza(event.target[0].value);
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
                <input className="form-control" type="number" placeholder="Временная зона" required/>
                </div>
                
                <button style={{margin: "20px"}} type="submit" className="btn btn-primary">OK</button>
            </form>
            <div style={{float: "left", margin: "20px", border: "solid black 2px", borderRadius: "10px", width: "500px"}}>
                <div style={{display: "flex", marginLeft: "10px"}}>
                {ab.object.length !== 0 ? ab.object.map((items) => children(items)) : ""}
                </div>
            </div>
        </div>
        )
}