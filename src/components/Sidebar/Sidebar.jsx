import './Sidebar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function Sidebar() {
    let data = useSelector(state => state);
    let [toggle, setToggle] = useState(true)


    useEffect(() => {
        fetch("http://localhost:3001/enabled").then(res => res.json())
            .then((data) => {
                setToggle(data[0].status)
            })

        document.getElementsByClassName("color").styles = { "visibility": "visible" }
    }, [])



    async function toggleCahnge() {

        if (data?.state) {
            setToggle(!toggle)
            data.state.map(plugin => {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: plugin.status, content: plugin.content, title: plugin.title, disabled: !plugin.disabled })
                };
                fetch(`http://localhost:3001/posts/${plugin.id}`, requestOptions)
            })

            await Swal.fire({
                title: 'Updating plugins... ⏳',
                timer: 4000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            })
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: !toggle })
            };
            fetch("http://localhost:3001/enabled/1", requestOptions)
            window.location.reload();
            return;
        }

        Swal.fire({
            title: 'no plugin to<br/> enable/disable',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            }
        })
    }


    return (
        <div className="main-nav">


            <div className="links">
                <img className='logo' src="https://cdn.pixabay.com/photo/2015/07/09/13/05/citilink-837863_960_720.png" alt="logo" />

                <div className="link">
                    <div className="color"></div>
                    <Link className='refs' to="/"><img src="https://cdn.pixabay.com/photo/2017/07/27/21/37/bitcoin-2546854__340.png" alt="marketing-logo" />Finance</Link>
                </div>

                <div className="link">
                    <div className="color"></div>
                    <Link className='refs' to="/finance"><img src="https://cdn.pixabay.com/photo/2016/10/18/00/48/stopwatch-1749080_960_720.png" alt="finance-logo" />Finance</Link>
                </div>

                <div className="link">
                    <div className="color"></div>
                    <Link className='refs' to="/personnel"><img src="https://cdn.pixabay.com/photo/2020/07/24/09/25/machine-learning-5433370_960_720.png" alt="personnel-logo" />Personnel</Link>
                </div>

                {data && data?.state ?

                    <div className="option">

                        {toggle && toggle == true ?

                            <div className="bottom-toggle" style={{
                                "-webkit-box-shadow": "0px 19px 20px -1px rgba(71,196,29,0.84)",
                                "box-shadow": "0px 19px 20px -1px rgba(71,196,29,0.84);"
                            }} >

                                <p>All plugins enabled</p>
                                <label className="switch" style={{ "margin-right": "0.7em" }}>
                                    <input defaultChecked={toggle} onClick={() => toggleCahnge()} type="checkbox" />
                                    <span className="slider" style={{ "content": "X" }}></span>
                                </label>
                            </div>
                            :
                            <div className="bottom-toggle" >

                                <p>All plugins disabled</p>
                                <label className="switch" style={{ "margin-right": "0.7em" }}>
                                    <input defaultChecked={toggle} onClick={() => toggleCahnge()} type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        }
                    </div>
                    :
                    null
                }
            </div>

        </div>
    )
}

export default Sidebar