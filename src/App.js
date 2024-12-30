import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header'
function App() {
  const[eventData, setEventData] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    //fetch data
    const fetchEvents =async () => {
      //we are loading/featching data
    setLoading(true)
    const res= await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
    //give us the data
    const {events} = await res.json()
    // we just want the event's data
    setEventData(events)
    setLoading(false)
  }

    fetchEvents()
    console.log(eventData);
    }, [])
  return (
    <div>
      <Header/>
      {!loading ? <Map eventData={eventData} /> : <Loader/> }

     
    </div>
  );
}

export default App;
