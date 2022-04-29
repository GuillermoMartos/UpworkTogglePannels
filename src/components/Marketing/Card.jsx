import { useEffect, useState } from 'react'
import './Card.css'

function Card({ title, content, status, id, disabled }) {
    let [toggle, setToggle] = useState(status)

    function toggleCahnge(e, id) {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: !toggle, content, title })
        };
        fetch(`http://localhost:3001/posts/${id}`, requestOptions)
        setToggle(!toggle)
    }

    let opacity={
        opacity: "1.29",
    }
    if(disabled){
        opacity={
            opacity: "0.29",
        }
    }


    return (
        <div className="main">
            <div className="cards">
                <div className='card'>
                    <div className="text">
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>

                    <div className="toggle-button" style={opacity}>
                        <label className="switch">
                            <input id={JSON.stringify(status)} disabled={disabled} defaultChecked={status} onClick={(e) => toggleCahnge(e, id)} type="checkbox" />
                            <span className="slider"></span>
                            {toggle && toggle == true ? <p style={{ color: 'green' }}>Allowed</p> : <p style={{ color: 'red' }}>Blocked</p>}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
