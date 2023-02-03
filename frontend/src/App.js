import './App.css';
import Navbar from "./pages/navbar"
import Footer from "./pages/footer"

import Home from './pages/Home';
import GoToTop from './components/GoToTop';
import Content from './pages/Content';

import Intro from './components/Intro.js';

import { useState,useEffect } from 'react';




function App() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000)

  }, [])


  return (
    <div className="App">

{loading ?

<Intro />
: <>

      <Navbar/>
      <Home/>
      <Content/>
      <GoToTop/>
      <Footer/>

      </>}
    </div>
  );
}

export default App;
