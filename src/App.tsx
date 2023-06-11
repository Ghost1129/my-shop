
import './scss/pages/_app.sass';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchContent from './components/SearchContent';

function App() {
  return (
    <div className="App_container">
      {/* Navbat */}
      <Navbar/>
      <div className='lower_section'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Main */}
        <SearchContent/>
      </div>
      
    </div>
  );
}

export default App;
