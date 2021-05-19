import './App.scss';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="mainBody">
        <Hero/>
        <Banner/>
      </div>
    </div>
  );
}

export default App;
