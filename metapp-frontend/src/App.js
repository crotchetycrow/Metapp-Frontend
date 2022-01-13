import './App.css';  
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'  
import Events from './components/Events/Events' 
import EventsData from './components/Data/DummyData';

function App() {    

  const [Data, setData] = useState(EventsData)

  return (
    <div className="App">
      <NavBar/>   
      <Events data={Data}/>
    </div>

  );
}

export default App;
