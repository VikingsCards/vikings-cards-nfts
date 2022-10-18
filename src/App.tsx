import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import {Routes, Route} from 'react-router-dom'
import Mintpage from './Components/Mint/App';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/mint' element={<Mintpage />}></Route>
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
