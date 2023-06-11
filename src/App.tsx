
import './scss/pages/_app.sass';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchContent from './components/SearchContent';
import { useState } from 'react';

function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10000)
  const [minrating, setminRating] = useState(0)
  return (
    <div className="App_container">
      {/* Navbat */}
      <Navbar/>
      <div className='lower_section'>
        {/* Sidebar */}
        <Sidebar min={setMin} max={setMax} rate={setminRating} />
        {/* Main */}
        <SearchContent min={min} max={max} rate={minrating} />
      </div>
      
    </div>
  );
}

export default App;
