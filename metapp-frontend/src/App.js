import './App.css'; 
import { useEffect } from 'react';

import HeadTtitle from './components/HeadTitle/HeadTitle'

const eventURL = `https://www.eventbriteapi.com/v3/users/me/?token=${process.env.REACT_APP_SECRET_NAME}`

function App() {

  useEffect(() => {

    fetch(eventURL).then(res => console.log(res))
    
  }, [])


  return (
    <div className="App">
      <HeadTtitle/>

      <div className="apiCall">
      </div>

    </div>

  );
}

export default App;
