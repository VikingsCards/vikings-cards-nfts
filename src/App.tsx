import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import {Routes, Route} from 'react-router-dom'
import Mintpage from './Components/Mint/App';
import PageNotFound from './Components/404/PageNotFound';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route index path='/' element={<Mintpage/>}></Route>
        <Route path='/mint' element={<Mintpage/>}></Route>
        <Route path='/roadmap' element={<PageNotFound/>}></Route>
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
