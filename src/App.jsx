import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    
    const mainData = await axios.get('https://mern-mwf07-backend.onrender.com/courses');
    setData(mainData.data);
 
  }

  useEffect(() => {
    getData()
  }, [])

  return data ?  (
    <>
        {
        data.map((val, index) => {
          return(
            <>
              <h1 key={index + 1}>{val.courseName}</h1>
            </>
          )
        })
        }
    </>
  ) : (<h1>Loading</h1>)
}

export default App


