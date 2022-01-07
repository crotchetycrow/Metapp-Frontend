import './App.css'; 
import HeadTtitle from './components/HeadTitle/HeadTitle' 
import HeadPharagraph from './components/HeadParagraph/HeadPharagraph' 
import ApiCall from './components/APICall/ApiCall'


function App() {

  return (
    <div className="App">
      <HeadTtitle/>
      <HeadPharagraph/>
      <ApiCall/>
    </div>

  );
}

export default App;
