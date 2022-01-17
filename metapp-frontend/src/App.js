import './App.css';  
import { useState } from 'react'   

// comaponents
import NavBar from './components/NavBar/NavBar'  
import Events from './components/Events/Events'   
import Footer from './components/Footer/Footer' 
import About from './components/About/About'

// Data
import EventsData from './components/Data/DummyData';

function App() {     

  const [Data, setData] = useState(EventsData)     

  const [newFooter, setFooter] = useState('Meta version 1.0.0')    

  const [pages, setpages] = useState(false) 
  function ShowAboutPage(e){ setpages(e) }

  return (
    <div className="App"> 
      <NavBar getAbout={ShowAboutPage}/>    
      {pages ? <About/> : null} 
      {!pages ? <Events data={Data}/> : null}
      <Footer footer={newFooter}/>
    </div>

  );
}

export default App;
