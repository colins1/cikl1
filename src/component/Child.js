export default function ListItem({onTimeout, setonTimeout, objtime, setobjtime, ab, setab, children }) {
    
    function handleButton (e) {
        e.preventDefault();
        let result = objtime.object.filter(item => item.idT != e.target.id);
        setobjtime({object: result});
        let result2 = onTimeout.object.filter(item => item != e.target.id);
        setonTimeout({object: result2});
        setab({object: result});
        clearInterval(e.target.id)
    }

    return (
    <div style={{marginLeft: "10px"}} >
        <p>{children.title}</p>
        <p>{children.time}</p>
        <button id={children.idT} onClick={handleButton}>✗</button>
    </div>
    )
  }