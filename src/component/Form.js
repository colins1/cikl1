import List from './List';
import moment from 'moment-timezone';
import React, { useEffect } from 'react';

const Form = ({form, setForm, time, setTime}) => {

    useEffect(() => {
        const id = setInterval(() => {
            if (time.answer === true) {
                return;
            }
            a(form)
        }, 1000);
        return () => clearTimeout(id);
    }, [time]);

    function a (form) {
        let newTimeObj = []
        newTimeObj.push(moment(new Date()).tz(form.object[0][1]).format('LTS'), time.object)
        setTime({object: newTimeObj});
    }

    const handleSubmit = event => {
        event.preventDefault();
        let newObj = []
        let newTimeObj = []
        newObj.push([event.target[0].value, event.target[1].value], form.object)
        setForm({object: newObj});
        newTimeObj.push(moment(new Date()).tz(event.target[1].value).format('LTS'), time.object)
        setTime({object: newTimeObj});
    }

    return (
        <div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group" style={{margin: "20px"}}>
                <input type="text" className="form-control" placeholder="Название" required/>
                </div>
                <div className="form-group">
                <input className="form-control" type="text" placeholder="Временная зона" required/>
                </div>
                <button style={{margin: "20px"}} type="submit" className="btn btn-primary">OK</button>
            </form>
            <div style={{float: "left", margin: "20px", border: "solid black 2px", borderRadius: "10px", width: "500px", display: "box"}}><List time={time}/></div>
        </div>
    )
}

export default Form
