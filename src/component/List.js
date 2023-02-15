import React, {useEffect}  from 'react';
import moment from 'moment-timezone';

function List ({time, form, setTime, newTime}) {

        useEffect(componentDidUpdate, [newTime]);

        function funcTime() {
                setInterval(function () {
                        time.object.map((item, i) => newTime.push(moment(new Date()).tz(form.object[i][1]).format('LTS')))
                        setTime({object: newTime});
                },1000);
        }

        function componentDidUpdate() {
                funcTime();
        }
        
        return ( 
                <div>{time.object.length !== 0 ? time.object.map((items, i) => <p key={i}>{items}</p>) : ""}</div>
        )
}

export default List
