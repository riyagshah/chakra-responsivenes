import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Middle from "./components/Middle"
import Boxs from './components/Boxs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Middle/>
    <Boxs/>
    <Footer/>
    </div>
  );
}

export default App;
