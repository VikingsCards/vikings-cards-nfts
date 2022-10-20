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
        <Route index path='/' element={<Home/>}></Route>
        <Route path='/mint' element={<Mintpage/>}></Route>
        <Route path='/404=:roadmap' element={<PageNotFound/>}></Route>
        <Route path='/404=:about' element={<PageNotFound/>}></Route>
        <Route path='/404=:about' element={<PageNotFound/>}></Route>
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
