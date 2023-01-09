import './App.css';
import Navbar from "./pages/navbar"
import Footer from "./pages/footer"
import Home from './pages/Home';
import GoToTop from './components/GoToTop';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <GoToTop/>
    </div>
  );
}

export default App;
