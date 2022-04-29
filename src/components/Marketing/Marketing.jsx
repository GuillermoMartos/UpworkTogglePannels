import { useEffect, useState } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { firstFetch } from '../../Actions/indexActions';


function Marketing() {
  // let [data, setData] = useState([])
  const dispatch = useDispatch()
  let prueba = useSelector(state => state.state?.map(a => a))

  useEffect(() => {
    dispatch(firstFetch())
  }, [])

  return (
    <div>
      <h2 style={{"margin-left":"1em"}}>Marketing Plugins </h2>

      <div className="main">
        {prueba?.map(data =>
          <Card
            title={data.title}
            content={data.content}
            status={data.status}
            id={data.id}
            disabled={data.disabled}
          />
        )}
      </div>
    </div>
  )
}

export default Marketing
